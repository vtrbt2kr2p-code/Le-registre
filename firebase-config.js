/* ==========================================================================
   CONFIGURATION FIREBASE — à compléter par vous-même
   ==========================================================================
   Ces valeurs (apiKey, authDomain, etc.) ne sont PAS secrètes : c'est normal
   et sans danger qu'elles apparaissent dans le code d'un site web. La vraie
   sécurité de vos données est assurée par les règles Firestore
   (fichier firestore.rules), pas par le fait de cacher ces identifiants.

   COMMENT LES OBTENIR :
   1. Allez sur https://console.firebase.google.com et créez un projet
      (gratuit, quelques clics, aucune carte bancaire nécessaire à ce stade).
   2. Dans le projet : Authentication > Sign-in method > activez
      "E-mail/Lien" (connexion sans mot de passe).
   3. Dans le projet : Firestore Database > Créer une base (mode production).
   4. Paramètres du projet (⚙️) > Vos applications > Ajouter une application
      "Web" (icône </>) > copiez la configuration affichée ci-dessous, à la
      place des valeurs d'exemple.

   Tant que ces valeurs ne sont pas remplies, l'application continue de
   fonctionner normalement, uniquement en local (comme avant).
   ========================================================================== */
window.FIREBASE_CONFIG = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "VOTRE_PROJET.firebaseapp.com",
  projectId: "VOTRE_PROJET",
  storageBucket: "VOTRE_PROJET.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:xxxxxxxxxxxxxxxxxx"
};

/* ==========================================================================
   ASSISTANT (chatbot) — optionnel, nécessite d'avoir déployé la fonction
   cloud fournie dans le dossier /functions (voir SETUP-COMPTE-ET-ASSISTANT.md).
   Une fois déployée, collez ici l'URL qui vous a été donnée après
   `firebase deploy --only functions`.
   Tant que ce champ est vide, le bouton d'assistant reste visible mais
   indique clairement qu'il n'est pas encore configuré.
   ========================================================================== */
window.CHAT_ENDPOINT = "";

/* ==========================================================================
   ENVOI D'E-MAIL — optionnel, nécessite d'avoir déployé la fonction cloud
   `sendInvoiceEmail` fournie dans /functions (voir SETUP-COMPTE-ET-ASSISTANT.md,
   section 5). Une fois déployée, collez ici l'URL qui vous a été donnée après
   `firebase deploy --only functions`.
   Tant que ce champ est vide, le bouton « Envoyer par e-mail » fonctionne
   quand même : il prépare le PDF (téléchargement/partage) puis ouvre votre
   messagerie pré-remplie, à vous de joindre le fichier manuellement.
   ========================================================================== */
window.EMAIL_ENDPOINT = "";

/* ==========================================================================
   TABLEAU DE BORD ADMIN — optionnel, réservé à votre propre compte.
   Nécessite d'avoir déployé les fonctions `grantAdmin` et `getAdminStats`
   (voir SETUP-COMPTE-ET-ASSISTANT.md, section 6). Collez ici les deux URLs
   affichées après `firebase deploy --only functions`.
   Tant que ces champs sont vides, aucune entrée « Administration » n'apparaît
   dans l'application : rien n'est cassé si vous ne faites pas cette étape.
   ========================================================================== */
window.ADMIN_GRANT_ENDPOINT = "";
window.ADMIN_STATS_ENDPOINT = "";
