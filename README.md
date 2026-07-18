# Le Registre — Devis & Factures

Générateur de devis et factures pour indépendants et PM, **100 % hors ligne**.
Aucun serveur, aucune base de données distante : toutes les données (clients,
articles, devis, factures) sont stockées dans le navigateur de l'utilisateur
via IndexedDB.

C'est un site **100 % statique** (HTML/CSS/JS pur, aucun framework, aucune
étape de build) : vous pouvez donc l'héberger gratuitement sur GitHub Pages
en quelques minutes.

## Contenu du dépôt

```
.
├── index.html              → page principale de l'application
├── style.css                → mise en forme
├── app.js                   → logique de l'application (clients, devis, factures, PDF…)
├── idb-shim.js               → couche de stockage local (IndexedDB)
├── manifest.json            → fichier PWA (permet d'« installer » l'app)
├── service-worker.js        → mise en cache pour le fonctionnement hors ligne
├── icons/                   → icônes de l'application (192px, 512px)
├── .github/workflows/deploy.yml → déploiement automatique sur GitHub Pages
├── firebase-config.js       → clés Firebase (facultatif, voir SETUP-COMPTE-ET-ASSISTANT.md)
├── firestore.rules / storage.rules → règles de sécurité (isolation par utilisateur)
├── firebase.json / .firebaserc → config CLI Firebase (fonctions + règles uniquement)
├── functions/                → Cloud Function de l'assistant (index.js, package.json)
├── SETUP-COMPTE-ET-ASSISTANT.md → activer connexion par e-mail + assistant
├── LICENSE                  → licence MIT
└── .gitignore
```

## 1. Mettre le projet sur GitHub

Si vous démarrez de zéro (remplacez `mon-compte` par votre nom d'utilisateur GitHub) :

```bash
cd registre           # dossier contenant les fichiers ci-dessus
git init
git add .
git commit -m "Premier commit : générateur de devis/factures"
git branch -M main
git remote add origin https://github.com/mon-compte/registre.git
git push -u origin main
```

Si GitHub vous demande de vous authentifier : utilisez un **token d'accès
personnel** (Settings → Developer settings → Personal access tokens) à la
place d'un mot de passe, ou connectez-vous via `gh auth login` si vous avez
la CLI GitHub installée.

## 2. Activer GitHub Pages

Deux façons de faire, au choix :

**Option A — automatique (recommandée, déjà configurée)**
1. Sur GitHub, allez dans **Settings → Pages**.
2. Sous « Build and deployment », choisissez **Source : GitHub Actions**.
3. Le workflow `.github/workflows/deploy.yml` (déjà inclus) se déclenchera
   automatiquement à chaque `push` sur `main` et publiera le site.
4. Après quelques secondes, l'URL de votre site apparaît en haut de la page
   **Settings → Pages** (généralement `https://mon-compte.github.io/registre/`).

**Option B — manuelle, sans workflow**
1. **Settings → Pages**.
2. Sous « Build and deployment », choisissez **Source : Deploy from a
   branch**, puis branche `main`, dossier `/ (root)`.
3. Enregistrez ; GitHub publie le site en 1 à 2 minutes.

## 3. Tester en local avant de publier (facultatif)

Comme le service worker et IndexedDB nécessitent un vrai serveur (pas un
simple double-clic sur `index.html`), lancez un petit serveur local :

```bash
# avec Python (déjà installé sur Mac/Linux)
python3 -m http.server 8000

# ou avec Node.js
npx serve .
```

Puis ouvrez `http://localhost:8000`.

## Fonctionnement des données

- Les clients, articles, devis et factures sont enregistrés dans
  **IndexedDB**, une base de données intégrée au navigateur. Elles restent
  sur l'appareil de la personne qui utilise le site : rien n'est envoyé à
  un serveur.
- Cela signifie aussi que les données **ne se synchronisent pas** entre
  plusieurs appareils ou navigateurs. Si vous changez d'ordinateur, vous
  repartez avec une base vide sur le nouvel appareil.
- Pour sauvegarder ou transférer les données, le plus simple est d'ajouter
  un export/import JSON (voir « Pistes d'amélioration » ci-dessous).

## Export PDF

L'export PDF utilise la librairie **jsPDF** (+ jspdf-autotable), chargée
depuis un CDN (cdnjs) dans `index.html`. Cela veut dire :
- la première visite nécessite une connexion Internet pour charger ces
  scripts (ensuite ils sont mis en cache par le service worker et
  fonctionnent hors ligne) ;
- si vous voulez une indépendance réseau totale dès la première visite,
  téléchargez `jspdf.umd.min.js` et `jspdf-autotable.min.js` dans un dossier
  `vendor/` du projet et remplacez les balises `<script src="https://cdnjs...">`
  par des chemins locaux dans `index.html`.

## Personnaliser

- **Couleurs / typographies** : tout est centralisé dans les variables CSS
  en haut de `style.css` (`:root { --paper: …; --ink: …; --stamp: …; }`).
- **Nom de l'entreprise, TVA, IBAN, mentions légales** : se règle directement
  dans l'application, page « Mon entreprise ».
- **Nom de domaine personnalisé** : ajoutez un fichier `CNAME` à la racine
  contenant votre domaine, puis configurez un enregistrement DNS `CNAME`
  vers `mon-compte.github.io`.

## Pistes d'amélioration

- Export / import des données en JSON (sauvegarde manuelle).
- Synchronisation optionnelle via un petit backend (Supabase, Firebase…) si
  vous avez besoin d'accéder aux mêmes données depuis plusieurs appareils.
- Envoi de devis/factures par e-mail directement depuis l'application.

## Licence

MIT — voir [LICENSE](LICENSE). Faites-en ce que vous voulez.
