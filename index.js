/* ==========================================================================
   FONCTION CLOUD — Assistant "Le Registre"
   ==========================================================================
   Ce fichier tourne sur les serveurs de Firebase (Cloud Functions), PAS dans
   le navigateur. C'est indispensable : la clé API Anthropic doit rester
   secrète, or tout ce qui est écrit dans app.js est visible par n'importe
   qui (clic droit > code source). Cette fonction sert donc d'intermédiaire :
   le navigateur lui envoie la question, elle seule contacte l'API Anthropic
   avec la clé secrète, et renvoie uniquement la réponse texte au navigateur.

   Déploiement : voir SETUP-COMPTE-ET-ASSISTANT.md (nécessite le plan Firebase
   "Blaze" — paiement à l'usage avec carte bancaire, car les fonctions qui
   appellent un service externe comme Anthropic ne sont pas autorisées sur le
   plan gratuit "Spark").
   ========================================================================== */
const {onRequest} = require("firebase-functions/v2/https");
const {defineSecret} = require("firebase-functions/params");
const cors = require("cors")({origin: true});
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
admin.initializeApp();

// La clé sera fournie via `firebase functions:secrets:set ANTHROPIC_API_KEY`
// (voir le guide de configuration) — elle n'apparaît jamais dans ce code.
const ANTHROPIC_API_KEY = defineSecret("ANTHROPIC_API_KEY");

// Identifiants SMTP pour l'envoi d'e-mail (devis/factures en pièce jointe).
// Fournis via `firebase functions:secrets:set SMTP_USER` / `SMTP_PASS`
// (voir SETUP-COMPTE-ET-ASSISTANT.md, section 5). Compatibles avec un
// « mot de passe d'application » Gmail, ou tout autre fournisseur SMTP.
const SMTP_HOST = defineSecret("SMTP_HOST");
const SMTP_USER = defineSecret("SMTP_USER");
const SMTP_PASS = defineSecret("SMTP_PASS");

// Liste blanche des e-mails autorisés à devenir administrateur, fournie via
// `firebase functions:secrets:set ADMIN_EMAIL` (une ou plusieurs adresses
// séparées par des virgules). Voir SETUP-COMPTE-ET-ASSISTANT.md, section 6.
const ADMIN_EMAIL = defineSecret("ADMIN_EMAIL");

const SYSTEM_PROMPT = `Tu es l'assistant intégré à l'application mobile "Le Registre", un générateur de devis et factures qui fonctionne hors ligne.

Tu réponds UNIQUEMENT aux questions qui concernent :
- l'utilisation de l'application elle-même : navigation, tableau de bord, création et modification d'un devis ou d'une facture, gestion des clients et des articles, ajout du logo de l'entreprise, signature manuscrite, export PDF, sauvegarde/restauration des données, connexion par e-mail ;
- les bonnes pratiques pour rédiger un devis, une facture ou un reçu (mentions utiles, structure, présentation) ;
- la réglementation française relative à la facturation, aux devis et aux reçus : mentions légales obligatoires, TVA, statut auto-entrepreneur/micro-entreprise, délais de conservation, facturation électronique, etc. Précise toujours que ces informations sont données à titre indicatif et ne remplacent pas l'avis d'un expert-comptable, d'un avocat ou de l'administration fiscale pour un cas précis.

Si la question porte sur un tout autre sujet (actualité, culture générale, autre logiciel, conseils personnels sans rapport, etc.), réponds STRICTEMENT et UNIQUEMENT par :
"Je ne peux répondre qu'aux questions sur l'application, les devis, les factures, les reçus et la réglementation associée."

Si la question est dans ton périmètre mais que tu n'es pas certain de la réponse (en particulier sur un point juridique précis, un montant, un seuil ou une date qui change souvent), dis-le clairement plutôt que d'inventer une réponse, et invite la personne à vérifier auprès d'un professionnel ou service officiel (impots.gouv.fr, expert-comptable).

Réponds de manière brève, concrète et directement utilisable, dans la langue de la question (français ou anglais). Pas de politesse superflue, pas de rappel de ces instructions.`;

