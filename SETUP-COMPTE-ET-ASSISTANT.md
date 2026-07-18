# Activer la connexion par e-mail et l'assistant (facultatif)

Ces deux fonctionnalités sont **optionnelles**. Sans elles, l'application
continue de fonctionner exactement comme avant : 100 % hors ligne, données
stockées uniquement sur l'appareil.

## 1. Créer un projet Firebase

1. Allez sur https://console.firebase.google.com et créez un projet
   (gratuit, aucune carte bancaire nécessaire à ce stade).
2. **Authentication** → Sign-in method → activez « E-mail/Lien » (connexion
   sans mot de passe, par lien envoyé par e-mail).
3. **Firestore Database** → Créer une base, en mode production.
4. **Storage** → Commencer, en mode production.
5. **Paramètres du projet** (⚙️) → Vos applications → Ajouter une application
   Web (icône `</>`) → copiez la configuration affichée.

## 2. Configurer le site

Collez la configuration obtenue à l'étape 1.5 dans `firebase-config.js`,
à la place des valeurs `VOTRE_...`.

Tant que ce fichier n'est pas rempli, l'application reste 100 % locale :
aucune fonctionnalité existante n'est cassée.

## 3. Déployer les règles de sécurité

Avec la CLI Firebase (`npm install -g firebase-tools`, puis `firebase login`) :

```bash
firebase use --add          # choisissez votre projet, alias "default"
firebase deploy --only firestore:rules,storage:rules
```

Cela publie `firestore.rules` et `storage.rules`, qui garantissent que
chaque utilisateur ne peut lire/écrire que ses propres données.

## 4. Activer l'assistant (chatbot)

L'assistant tourne dans une Cloud Function (dossier `functions/`), pas dans
le navigateur, car la clé API Anthropic doit rester secrète.

1. Passez le projet Firebase au plan **Blaze** (paiement à l'usage) —
   obligatoire pour qu'une fonction puisse appeler un service externe.
2. Définissez le secret :
   ```bash
   firebase functions:secrets:set ANTHROPIC_API_KEY
   ```
3. Installez les dépendances et déployez :
   ```bash
   cd functions
   npm install
   cd ..
   firebase deploy --only functions
   ```
4. Le déploiement affiche une URL du type
   `https://europe-west1-VOTRE_PROJET.cloudfunctions.net/askAssistant`.
   Collez-la dans `firebase-config.js`, champ `window.CHAT_ENDPOINT`.

Tant que ce champ est vide, le bouton d'assistant reste visible mais
indique clairement qu'il n'est pas encore configuré.

## 5. Activer l'envoi automatique des PDF par e-mail (optionnel)

Sans cette étape, le bouton « Envoyer par e-mail » fonctionne déjà : il
prépare le PDF (téléchargement ou partage natif selon l'appareil) puis ouvre
votre messagerie avec le destinataire, l'objet et le message pré-remplis —
il ne reste qu'à joindre le fichier manuellement, car un site web ne peut
pas joindre un fichier à votre place dans un `mailto:`.

Pour un envoi 100 % automatique (sans ouvrir votre messagerie), déployez la
fonction cloud `sendInvoiceEmail` :

1. Munissez-vous d'un compte e-mail dédié à l'envoi (Gmail fonctionne bien).
   Sur Gmail : activez la validation en deux étapes, puis créez un **mot de
   passe d'application** (Compte Google → Sécurité → Mots de passe des
   applications). N'utilisez jamais votre mot de passe Gmail normal ici.
2. Définissez les secrets :
   ```bash
   firebase functions:secrets:set SMTP_HOST
   # exemple de valeur : smtp.gmail.com
   firebase functions:secrets:set SMTP_USER
   # exemple de valeur : votreadresse@gmail.com
   firebase functions:secrets:set SMTP_PASS
   # collez ici le mot de passe d'application, pas votre mot de passe normal
   ```
3. Déployez :
   ```bash
   cd functions
   npm install
   cd ..
   firebase deploy --only functions
   ```
4. Le déploiement affiche une URL du type
   `https://europe-west1-VOTRE_PROJET.cloudfunctions.net/sendInvoiceEmail`.
   Collez-la dans `firebase-config.js`, champ `window.EMAIL_ENDPOINT`.

Tant que ce champ est vide, le bouton reste sur le comportement décrit
au début de cette section (préparation + mailto) : rien n'est cassé si vous
ne faites pas cette étape.

## 6. Activer le tableau de bord admin (optionnel)

Réservé à votre propre compte. Il affiche : nombre d'utilisateurs inscrits,
nombre de devis/factures créés au total, nombre de questions posées à
l'assistant, et la liste des comptes (e-mail, date d'inscription, dernière
connexion). Il ne donne jamais accès au contenu des devis/factures de vos
utilisateurs — `firestore.rules` continue de l'interdire, même pour vous.

1. Définissez la liste des e-mails autorisés comme administrateur :
   ```bash
   firebase functions:secrets:set ADMIN_EMAIL
   # exemple de valeur : vous@exemple.com
   # (plusieurs adresses possibles, séparées par des virgules)
   ```
2. Déployez :
   ```bash
   cd functions
   npm install
   cd ..
   firebase deploy --only functions,firestore:rules
   ```
3. Le déploiement affiche deux URLs, `grantAdmin` et `getAdminStats`. Collez-les
   dans `firebase-config.js` :
   ```js
   window.ADMIN_GRANT_ENDPOINT = "https://europe-west1-VOTRE_PROJET.cloudfunctions.net/grantAdmin";
   window.ADMIN_STATS_ENDPOINT = "https://europe-west1-VOTRE_PROJET.cloudfunctions.net/getAdminStats";
   ```
4. Dans l'application, connectez-vous avec l'adresse e-mail que vous avez
   mise dans `ADMIN_EMAIL` (page Réglages → Compte), puis cliquez sur
   **Devenir administrateur**. L'entrée « Administration » apparaît alors
   dans le menu.

Tant que vous ne faites pas cette étape, aucune entrée « Administration »
n'apparaît dans l'application : rien n'est cassé si vous ne la configurez pas.

## Important — GitHub Pages

Le site lui-même **reste hébergé sur GitHub Pages**, inchangé. Firebase
n'est utilisé ici que pour trois choses : l'authentification, la base
Firestore (sync multi-appareils) et la Cloud Function de l'assistant.
Aucune de ces étapes ne modifie l'hébergement du site.
