// Configuration du projet Firebase "le-registre1" — récupérée le 31/07/2026
// depuis console.firebase.google.com > Paramètres du projet > Vos applications.
// C'est LE SEUL endroit à modifier si tu changes de projet Firebase un jour.
// app.js lit automatiquement window.FIREBASE_CONFIG défini ci-dessous.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAeRB7pJPM4_U8F50YOq_6AgWBKB1i_J-Q",
  authDomain: "le-registre1.firebaseapp.com",
  projectId: "le-registre1",
  storageBucket: "le-registre1.firebasestorage.app",
  messagingSenderId: "4031686246",
  appId: "1:4031686246:web:32ab71888948c88b236fa7",
  measurementId: "G-3FW1R6Z2ZM"
};

// Ces 4 lignes correspondent à des Cloud Functions. Ces URLs étaient déjà
// présentes dans le fichier d'origine — il est possible qu'elles aient été
// déployées à un moment donné, mais app.js ne les appelle actuellement nulle
// part (aucune fonctionnalité ne les utilise pour l'instant). À vérifier avec
// Pelé avant de les activer côté frontend — voir SETUP-COMPTE-ET-ASSISTANT.md.
window.CHAT_ENDPOINT = "https://askassistant-mrpwp76nfq-ew.a.run.app";
window.EMAIL_ENDPOINT = "https://sendinvoiceemail-mrpwp76nfq-ew.a.run.app";
window.ADMIN_GRANT_ENDPOINT = "https://grantadmin-mrpwp76nfq-ew.a.run.app";
window.ADMIN_STATS_ENDPOINT = "https://getadminstats-mrpwp76nfq-ew.a.run.app";