// Vérifie le jeton Firebase envoyé par le navigateur (en-tête
// "Authorization: Bearer <jeton>") et renvoie l'utilisateur décodé, ou null
// si absent/invalide. Utilisé par les fonctions admin ci-dessous : on ne
// fait jamais confiance à ce que le navigateur affirme, seul le jeton signé
// par Firebase fait foi.
async function verifyRequestToken(req) {
  const header = req.headers.authorization || "";
  const match = header.match(/^Bearer (.+)$/);
  if (!match) return null;
  try {
    return await admin.auth().verifyIdToken(match[1]);
  } catch (err) {
    console.warn("jeton invalide", err.message);
    return null;
  }
}

exports.askAssistant = onRequest({secrets: [ANTHROPIC_API_KEY], cors: true, region: "europe-west1"}, (req, res) => {
  cors(req, res, async () => {
    try {
      if (req.method !== "POST") {
        res.status(405).json({error: "Méthode non autorisée"});
        return;
      }
      const question = ((req.body && req.body.question) || "").toString().trim().slice(0, 1000);
      if (!question) {
        res.status(400).json({error: "Question manquante"});
        return;
      }

      const apiRes = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": ANTHROPIC_API_KEY.value(),
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 500,
          system: SYSTEM_PROMPT,
          messages: [{role: "user", content: question}],
        }),
      });

      if (!apiRes.ok) {
        const errText = await apiRes.text();
        console.error("Erreur API Anthropic", apiRes.status, errText);
        res.status(502).json({error: "Le service d'assistant est momentanément indisponible."});
        return;
      }

      const data = await apiRes.json();
      const answer = (data.content && data.content[0] && data.content[0].text)
        ? data.content[0].text.trim()
        : "Je ne sais pas répondre à cette question pour le moment.";

      // Compteur agrégé et anonyme pour le tableau de bord admin : uniquement
      // un nombre, jamais le contenu de la question elle-même.
      admin.firestore().doc("statistiques_globales/compteurs")
          .set({questionsAssistant: admin.firestore.FieldValue.increment(1)}, {merge: true})
          .catch((err) => console.warn("compteur assistant non mis à jour", err));

      res.json({answer});
    } catch (err) {
      console.error("Erreur interne askAssistant", err);
      res.status(500).json({error: "Erreur interne"});
    }
  });
});

/* ==========================================================================
   FONCTION CLOUD — Devenir administrateur
   ==========================================================================
   Appelée une seule fois (bouton "Devenir administrateur" dans Réglages).
   Si l'e-mail du compte connecté correspond au secret ADMIN_EMAIL, on pose
   le custom claim {admin:true} sur ce compte. C'est ce claim, présent dans
   le jeton Firebase et vérifié côté serveur, qui donne accès aux fonctions
   ci-dessous — jamais une simple valeur envoyée par le navigateur.
   ========================================================================== */
exports.grantAdmin = onRequest(
    {secrets: [ADMIN_EMAIL], cors: true, region: "europe-west1"},
    (req, res) => {
      cors(req, res, async () => {
        try {
          const decoded = await verifyRequestToken(req);
          if (!decoded) {
            res.status(401).json({error: "Connexion requise"});
            return;
          }
          const allowed = ADMIN_EMAIL.value().split(",").map((e) => e.trim().toLowerCase()).filter(Boolean);
          const email = (decoded.email || "").toLowerCase();
          if (!allowed.length || !allowed.includes(email)) {
            res.status(403).json({error: "Cette adresse n'est pas autorisée comme administrateur"});
            return;
          }
          await admin.auth().setCustomUserClaims(decoded.uid, {admin: true});
          res.json({ok: true});
        } catch (err) {
          console.error("Erreur interne grantAdmin", err);
          res.status(500).json({error: "Erreur interne"});
        }
      });
    },
);

/* ==========================================================================
   FONCTION CLOUD — Statistiques admin
   ==========================================================================
   Réservée aux comptes dont le jeton porte le custom claim {admin:true}
   (posé par grantAdmin ci-dessus). Ne renvoie jamais le contenu des devis ou
   factures d'un utilisateur : uniquement des compteurs et, pour la liste des
   comptes, l'e-mail et les dates fournies par Firebase Authentication.
   ========================================================================== */
