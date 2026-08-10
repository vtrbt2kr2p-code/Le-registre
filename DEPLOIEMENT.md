# Publier Le Registre : où placer chaque fichier

L'archive contient un seul dossier : `Le-registre-main`.

## 1. Mettre à jour le site visible par vos utilisateurs

Ce sont les fichiers à envoyer dans le dépôt GitHub qui publie actuellement
`https://vtrbt2kr2p-code.github.io/Le-registre/`.

1. Ouvrez ce dépôt GitHub.
2. À sa racine, remplacez les fichiers existants par le contenu de
   `Le-registre-main` : `index.html`, `app.js`, `style.css`,
   `service-worker.js`, `firebase-config.js`, les icônes et les fichiers de
   configuration.
3. Conservez aussi le dossier `functions` : il est nécessaire à Firebase.
4. Validez les changements avec un commit puis un push sur la branche publiée
   (généralement `main`).

Ne déposez pas le fichier ZIP dans GitHub Pages : il faut d'abord l'extraire,
puis envoyer le contenu du dossier `Le-registre-main`.

## 2. Publier les services Firebase (connexion, IA et e-mails)

Firebase ne reçoit pas les fichiers du site dans sa console. Depuis votre
ordinateur, ouvrez un terminal **dans le dossier `Le-registre-main`**, puis
exécutez :

```bash
npm install -g firebase-tools
firebase login
firebase use le-registre1
cd functions
npm install
cd ..
firebase deploy --only functions,firestore:rules,storage:rules
```

Avant le déploiement, configurez les secrets demandés ; Firebase les demande
sans afficher leur contenu :

```bash
firebase functions:secrets:set ANTHROPIC_API_KEY
firebase functions:secrets:set SMTP_HOST
firebase functions:secrets:set SMTP_USER
firebase functions:secrets:set SMTP_PASS
firebase functions:secrets:set ADMIN_EMAIL
```

- `ANTHROPIC_API_KEY` active l'assistant IA.
- Les trois secrets `SMTP_*` activent l'envoi automatique des PDF par e-mail.
- `ADMIN_EMAIL` est l'adresse autorisée à devenir administrateur.

Après le déploiement, ouvrez le site, connectez-vous depuis **Réglages**, puis
testez l'assistant IA, l'envoi d'e-mail et la synchronisation.
