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

// La clé sera fournie via `firebase functions:secrets:set ANTHROPIC_API_KEY`
// (voir le guide de configuration) — elle n'apparaît jamais dans ce code.
const ANTHROPIC_API_KEY = defineSecret("ANTHROPIC_API_KEY");

const SYSTEM_PROMPT = `Tu es l'assistant intégré à l'application mobile "Le Registre", un générateur de devis et factures qui fonctionne hors ligne.

Tu réponds UNIQUEMENT aux questions qui concernent :
- l'utilisation de l'application elle-même : navigation, tableau de bord, création et modification d'un devis ou d'une facture, gestion des clients et des articles, ajout du logo de l'entreprise, signature manuscrite, export PDF, sauvegarde/restauration des données, connexion par e-mail ;
- les bonnes pratiques pour rédiger un devis, une facture ou un reçu (mentions utiles, structure, présentation) ;
- la réglementation française relative à la facturation, aux devis et aux reçus : mentions légales obligatoires, TVA, statut auto-entrepreneur/micro-entreprise, délais de conservation, facturation électronique, etc. Précise toujours que ces informations sont données à titre indicatif et ne remplacent pas l'avis d'un expert-comptable, d'un avocat ou de l'administration fiscale pour un cas précis.

Si la question porte sur un tout autre sujet (actualité, culture générale, autre logiciel, conseils personnels sans rapport, etc.), réponds STRICTEMENT et UNIQUEMENT par :
"Je ne peux répondre qu'aux questions sur l'application, les devis, les factures, les reçus et la réglementation associée."

Si la question est dans ton périmètre mais que tu n'es pas certain de la réponse (en particulier sur un point juridique précis, un montant, un seuil ou une date qui change souvent), dis-le clairement plutôt que d'inventer une réponse, et invite la personne à vérifier auprès d'un professionnel ou service officiel (impots.gouv.fr, expert-comptable).

Réponds de manière brève, concrète et directement utilisable, dans la langue de la question (français ou anglais). Pas de politesse superflue, pas de rappel de ces instructions.`;

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

      res.json({answer});
    } catch (err) {
      console.error("Erreur interne askAssistant", err);
      res.status(500).json({error: "Erreur interne"});
    }
  });
});