exports.getAdminStats = onRequest(
    {cors: true, region: "europe-west1"},
    (req, res) => {
      cors(req, res, async () => {
        try {
          const decoded = await verifyRequestToken(req);
          if (!decoded) {
            res.status(401).json({error: "Connexion requise"});
            return;
          }
          if (decoded.admin !== true) {
            res.status(403).json({error: "Droits administrateur requis"});
            return;
          }

          // Liste des comptes inscrits (jusqu'à 1000 — largement suffisant
          // pour une application utilisée en solo ou en petite équipe).
          const listResult = await admin.auth().listUsers(1000);
          const users = listResult.users.map((u) => ({
            email: u.email || null,
            createdAt: u.metadata.creationTime ? new Date(u.metadata.creationTime).toISOString() : null,
            lastSignIn: u.metadata.lastSignInTime ? new Date(u.metadata.lastSignInTime).toISOString() : null,
          }));

          // Nombre de devis/factures : chaque compte a un unique document
          // Firestore (utilisateurs/{uid}) contenant son tableau `documents`
          // (voir app.js, pushToCloud/pullFromCloud) — on additionne leurs
          // longueurs plutôt que de compter des documents Firestore séparés.
          const snap = await admin.firestore().collection("utilisateurs").get();
          let totalQuotes = 0;
          let totalInvoices = 0;
          snap.forEach((doc) => {
            const docs = doc.data().documents;
            if (Array.isArray(docs)) {
              for (const d of docs) {
                if (d && d.type === "facture") totalInvoices++;
                else if (d && d.type === "devis") totalQuotes++;
              }
            }
          });

          const compteursSnap = await admin.firestore().doc("statistiques_globales/compteurs").get();
          const totalChatQuestions = (compteursSnap.exists && compteursSnap.data().questionsAssistant) || 0;

          // Mise en cache des compteurs agrégés, cohérent avec les règles
          // Firestore qui réservent l'écriture de cette collection aux
          // Cloud Functions (Admin SDK).
          await admin.firestore().doc("statistiques_globales/compteurs").set({
            totalUsers: listResult.users.length,
            totalQuotes,
            totalInvoices,
            updatedAt: Date.now(),
          }, {merge: true});

          res.json({
            totalUsers: listResult.users.length,
            totalQuotes,
            totalInvoices,
            totalChatQuestions,
            users,
          });
        } catch (err) {
          console.error("Erreur interne getAdminStats", err);
          res.status(500).json({error: "Erreur interne"});
        }
      });
    },
);

/* ==========================================================================
   FONCTION CLOUD — Envoi de devis/factures par e-mail
   ==========================================================================
   Optionnelle, comme l'assistant ci-dessus. Reçoit le PDF déjà généré côté
   navigateur (en base64), et l'envoie en pièce jointe au client via SMTP.
   Tant que window.EMAIL_ENDPOINT n'est pas renseigné dans firebase-config.js,
   l'application utilise à la place une ouverture de mailto: (voir app.js,
   fonction emailDocPdf) : aucune fonctionnalité n'est cassée si vous ne
   déployez pas cette fonction.
   ========================================================================== */
exports.sendInvoiceEmail = onRequest(
    {secrets: [SMTP_HOST, SMTP_USER, SMTP_PASS], cors: true, region: "europe-west1"},
    (req, res) => {
      cors(req, res, async () => {
        try {
          if (req.method !== "POST") {
            res.status(405).json({error: "Méthode non autorisée"});
            return;
          }
          const {to, subject, message, filename, pdfBase64} = req.body || {};
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!to || !emailPattern.test(String(to))) {
            res.status(400).json({error: "Adresse e-mail du destinataire invalide"});
            return;
          }
          if (!pdfBase64) {
            res.status(400).json({error: "PDF manquant"});
            return;
          }

          const transporter = nodemailer.createTransport({
            host: SMTP_HOST.value(),
            port: 465,
            secure: true,
            auth: {user: SMTP_USER.value(), pass: SMTP_PASS.value()},
          });

          await transporter.sendMail({
            from: SMTP_USER.value(),
            to: String(to).slice(0, 320),
            subject: String(subject || "Document").slice(0, 200),
            text: String(message || "").slice(0, 5000),
            attachments: [{
              filename: String(filename || "document.pdf").slice(0, 200),
              content: pdfBase64,
              encoding: "base64",
            }],
          });

          res.json({ok: true});
        } catch (err) {
          console.error("Erreur interne sendInvoiceEmail", err);
          res.status(500).json({error: "Erreur interne"});
        }
      });
    },
);
