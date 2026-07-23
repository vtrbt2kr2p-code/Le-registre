/* ============================= ICONS ============================= */
const ICONS = {
  ledger:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>`,
  users:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><path d="M16.5 6.5a3.2 3.2 0 0 1 0 6.4M21.5 20c0-3-2-5.2-5-5.9"/></svg>`,
  box:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v9l9 5 9-5V8M12 13v9"/></svg>`,
  plus:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 5v14M5 12h14"/></svg>`,
  search:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>`,
  gear:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>`,
  pdf:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>`,
  trash:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>`,
  edit:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>`,
  copy:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  arrow:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  x:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  menu:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  building:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 21V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v15"/><path d="M15 21V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11"/><path d="M8 8h0M8 12h0M8 16h0M2 21h20"/></svg>`,
  empty:`<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M4 4h16v16H4z"/><path d="M8 9h8M8 13h5"/></svg>`,
  signature:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 17c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/><path d="M3 21h18"/></svg>`,
  image:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="1.8"/><path d="M21 15l-5-5-9 9"/></svg>`,
  chat:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 9 9 0 0 1-2.6-.4L3 21l1.5-4.5A8.3 8.3 0 0 1 3 11.5 8.4 8.4 0 0 1 11.9 3a8.5 8.5 0 0 1 9.1 8.5z"/></svg>`,
  mail:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
};

/* ============================= TRANSLATIONS ============================= */
const TRANSLATIONS = {
  fr: {
    appName: 'Le Registre', appTagline: 'Gestion commerciale connectée',
    navDashboard: 'Tableau de bord', navClients: 'Clients', navArticles: 'Articles & services', navSettings: 'Mon entreprise', navPreferences: 'Réglages', navAdmin: 'Administration',
    sidebarPrivacy: "Vos données sont sécurisées sur cet appareil et synchronisées dès votre connexion.",
    newQuoteBtn: 'Nouveau devis', loading: 'Chargement du registre…',
    guideBtn: "Guide d'utilisation (PDF)",
    legalLinkBtn: 'Mentions légales & CGU', legalTitle: 'Informations légales',
    legalSubtitle: "Conditions d'utilisation, confidentialité, mentions légales et à propos.",
    legalTabCgu: "Conditions d'utilisation", legalTabPrivacy: 'Politique de confidentialité',
    legalTabMentions: 'Mentions légales', legalTabAbout: 'À propos',
    eyebrowOverview: "Vue d'ensemble", dashboardTitle: 'Tableau de bord',
    dashboardSubtitle: 'Vos devis et factures, classés par ordre chronologique.',
    statQuotesIssued: 'Devis émis', statInvoicesIssued: 'Factures émises',
    statPaidThisMonth: 'Encaissé ce mois-ci', statPending: 'En attente de paiement',
    searchPlaceholder: 'Rechercher un numéro ou un client…',
    filterAll: 'Tous', filterQuotes: 'Devis', filterInvoices: 'Factures',
    colType: 'Type', colNumber: 'Numéro', colClient: 'Client', colDate: 'Date',
    colStatus: 'Statut', colTotalTTC: 'Total TTC',
    emptyNoDocs: "Aucun document pour l'instant. Créez votre premier devis.",
    emptySearch: 'Aucun résultat pour cette recherche.',
    badgeQuote: 'Devis', badgeInvoice: 'Facture',
    statusDraft: 'Brouillon', statusSent: 'Envoyé', statusAccepted: 'Accepté', statusPaid: 'Payée',
    eyebrowDirectory: 'Répertoire', clientsTitle: 'Clients',
    clientsSubtitle: 'Réutilisez ces fiches lors de la création de devis et factures.',
    newClientBtn: 'Nouveau client', colName: 'Nom', colAddress: 'Adresse',
    colTaxId: 'N° TVA / SIRET', colEmail: 'E-mail', emptyClients: 'Aucun client enregistré.',
    editTitle: 'Modifier', deleteTitle: 'Supprimer',
    eyebrowLibrary: 'Bibliothèque', articlesTitle: 'Articles & services',
    articlesSubtitle: 'Vos prestations récurrentes, prêtes à insérer dans une ligne de devis.',
    newArticleBtn: 'Nouvel article', colDescription: 'Description',
    colUnitPriceHT: 'Prix unitaire HT', colVat: 'TVA', emptyArticles: 'Aucun article enregistré.',
    eyebrowHeader: 'En-tête des documents', settingsTitle: 'Mon entreprise',
    settingsSubtitle: 'Ces informations apparaissent sur chaque devis et facture exportés en PDF.',
    fieldCompanyName: "Nom de l'entreprise", fieldAddress: 'Adresse', fieldSiret: 'SIRET',
    fieldVat: 'N° TVA intracommunautaire', fieldIban: 'IBAN (facultatif)',
    fieldCurrency: 'Devise', currencyHint: "S'applique automatiquement à tous vos devis et factures.",
    fieldFont: 'Police du titre (PDF)', fontDefaultOption: 'Par défaut',
    fontHint: "S'applique au titre « Devis »/« Facture » du PDF exporté. Nécessite une connexion Internet lors du premier export avec cette police ; en cas d'échec, le style par défaut est utilisé automatiquement.",
    fieldFooterNote: 'Mention de pied de page', saveBtn: 'Enregistrer',
    fieldLogo: "Logo de l'entreprise",
    logoHint: 'Ce logo apparaîtra, arrondi, en en-tête de chaque devis et facture exportés en PDF.',
    logoUploadBtn: 'Choisir une image', logoRemoveBtn: 'Supprimer le logo',
    sectionPreferences: 'Préférences', fieldLanguage: 'Langue', fieldTheme: 'Thème',
    themeLight: 'Clair', themeDark: 'Sombre', langFr: 'Français', langEn: 'English',
    fieldFontSize: 'Taille du texte', fontSmall: 'Petite', fontMedium: 'Normale', fontLarge: 'Grande',
    placeholderCompanyName: 'Ex. Atelier Dupont', placeholderAddress: '12 rue des Artisans, 75011 Paris',
    placeholderSiret: '123 456 789 00012', placeholderVat: 'FR12345678900',
    placeholderIban: 'FR76 XXXX XXXX XXXX XXXX XXXX XXX',
    placeholderFooter: 'Ex. TVA non applicable, art. 293 B du CGI',
    eyebrowQuote: 'Devis', eyebrowInvoice: 'Facture', establishedFrom: 'établie depuis',
    backBtn: 'Retour', exportPdfBtn: 'Télécharger le PDF', emailPdfBtn: 'Envoyer par e-mail', convertBtn: 'Convertir en facture', deleteBtn: 'Supprimer',
    sectionGeneral: 'Informations générales', fieldDocType: 'Type de document',
    typeQuote: 'Devis', typeInvoice: 'Facture', fieldDate: 'Date', fieldStatus: 'Statut',
    fieldConditions: 'Conditions de règlement', sectionClient: 'Client',
    selectClientLabel: 'Sélectionner un client existant', chooseOption: '— Choisir —',
    newClientInlineBtn: 'Nouveau client', sectionLines: 'Lignes de prestation',
    colQty: 'Qté', colUnitPriceHTshort: 'Prix HT', colVatPct: 'TVA %', colTotalHTshort: 'Total HT',
    colReference: 'Réf.', colUnite: 'Unité', colRemise: 'Remise %',
    referencePlaceholder: 'Réf. (facultatif)', unitePlaceholder: 'ex. heure, forfait, m²…',
    descriptionPlaceholder: 'Description', removeLineTitle: 'Supprimer la ligne',
    addLineBtn: 'Ajouter une ligne', billedTo: 'Facturé à',
    totalHTLabel: 'Total HT', totalTTCLabel: 'Total TTC',
    pdfSideNote: "Le PDF exporté reprendra automatiquement ces informations, l'en-tête de votre entreprise (page « Mon entreprise »), le logo et la signature.",
    yourCompanyFallback: 'Votre entreprise', deleteConfirm: 'Supprimer définitivement ce document ?',
    defaultConditionsQuote: '30 jours fin de mois', defaultConditionsInvoice: 'Paiement à réception',
    newClientTitle: 'Nouveau client', editClientTitle: 'Modifier le client',
    newArticleTitle: 'Nouvel article', editArticleTitle: "Modifier l'article",
    cancelBtn: 'Annuler', labelName: 'Nom', labelAddress: 'Adresse',
    labelTaxId: 'N° TVA / SIRET', labelEmail: 'E-mail', labelDescription: 'Description',
    labelUnitPriceEur: 'Prix unitaire HT', labelVatRate: 'Taux de TVA (%)',
    deleteClientConfirm: 'Supprimer ce client ?', deleteArticleConfirm: 'Supprimer cet article ?',
    toastQuoteSaved: 'Devis enregistré', toastInvoiceSaved: 'Facture enregistrée',
    toastDocumentDeleted: 'Document supprimé', toastInvoiceFromQuote: 'Facture créée à partir du devis',
    toastClientDeleted: 'Client supprimé', toastArticleDeleted: 'Article supprimé',
    toastCompanySaved: 'Profil entreprise enregistré', toastClientSaved: 'Client enregistré',
    toastArticleSaved: 'Article enregistré', toastPdfExported: 'PDF prêt',
    toastStorageError: 'Erreur de sauvegarde locale',
    toastPdfLibLoading: "La génération de PDF n'est pas encore prête, réessayez dans un instant.",
    toastLogoError: "Impossible de lire cette image, essayez un autre fichier.",
    toastGuideGenerated: 'Guide PDF généré',
    toastPdfExportError: "L'export PDF a échoué. Réessayez, ou utilisez le bouton de partage de votre appareil.",
    toastPdfShared: 'PDF prêt — choisissez où l’envoyer',
    toastEmailNoClientAddress: "Ce client n'a pas d'adresse e-mail enregistrée. Ajoutez-en une dans sa fiche, ou saisissez le destinataire manuellement dans votre messagerie.",
    toastEmailPrepared: 'PDF prêt : joignez-le dans la fenêtre e-mail qui vient de s’ouvrir.',
    toastEmailSent: 'E-mail envoyé',
    toastEmailError: "L'envoi a échoué. Réessayez, ou utilisez le bouton de partage de votre appareil.",
    emailPdfSubjectQuote: (num)=>`Devis ${num}`, emailPdfSubjectInvoice: (num)=>`Facture ${num}`,
    emailPdfBodyQuote: (num, company)=>`Bonjour,\n\nVeuillez trouver ci-joint le devis ${num}${company?` de ${company}`:''}.\n\nCordialement.`,
    emailPdfBodyInvoice: (num, company)=>`Bonjour,\n\nVeuillez trouver ci-joint la facture ${num}${company?` de ${company}`:''}.\n\nCordialement.`,
    fieldValidity: "Validité de l'offre / échéance",
    pdfValidity: 'Valable jusqu’au',
    sectionBackup: 'Sauvegarde de vos données',
    backupHint: "Vos données restent disponibles sur cet appareil et se synchronisent en ligne lorsque vous êtes connecté. Exportez aussi une sauvegarde (.json) pour disposer d'une copie indépendante.",
    backupBtn: 'Exporter une sauvegarde', restoreBtn: 'Restaurer une sauvegarde',
    toastBackupSaved: 'Sauvegarde créée', toastBackupRestored: 'Sauvegarde restaurée avec succès',
    toastBackupError: 'Ce fichier de sauvegarde est invalide ou illisible',
    restoreConfirm: 'Restaurer cette sauvegarde remplacera toutes les données actuelles sur cet appareil (clients, articles, devis, factures, entreprise). Continuer ?',
    sectionAccount: 'Compte, synchronisation & services',
    sectionAdmin: 'Administration',
    adminClaimHint: "Si votre adresse e-mail est autorisée comme administrateur (voir SETUP-COMPTE-ET-ASSISTANT.md), activez ici l'accès au tableau de bord.",
    becomeAdminBtn: 'Devenir administrateur',
    adminSubtitle: "Compteurs globaux et liste des comptes inscrits. Le contenu des devis et factures de chaque utilisateur reste privé, même pour ce compte.",
    adminNotConfiguredHint: "Le tableau de bord admin n'est pas configuré sur cette installation (voir SETUP-COMPTE-ET-ASSISTANT.md, section 6).",
    adminRefreshBtn: 'Actualiser', adminLoadingHint: 'Chargement des statistiques…',
    adminNoDataHint: "Aucune donnée à afficher pour le moment.",
    adminStatUsers: 'Utilisateurs inscrits', adminStatQuotes: 'Devis créés', adminStatInvoices: 'Factures créées',
    adminStatChat: 'Questions posées à l’assistant',
    adminColEmail: 'E-mail', adminColCreated: 'Inscrit le', adminColLastLogin: 'Dernière connexion',
    adminNoUsers: 'Aucun utilisateur inscrit pour le moment.',
    toastAdminNotConfigured: "Cette fonctionnalité n'est pas configurée sur cette installation.",
    toastAdminError: "Une erreur est survenue. Réessayez dans un instant.",
    toastAdminForbidden: "Ce compte n'a pas les droits administrateur.",
    toastAdminGranted: 'Statut administrateur activé',
    toastLoginRequired: 'Connectez-vous d’abord depuis « Réglages ».',
    accountHintOff: "Non configuré pour l'instant : vos données restent uniquement sur cet appareil. Voir SETUP-COMPTE-ET-ASSISTANT.md pour activer la connexion par e-mail.",
    accountHintOn: "Connectez-vous avec votre e-mail pour retrouver automatiquement vos devis et factures sur tous vos appareils. Aucun mot de passe : vous recevrez un lien de connexion par e-mail.",
    accountEmailPlaceholder: 'votre@email.fr',
    sendLoginLinkBtn: 'Recevoir un lien de connexion',
    loginLinkSentHint: "Lien envoyé ! Ouvrez l'e-mail reçu et cliquez sur le lien, sur cet appareil ou un autre, pour vous connecter.",
    loggedInAs: 'Connecté en tant que', logoutBtn: 'Se déconnecter',
    toastLoginLinkSent: 'Lien de connexion envoyé par e-mail',
    toastLoginError: "La connexion a échoué. Vérifiez l'adresse e-mail et réessayez.",
    toastLoggedOut: 'Déconnecté',
    toastCloudNotConfigured: "La connexion n'est pas encore configurée sur cette application (voir SETUP-COMPTE-ET-ASSISTANT.md).",
    promptConfirmEmail: 'Merci de confirmer votre adresse e-mail pour terminer la connexion :',
    toastSyncPulled: 'Données synchronisées depuis le cloud',
    chatTitle: 'Assistant IA',
    chatIntro: "Votre assistant IA vous aide sur l'application, vos devis, vos factures et les bonnes pratiques de facturation.",
    chatPlaceholder: 'Votre question…',
    chatLoginRequired: 'Connectez-vous depuis « Réglages » pour utiliser l’assistant IA en toute sécurité.',
    chatNotConfigured: "L'assistant n'est pas encore configuré sur cette application. Voir SETUP-COMPTE-ET-ASSISTANT.md pour l'activer.",
    chatError: "Désolé, l'assistant est momentanément indisponible. Réessayez plus tard.",
    sectionSignature: 'Signature', signatureHint: 'Signez avec le doigt ou la souris directement dans le cadre ci-dessous. La signature est enregistrée avec le document.',
    clearSignatureBtn: 'Effacer la signature', signedOn: 'Signé le',
    pdfQuote: 'DEVIS', pdfInvoice: 'FACTURE', pdfDate: 'Date', pdfStatus: 'Statut',
    pdfEstablishedFrom: 'Établie depuis le devis', pdfIssuer: 'ÉMETTEUR', pdfClient: 'CLIENT',
    pdfSiret: 'SIRET', pdfVat: 'TVA', pdfDescription: 'Description', pdfQty: 'Qté',
    pdfUnitPriceHT: 'Prix unit. HT', pdfTotalHT: 'Total HT', pdfConditions: 'Conditions de règlement',
    pdfIban: 'IBAN', pdfYourCompany: 'Votre entreprise', pdfReference: 'Réf.', pdfUnit: 'Unité', pdfDiscount: 'Remise',
    pdfSignature: 'Signature',
    onboardTitle: 'Bienvenue dans Le Registre', onboardIntro: 'Votre espace de gestion pour créer, envoyer et suivre vos devis et factures. Voici comment démarrer.',
    onboardStep1Title: '1. Travaillez partout', onboardStep1Body: "Connectez-vous pour synchroniser vos données sur vos appareils. Une copie locale reste disponible sur cet appareil.",
    onboardStep2Title: '2. Créez un devis', onboardStep2Body: "Bouton « Nouveau devis », choisissez un client, ajoutez vos lignes de prestation détaillées : les totaux HT/TVA/TTC se calculent tout seuls.",
    onboardStep3Title: '3. Convertissez en facture', onboardStep3Body: "Une fois le devis accepté, un bouton permet de le transformer en facture en un clic.",
    onboardStep4Title: '4. Exportez en PDF', onboardStep4Body: "Depuis chaque devis ou facture, exportez un PDF prêt à envoyer, avec le logo de votre entreprise et votre signature manuscrite.",
    onboardStep5Title: '5. Logo & signature', onboardStep5Body: "Ajoutez le logo de votre entreprise depuis « Mon entreprise », et signez chaque document à la main directement à l'écran.",
    onboardCta: 'Commencer',
    onboardPrevBtn: 'Précédent', onboardNextBtn: 'Suivant', onboardSkipBtn: 'Passer',
    onboardFinishBtn: 'Commencer', onboardSignupTitle: 'Créez votre compte (facultatif)',
    onboardSignupBody: "Recevez un lien de connexion par e-mail pour retrouver vos devis et factures sur tous vos appareils. Vous pouvez aussi continuer sans compte : vos données resteront simplement sur cet appareil.",
    guideSections: [
      ['1. Tableau de bord', "Retrouvez tous vos devis et factures, filtrez par type, recherchez par numéro ou nom de client. Le bouton « Nouveau devis » permet de démarrer un document à tout moment."],
      ['2. Clients', "Enregistrez vos clients une fois (nom, adresse, n° TVA/SIRET, e-mail) pour les réutiliser instantanément lors de la création d'un devis ou d'une facture."],
      ['3. Articles & services', "Enregistrez vos prestations récurrentes avec leur prix et leur taux de TVA. En tapant une description de ligne dans un document, les articles correspondants sont suggérés et remplissent automatiquement le prix et la TVA."],
      ['4. Mon entreprise', "Renseignez les informations de votre entreprise : nom, adresse, SIRET, n° TVA, IBAN et une mention de pied de page. Téléchargez ici le logo de votre entreprise : il sera automatiquement arrondi et apparaîtra sur chaque PDF exporté."],
      ['5. Créer un document détaillé', "Choisissez un client, puis ajoutez autant de lignes que nécessaire, chacune avec une référence, une unité (heure, forfait, m²…), une quantité, un prix unitaire, une remise en % et un taux de TVA. Les totaux se calculent automatiquement ligne par ligne, comme dans un tableur."],
      ['6. Signature manuscrite', "En bas d'un document, signez directement à l'écran au doigt ou à la souris. La signature est enregistrée avec le document et imprimée sur le PDF exporté."],
      ['7. Convertir un devis en facture', "Une fois le devis accepté, utilisez « Convertir en facture » pour générer une facture avec un nouveau numéro, en gardant une référence au devis d'origine."],
      ['8. Exporter en PDF', "Depuis n'importe quel document, appuyez sur « Exporter en PDF » pour générer un PDF prêt à envoyer avec l'en-tête de votre entreprise, le logo, les lignes détaillées, les totaux et la signature."],
      ['8bis. Envoyer par e-mail', "Depuis un devis ou une facture, le bouton « Envoyer par e-mail » prépare le PDF puis ouvre votre messagerie avec le destinataire (adresse du client, si renseignée), l'objet et le message déjà remplis ; il ne reste qu'à joindre le fichier."],
      ['9. Vos données', "Tout est stocké de façon privée sur cet appareil (stockage local du navigateur). Rien n'est envoyé à un serveur, sauf si vous activez la connexion par e-mail (voir plus bas)."],
      ['10. Devise', "Depuis « Mon entreprise », choisissez la devise de votre activité (euro, dollar, franc CFA…). Elle s'applique automatiquement au tableau de bord, à tous vos devis et factures, et au PDF exporté."],
      ['10bis. Police du titre (PDF)', "Depuis « Mon entreprise », choisissez parmi une vingtaine de polices celle du titre « Devis »/« Facture » sur le PDF exporté. Nécessite une connexion Internet lors du premier export avec une police donnée."],
      ['11. Sauvegarde & restauration', "Depuis « Réglages », exportez un fichier de sauvegarde (JSON) à tout moment pour le mettre à l'abri ou le transférer sur un autre appareil, et restaurez-le avec « Importer une sauvegarde »."],
      ['12. Créer un compte (facultatif)', "Si la connexion par e-mail est activée sur cette installation, un lien de connexion sans mot de passe vous est envoyé par e-mail depuis « Réglages » : cliquez dessus pour retrouver vos données sur tous vos appareils. Sans compte, l'application reste 100 % fonctionnelle, uniquement sur cet appareil."],
      ['13. Assistant intégré', "Le bouton en bas à droite ouvre un assistant qui peut répondre à vos questions sur l'utilisation de l'application, la rédaction d'un devis ou d'une facture, et la réglementation générale associée (à titre indicatif, sans remplacer un expert-comptable)."],
      ['14. Conditions d\'utilisation et confidentialité', "Le détail des conditions d'utilisation, de la politique de confidentialité et des mentions légales est disponible à tout moment depuis le lien « Mentions légales & CGU » en bas du menu latéral."],
    ],
  },
  en: {
    appName: 'The Registry', appTagline: 'Connected business management',
    navDashboard: 'Dashboard', navClients: 'Clients', navArticles: 'Products & services', navSettings: 'My business', navPreferences: 'Settings', navAdmin: 'Admin',
    sidebarPrivacy: 'Your data is secured on this device and syncs when you sign in.',
    newQuoteBtn: 'New quote', loading: 'Loading the registry…',
    guideBtn: 'User guide (PDF)',
    legalLinkBtn: 'Legal & terms', legalTitle: 'Legal information',
    legalSubtitle: 'Terms of use, privacy policy, legal notice and about.',
    legalTabCgu: 'Terms of use', legalTabPrivacy: 'Privacy policy',
    legalTabMentions: 'Legal notice', legalTabAbout: 'About',
    eyebrowOverview: 'Overview', dashboardTitle: 'Dashboard',
    dashboardSubtitle: 'Your quotes and invoices, in chronological order.',
    statQuotesIssued: 'Quotes issued', statInvoicesIssued: 'Invoices issued',
    statPaidThisMonth: 'Collected this month', statPending: 'Awaiting payment',
    searchPlaceholder: 'Search a number or client…',
    filterAll: 'All', filterQuotes: 'Quotes', filterInvoices: 'Invoices',
    colType: 'Type', colNumber: 'Number', colClient: 'Client', colDate: 'Date',
    colStatus: 'Status', colTotalTTC: 'Total incl. VAT',
    emptyNoDocs: 'No documents yet. Create your first quote.',
    emptySearch: 'No results for this search.',
    badgeQuote: 'Quote', badgeInvoice: 'Invoice',
    statusDraft: 'Draft', statusSent: 'Sent', statusAccepted: 'Accepted', statusPaid: 'Paid',
    eyebrowDirectory: 'Directory', clientsTitle: 'Clients',
    clientsSubtitle: 'Reuse these records when creating quotes and invoices.',
    newClientBtn: 'New client', colName: 'Name', colAddress: 'Address',
    colTaxId: 'VAT / Tax ID', colEmail: 'Email', emptyClients: 'No clients saved yet.',
    editTitle: 'Edit', deleteTitle: 'Delete',
    eyebrowLibrary: 'Library', articlesTitle: 'Products & services',
    articlesSubtitle: 'Your recurring services, ready to insert into a quote line.',
    newArticleBtn: 'New item', colDescription: 'Description',
    colUnitPriceHT: 'Unit price excl. VAT', colVat: 'VAT', emptyArticles: 'No items saved yet.',
    eyebrowHeader: 'Document header', settingsTitle: 'My business',
    settingsSubtitle: 'This information appears on every quote and invoice exported to PDF.',
    fieldCompanyName: 'Company name', fieldAddress: 'Address', fieldSiret: 'Business registration number',
    fieldVat: 'VAT number', fieldIban: 'IBAN (optional)',
    fieldCurrency: 'Currency', currencyHint: 'Automatically applied to all your quotes and invoices.',
    fieldFont: 'Title font (PDF)', fontDefaultOption: 'Default',
    fontHint: "Applied to the \"Quote\"/\"Invoice\" title in the exported PDF. Needs an internet connection the first time you export with this font; if it can't load, the default style is used automatically.",
    fieldFooterNote: 'Footer note', saveBtn: 'Save',
    fieldLogo: 'Company logo',
    logoHint: 'This logo will appear, rounded, at the top of every quote and invoice exported to PDF.',
    logoUploadBtn: 'Choose an image', logoRemoveBtn: 'Remove logo',
    sectionPreferences: 'Preferences', fieldLanguage: 'Language', fieldTheme: 'Theme',
    themeLight: 'Light', themeDark: 'Dark', langFr: 'Français', langEn: 'English',
    fieldFontSize: 'Text size', fontSmall: 'Small', fontMedium: 'Normal', fontLarge: 'Large',
    placeholderCompanyName: 'e.g. Dupont Workshop', placeholderAddress: '12 rue des Artisans, 75011 Paris',
    placeholderSiret: '123 456 789 00012', placeholderVat: 'FR12345678900',
    placeholderIban: 'FR76 XXXX XXXX XXXX XXXX XXXX XXX',
    placeholderFooter: 'e.g. VAT not applicable, art. 293 B of the French Tax Code',
    eyebrowQuote: 'Quote', eyebrowInvoice: 'Invoice', establishedFrom: 'created from',
    backBtn: 'Back', exportPdfBtn: 'Download PDF', emailPdfBtn: 'Send by email', convertBtn: 'Convert to invoice', deleteBtn: 'Delete',
    sectionGeneral: 'General information', fieldDocType: 'Document type',
    typeQuote: 'Quote', typeInvoice: 'Invoice', fieldDate: 'Date', fieldStatus: 'Status',
    fieldConditions: 'Payment terms', sectionClient: 'Client',
    selectClientLabel: 'Select an existing client', chooseOption: '— Choose —',
    newClientInlineBtn: 'New client', sectionLines: 'Line items',
    colQty: 'Qty', colUnitPriceHTshort: 'Unit price', colVatPct: 'VAT %', colTotalHTshort: 'Total excl. VAT',
    colReference: 'Ref.', colUnite: 'Unit', colRemise: 'Discount %',
    referencePlaceholder: 'Ref. (optional)', unitePlaceholder: 'e.g. hour, flat rate, m²…',
    descriptionPlaceholder: 'Description', removeLineTitle: 'Remove line',
    addLineBtn: 'Add a line', billedTo: 'Billed to',
    totalHTLabel: 'Subtotal (excl. VAT)', totalTTCLabel: 'Total (incl. VAT)',
    pdfSideNote: 'The exported PDF will automatically include this information, your company header (from the "My business" page), your logo and your signature.',
    yourCompanyFallback: 'Your business', deleteConfirm: 'Permanently delete this document?',
    defaultConditionsQuote: 'Net 30, end of month', defaultConditionsInvoice: 'Due on receipt',
    newClientTitle: 'New client', editClientTitle: 'Edit client',
    newArticleTitle: 'New item', editArticleTitle: 'Edit item',
    cancelBtn: 'Cancel', labelName: 'Name', labelAddress: 'Address',
    labelTaxId: 'VAT / Tax ID', labelEmail: 'Email', labelDescription: 'Description',
    labelUnitPriceEur: 'Unit price excl. VAT', labelVatRate: 'VAT rate (%)',
    deleteClientConfirm: 'Delete this client?', deleteArticleConfirm: 'Delete this item?',
    toastQuoteSaved: 'Quote saved', toastInvoiceSaved: 'Invoice saved',
    toastDocumentDeleted: 'Document deleted', toastInvoiceFromQuote: 'Invoice created from quote',
    toastClientDeleted: 'Client deleted', toastArticleDeleted: 'Item deleted',
    toastCompanySaved: 'Business profile saved', toastClientSaved: 'Client saved',
    toastArticleSaved: 'Item saved', toastPdfExported: 'PDF ready',
    toastStorageError: 'Local save error',
    toastPdfLibLoading: "PDF generation isn't ready yet, try again in a moment.",
    toastLogoError: "Couldn't read this image, please try another file.",
    toastGuideGenerated: 'Guide PDF generated',
    toastPdfExportError: "The PDF export failed. Try again, or use your device's share button.",
    toastPdfShared: 'PDF ready — choose where to send it',
    toastEmailNoClientAddress: "This client has no email address on file. Add one on their profile, or type the recipient manually in your mail app.",
    toastEmailPrepared: 'PDF ready: attach it in the email window that just opened.',
    toastEmailSent: 'Email sent',
    toastEmailError: "Sending failed. Try again, or use your device's share button.",
    emailPdfSubjectQuote: (num)=>`Quote ${num}`, emailPdfSubjectInvoice: (num)=>`Invoice ${num}`,
    emailPdfBodyQuote: (num, company)=>`Hello,\n\nPlease find attached quote ${num}${company?` from ${company}`:''}.\n\nBest regards.`,
    emailPdfBodyInvoice: (num, company)=>`Hello,\n\nPlease find attached invoice ${num}${company?` from ${company}`:''}.\n\nBest regards.`,
    fieldValidity: 'Quote validity / due date',
    pdfValidity: 'Valid until',
    sectionBackup: 'Data backup',
    backupHint: 'Your data stays available on this device and syncs online when you are signed in. Export a backup (.json file) too, for an independent copy.',
    backupBtn: 'Export a backup', restoreBtn: 'Restore a backup',
    toastBackupSaved: 'Backup created', toastBackupRestored: 'Backup restored successfully',
    toastBackupError: 'This backup file is invalid or unreadable',
    restoreConfirm: 'Restoring this backup will replace all current data on this device (clients, items, quotes, invoices, business profile). Continue?',
    sectionAccount: 'Account, sync & services',
    sectionAdmin: 'Admin',
    adminClaimHint: "If your email is authorized as an administrator (see SETUP-COMPTE-ET-ASSISTANT.md), enable dashboard access here.",
    becomeAdminBtn: 'Become administrator',
    adminSubtitle: "Global counters and list of registered accounts. Each user's quote/invoice content stays private, even from this account.",
    adminNotConfiguredHint: "The admin dashboard isn't configured on this installation (see SETUP-COMPTE-ET-ASSISTANT.md, section 6).",
    adminRefreshBtn: 'Refresh', adminLoadingHint: 'Loading statistics…',
    adminNoDataHint: 'Nothing to show yet.',
    adminStatUsers: 'Registered users', adminStatQuotes: 'Quotes created', adminStatInvoices: 'Invoices created',
    adminStatChat: 'Questions asked to the assistant',
    adminColEmail: 'Email', adminColCreated: 'Joined', adminColLastLogin: 'Last sign-in',
    adminNoUsers: 'No registered users yet.',
    toastAdminNotConfigured: "This feature isn't configured on this installation.",
    toastAdminError: 'Something went wrong. Try again in a moment.',
    toastAdminForbidden: "This account doesn't have administrator rights.",
    toastAdminGranted: 'Administrator status enabled',
    toastLoginRequired: 'Sign in first from "Settings".',
    accountHintOff: "Not configured yet: your data stays only on this device. See SETUP-COMPTE-ET-ASSISTANT.md to enable email sign-in.",
    accountHintOn: "Sign in with your email to automatically find your quotes and invoices on all your devices. No password: you'll receive a sign-in link by email.",
    accountEmailPlaceholder: 'your@email.com',
    sendLoginLinkBtn: 'Send me a sign-in link',
    loginLinkSentHint: "Link sent! Open the email you received and tap the link, on this device or another one, to sign in.",
    loggedInAs: 'Signed in as', logoutBtn: 'Sign out',
    toastLoginLinkSent: 'Sign-in link sent by email',
    toastLoginError: 'Sign-in failed. Check the email address and try again.',
    toastLoggedOut: 'Signed out',
    toastCloudNotConfigured: 'Sign-in is not configured yet on this app (see SETUP-COMPTE-ET-ASSISTANT.md).',
    promptConfirmEmail: 'Please confirm your email address to finish signing in:',
    toastSyncPulled: 'Data synced from the cloud',
    chatTitle: 'AI Assistant',
    chatIntro: 'Your AI assistant can help with the app, quotes, invoices and invoicing best practices.',
    chatPlaceholder: 'Your question…',
    chatLoginRequired: 'Sign in from "Settings" to use the AI assistant securely.',
    chatNotConfigured: 'The assistant is not configured yet on this app. See SETUP-COMPTE-ET-ASSISTANT.md to enable it.',
    chatError: 'Sorry, the assistant is temporarily unavailable. Try again later.',
    sectionSignature: 'Signature', signatureHint: 'Sign with your finger or mouse directly in the box below. The signature is saved with the document.',
    clearSignatureBtn: 'Clear signature', signedOn: 'Signed on',
    pdfQuote: 'QUOTE', pdfInvoice: 'INVOICE', pdfDate: 'Date', pdfStatus: 'Status',
    pdfEstablishedFrom: 'Created from quote', pdfIssuer: 'ISSUER', pdfClient: 'CLIENT',
    pdfSiret: 'Reg. No.', pdfVat: 'VAT', pdfDescription: 'Description', pdfQty: 'Qty',
    pdfUnitPriceHT: 'Unit price', pdfTotalHT: 'Total excl. VAT', pdfConditions: 'Payment terms',
    pdfIban: 'IBAN', pdfYourCompany: 'Your business', pdfReference: 'Ref.', pdfUnit: 'Unit', pdfDiscount: 'Discount',
    pdfSignature: 'Signature',
    onboardTitle: 'Welcome to The Registry', onboardIntro: 'Your workspace to create, send and manage quotes and invoices. Here is how to get started.',
    onboardStep1Title: '1. Work everywhere', onboardStep1Body: 'Sign in to sync your data between devices. A local copy stays available on this device.',
    onboardStep2Title: '2. Create a quote', onboardStep2Body: 'Tap "New quote", pick a client, add your detailed line items: subtotal, VAT and total are calculated automatically.',
    onboardStep3Title: '3. Convert it to an invoice', onboardStep3Body: 'Once a quote is accepted, one button turns it into an invoice.',
    onboardStep4Title: '4. Export to PDF', onboardStep4Body: 'From any quote or invoice, export a ready-to-send PDF with your company logo and your handwritten signature.',
    onboardStep5Title: '5. Logo & signature', onboardStep5Body: 'Add your company logo from "My business", and sign each document by hand directly on screen.',
    onboardCta: 'Get started',
    onboardPrevBtn: 'Back', onboardNextBtn: 'Next', onboardSkipBtn: 'Skip',
    onboardFinishBtn: 'Get started', onboardSignupTitle: 'Create your account (optional)',
    onboardSignupBody: "Get a sign-in link by email to find your quotes and invoices on all your devices. You can also continue without an account: your data will simply stay on this device.",
    guideSections: [
      ['1. Dashboard', 'See every quote and invoice you have created, filter by type, and search by number or client name. Tap "New quote" any time to start a new document.'],
      ['2. Clients', 'Save your clients once (name, address, VAT/tax ID, email) and reuse them instantly when creating a quote or invoice.'],
      ['3. Products & services', 'Save recurring items with their price and VAT rate. When typing a line description on a document, matching items are suggested and auto-fill the price and VAT rate.'],
      ['4. My business', 'Fill in your company details: name, address, registration number, VAT number, IBAN and a footer note. Upload your company logo here — it will be automatically rounded and appear on every exported PDF.'],
      ['5. Creating a detailed document', 'Choose a client, then add as many line items as needed, each with a reference, a unit (hour, flat rate, m²…), a quantity, a unit price, a discount % and a VAT rate. Totals are calculated automatically line by line, like in a spreadsheet.'],
      ['6. Handwritten signature', 'At the bottom of a document, sign directly on the screen with your finger or mouse. The signature is saved with the document and printed on the exported PDF.'],
      ['7. Convert a quote to an invoice', 'Once a quote is accepted, use "Convert to invoice" to generate an invoice with a new number, keeping a reference to the original quote.'],
      ['8. Export to PDF', 'From any document, tap "Export to PDF" to generate a ready-to-send PDF with your company header, logo, detailed line items, totals and signature.'],
      ['8bis. Send by email', 'From a quote or invoice, "Send by email" prepares the PDF then opens your mail app with the recipient (client\'s email, if known), subject and message already filled in; just attach the file.'],
      ['9. Your data', 'Everything is stored privately on this device (browser local storage). Nothing is sent to any server, unless you enable email sign-in (see below).'],
      ['10. Currency', 'From "My business", choose the currency for your activity (euro, dollar, CFA franc…). It automatically applies to the dashboard, all your quotes and invoices, and the exported PDF.'],
      ['10bis. Title font (PDF)', 'From "My business", pick one of about twenty fonts for the "Quote"/"Invoice" title on the exported PDF. Needs an internet connection the first time you export with a given font.'],
      ['11. Backup & restore', 'From "Settings", export a backup file (JSON) at any time to keep it safe or move it to another device, and restore it with "Import a backup".'],
      ['12. Create an account (optional)', 'If email sign-in is enabled on this installation, a passwordless sign-in link is sent to your email from "Settings": tap it to find your data on all your devices. Without an account, the app remains 100% functional, only on this device.'],
      ['13. Built-in assistant', 'The button in the bottom-right corner opens an assistant that can answer questions about using the app, writing a quote or invoice, and general related regulations (for guidance only, not a substitute for an accountant).'],
      ['14. Terms of use and privacy', 'The full terms of use, privacy policy and legal notice are available at any time from the "Legal & terms" link at the bottom of the side menu.'],
    ],
  },
};
function t(key){
  return (TRANSLATIONS[state.lang] && TRANSLATIONS[state.lang][key]) || TRANSLATIONS.fr[key] || key;
}

/* ============================= STATE ============================= */
const state = {
  view: 'accueil',
  clients: [],
  articles: [],
  documents: [],
  entreprise: { nom:'', adresse:'', siret:'', tva:'', iban:'', pied:'', logo:'', devise:'EUR', police:'' },
  lang: 'fr',
  theme: 'clair',
  fontSize: 'moyen',
  loaded: false,
  search: '',
  filter: 'tous',
  modal: null,
  editingDoc: null,
  sidebarOpen: false,
  showOnboarding: false,
  onboardingStep: 0,
  chatOpen: false,
  chatMessages: [],
  chatLoading: false,
  loginEmail: '',
  loginLinkSent: false,
  isAdmin: false,
  adminStats: null,
  adminStatsLoading: false,
};

const uid = () => Math.random().toString(36).slice(2,10) + Date.now().toString(36).slice(-4);
const todayISO = () => new Date().toISOString().slice(0,10);
const CURRENCIES = {
  EUR:{symbol:'€', decimals:2, position:'after', name_fr:'Euro', name_en:'Euro'},
  USD:{symbol:'$', decimals:2, position:'before', name_fr:'Dollar américain', name_en:'US Dollar'},
  GBP:{symbol:'£', decimals:2, position:'before', name_fr:'Livre sterling', name_en:'British Pound'},
  XOF:{symbol:'CFA', decimals:0, position:'after', name_fr:'Franc CFA (BCEAO)', name_en:'CFA Franc (BCEAO)'},
  XAF:{symbol:'FCFA', decimals:0, position:'after', name_fr:'Franc CFA (BEAC)', name_en:'CFA Franc (BEAC)'},
  CHF:{symbol:'CHF', decimals:2, position:'after', name_fr:'Franc suisse', name_en:'Swiss Franc'},
  CAD:{symbol:'$', decimals:2, position:'before', name_fr:'Dollar canadien', name_en:'Canadian Dollar'},
  AUD:{symbol:'$', decimals:2, position:'before', name_fr:'Dollar australien', name_en:'Australian Dollar'},
  JPY:{symbol:'¥', decimals:0, position:'before', name_fr:'Yen japonais', name_en:'Japanese Yen'},
  CNY:{symbol:'¥', decimals:2, position:'before', name_fr:'Yuan chinois', name_en:'Chinese Yuan'},
  MAD:{symbol:'DH', decimals:2, position:'after', name_fr:'Dirham marocain', name_en:'Moroccan Dirham'},
  DZD:{symbol:'DA', decimals:2, position:'after', name_fr:'Dinar algérien', name_en:'Algerian Dinar'},
  XPF:{symbol:'₣', decimals:0, position:'after', name_fr:'Franc CFP', name_en:'CFP Franc'},
  BRL:{symbol:'R$', decimals:2, position:'before', name_fr:'Real brésilien', name_en:'Brazilian Real'},
  INR:{symbol:'₹', decimals:2, position:'before', name_fr:'Roupie indienne', name_en:'Indian Rupee'},
};
function currentCurrency(){ return CURRENCIES[state.entreprise && state.entreprise.devise] || CURRENCIES.EUR; }

// Polices disponibles pour personnaliser le titre des devis/factures exportés
// (page « Mon entreprise »). Chargées à la demande depuis Google Fonts — la
// première utilisation nécessite une connexion Internet, ensuite le
// navigateur les garde en cache. Si le choix est vide (''), le PDF garde son
// style d'origine (Fraunces, déjà intégré). Si le chargement d'une police
// échoue (pas de réseau, police indisponible...), le PDF revient
// automatiquement à ce style d'origine : rien n'est bloqué.
const DOCUMENT_FONTS = [
  {id:'', group:'default'},
  {id:'Fraunces', group:'serif'}, {id:'Playfair Display', group:'serif'}, {id:'Lora', group:'serif'},
  {id:'Merriweather', group:'serif'}, {id:'PT Serif', group:'serif'}, {id:'Cormorant Garamond', group:'serif'},
  {id:'DM Serif Display', group:'serif'}, {id:'Bitter', group:'serif'},
  {id:'Inter', group:'sans'}, {id:'Roboto', group:'sans'}, {id:'Open Sans', group:'sans'},
  {id:'Lato', group:'sans'}, {id:'Montserrat', group:'sans'}, {id:'Poppins', group:'sans'},
  {id:'Raleway', group:'sans'}, {id:'Nunito', group:'sans'}, {id:'Work Sans', group:'sans'},
  {id:'IBM Plex Sans', group:'sans'}, {id:'Josefin Sans', group:'display'}, {id:'Oswald', group:'display'},
];
const documentFontLoadCache = new Map();
// Charge une police Google Fonts dans la page (une seule fois par police) et
// résout une fois qu'elle est réellement utilisable pour dessiner du texte
// (document.fonts.load couvre à la fois le CSS et le fichier de police).
function ensureDocumentFontLoaded(family){
  if(!family) return Promise.resolve(false);
  if(documentFontLoadCache.has(family)) return documentFontLoadCache.get(family);
  const promise = (async()=>{
    try{
      if(!document.querySelector(`link[data-doc-font="${family}"]`)){
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.dataset.docFont = family;
        link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@600;700&display=swap`;
        document.head.appendChild(link);
      }
      await document.fonts.load(`700 40px "${family}"`);
      return document.fonts.check(`700 40px "${family}"`);
    }catch(err){
      console.warn('police de document indisponible, repli sur le style par défaut', family, err);
      return false;
    }
  })();
  documentFontLoadCache.set(family, promise);
  return promise;
}
// Dessine un texte dans la police choisie sur un canevas hors-écran, puis
// renvoie une image PNG à insérer dans le PDF via pdf.addImage(). C'est le
// moyen le plus fiable d'utiliser une police web dans jsPDF sans avoir à lui
// fournir le fichier de police brut : on laisse le navigateur — qui sait déjà
// afficher cette police à l'écran — faire le rendu, jsPDF n'a plus qu'à
// coller l'image obtenue.
function renderTitleAsImage(text, family, color){
  const scale = 4; // rendu en haute résolution pour rester net dans le PDF
  const fontSizePt = 22;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = `700 ${fontSizePt*scale}px "${family}"`;
  const width = Math.ceil(ctx.measureText(text).width) + 8*scale;
  const height = Math.ceil(fontSizePt*scale*1.4);
  canvas.width = width; canvas.height = height;
  ctx.font = `700 ${fontSizePt*scale}px "${family}"`;
  ctx.fillStyle = color || '#1B2A4A';
  ctx.textBaseline = 'top';
  ctx.fillText(text, 0, 2*scale);
  return {dataUrl: canvas.toDataURL('image/png'), widthPt: width/scale, heightPt: height/scale};
}

// Remplace l'ancien formateur figé en euros : chaque entreprise choisit sa
// devise (page « Mon entreprise »), et tous les montants — tableau de bord,
// devis, factures, PDF — s'affichent automatiquement dans cette devise.
const money = (n) => {
  const c = currentCurrency();
  const amount = (isFinite(n)?n:0).toLocaleString(state.lang==='en' ? 'en-GB' : 'fr-FR',{minimumFractionDigits:c.decimals,maximumFractionDigits:c.decimals});
  return c.position==='before' ? `${c.symbol} ${amount}` : `${amount} ${c.symbol}`;
};
// Version texte simple (sans espace insécable ni mise en forme locale) pour le PDF, où jsPDF/helvetica ne rend pas toujours bien tous les symboles unicode.
const moneyPdf = (n) => {
  const c = currentCurrency();
  const amount = (isFinite(n)?n:0).toFixed(c.decimals);
  const symbol = (c.symbol==='€'||c.symbol==='$'||c.symbol==='£'||c.symbol==='¥') ? c.symbol : c.symbol; // jsPDF/helvetica gère mal certains symboles rares : ils restent tels quels, best effort.
  return c.position==='before' ? `${symbol} ${amount}` : `${amount} ${symbol}`;
};
const escapeHtml = (s='') => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function toast(msg){
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toast._h);
  toast._h = setTimeout(()=>el.classList.remove('show'), 2200);
}

function applyTheme(){
  document.body.dataset.theme = state.theme;
  document.documentElement.dataset.fontsize = state.fontSize;
  document.documentElement.lang = state.lang;
}

/* ============================= STORAGE ============================= */
async function loadAll(){
  const startedAt = Date.now();
  try{
    const [c,a,d,e,p,ob] = await Promise.all([
      safeGet('clients'), safeGet('articles'), safeGet('documents'), safeGet('entreprise'), safeGet('preferences'), safeGet('onboarding_seen')
    ]);
    const parse = (value, fallback) => {
      try { return value ? JSON.parse(value) : fallback; }
      catch(_) { return fallback; }
    };
    const clients = parse(c, []);
    const articles = parse(a, []);
    const documents = parse(d, []);
    const entreprise = parse(e, null);
    const prefs = parse(p, null);
    state.clients = Array.isArray(clients) ? clients : [];
    state.articles = Array.isArray(articles) ? articles : [];
    state.documents = Array.isArray(documents) ? documents : [];
    if(entreprise && typeof entreprise === 'object' && !Array.isArray(entreprise)){
      state.entreprise = Object.assign({nom:'',adresse:'',siret:'',tva:'',iban:'',pied:'',logo:'',devise:'EUR',police:''}, entreprise);
    }
    if(prefs && typeof prefs === 'object' && !Array.isArray(prefs)){
      state.lang = prefs.lang === 'en' ? 'en' : 'fr';
      state.theme = prefs.theme === 'sombre' ? 'sombre' : 'clair';
      state.fontSize = ['petit','moyen','grand'].includes(prefs.fontSize) ? prefs.fontSize : 'moyen';
    }
    state.showOnboarding = !ob;
  }catch(err){ console.error('load error', err); }
  // L'écran de démarrage reste visible un minimum de temps, pour un lancement
  // net plutôt qu'un flash instantané.
  const MIN_SPLASH_MS = 550;
  const elapsed = Date.now() - startedAt;
  if(elapsed < MIN_SPLASH_MS){
    await new Promise(resolve => setTimeout(resolve, MIN_SPLASH_MS - elapsed));
  }
  state.loaded = true;
  applyTheme();
  render();
}
async function safeGet(key){
  try{ const r = await window.storage.get(key,false); return r ? r.value : null; }
  catch(e){ return null; }
}
async function save(key){
  try{
    const value = JSON.stringify(state[key]);
    await window.storage.set(key, value, false);
  }catch(e){ console.error('save error', key, e); toast(t('toastStorageError')); }
  if(cloudUser && ['clients','articles','documents','entreprise'].includes(key)){
    pushToCloud(key);
  }
}
async function savePreferences(){
  try{
    await window.storage.set('preferences', JSON.stringify({ lang: state.lang, theme: state.theme, fontSize: state.fontSize }), false);
  }catch(e){ console.error('save prefs error', e); }
}

/* ============================= COMPTE & SYNCHRONISATION CLOUD (optionnel) =============================
   Tout ce module ne s'active que si firebase-config.js a été rempli avec de
   vrais identifiants Firebase (voir ce fichier). Sans configuration,
   l'application continue de fonctionner uniquement en local, comme avant :
   aucune fonctionnalité existante n'est cassée par ce module. */
let fbAuth = null, fbDb = null;
let cloudUser = null;      // {uid, email} une fois connecté, sinon null
let fbCurrentUser = null;  // référence brute Firebase, nécessaire pour obtenir un jeton (admin)
let cloudReady = false;    // true si Firebase a pu être initialisé

function cloudConfigured(){
  const c = window.FIREBASE_CONFIG;
  return !!(c && c.apiKey && !String(c.apiKey).startsWith('VOTRE_'));
}

function initCloud(){
  if(!cloudConfigured() || typeof firebase === 'undefined') return;
  try{
    firebase.initializeApp(window.FIREBASE_CONFIG);
    fbAuth = firebase.auth();
    fbDb = firebase.firestore();
    cloudReady = true;

    // Retour depuis le lien de connexion reçu par e-mail.
    if(fbAuth.isSignInWithEmailLink(window.location.href)){
      let email = null;
      try{ email = window.localStorage.getItem('registre_pending_email'); }catch(e){}
      if(!email){ email = prompt(t('promptConfirmEmail')) || ''; }
      if(email){
        fbAuth.signInWithEmailLink(email, window.location.href)
          .then(()=>{
            try{ window.localStorage.removeItem('registre_pending_email'); }catch(e){}
            history.replaceState(null, '', window.location.pathname);
          })
          .catch(err=>{ console.error('connexion par lien échouée', err); toast(t('toastLoginError')); });
      }
    }

    fbAuth.onAuthStateChanged(async (user)=>{
      cloudUser = user ? {uid:user.uid, email:user.email} : null;
      fbCurrentUser = user || null;
      state.isAdmin = false;
      if(user){
        await pullFromCloud();
        // Le statut admin est un "custom claim" du jeton Firebase (voir
        // functions/index.js, fonction grantAdmin). Il n'est jamais déduit
        // côté navigateur : ceci ne fait qu'afficher ou masquer l'entrée de
        // menu, le vrai contrôle d'accès est refait côté serveur à chaque
        // appel de getAdminStats.
        try{
          const tokenResult = await user.getIdTokenResult();
          state.isAdmin = !!(tokenResult.claims && tokenResult.claims.admin === true);
        }catch(err){ console.warn('vérification du statut admin impossible', err); }
      }
      if(state.loaded) render();
    });
  }catch(err){
    console.error('initialisation de la synchronisation cloud impossible', err);
  }
}

async function sendLoginLink(email){
  if(!cloudReady){ toast(t('toastCloudNotConfigured')); return; }
  const actionCodeSettings = { url: window.location.href.split('#')[0].split('?')[0], handleCodeInApp: true };
  try{
    await fbAuth.sendSignInLinkToEmail(email, actionCodeSettings);
    try{ window.localStorage.setItem('registre_pending_email', email); }catch(e){}
    state.loginLinkSent = true;
    toast(t('toastLoginLinkSent'));
    render();
  }catch(err){
    console.error('envoi du lien de connexion échoué', err);
    toast(t('toastLoginError'));
  }
}

async function signOutCloud(){
  if(!cloudReady) return;
  try{ await fbAuth.signOut(); toast(t('toastLoggedOut')); }
  catch(err){ console.error('déconnexion échouée', err); }
}

/* ============================= TABLEAU DE BORD ADMIN (optionnel) =============================
   Réservé au compte marqué "admin" via Firebase Custom Claims (voir
   functions/index.js). N'affiche que des compteurs agrégés et une liste de
   comptes (e-mail, dates) — jamais le contenu des devis/factures d'un
   utilisateur, qui reste protégé par firestore.rules même pour ce compte. */
async function becomeAdmin(){
  if(!fbCurrentUser){ toast(t('toastLoginRequired')); return; }
  if(!window.ADMIN_GRANT_ENDPOINT){ toast(t('toastAdminNotConfigured')); return; }
  try{
    const idToken = await fbCurrentUser.getIdToken();
    const res = await fetch(window.ADMIN_GRANT_ENDPOINT, {
      method: 'POST',
      headers: {Authorization: `Bearer ${idToken}`}
    });
    if(res.status === 403){
      // L'adresse connectée n'est pas dans la liste blanche : inutile de
      // présenter cette erreur attendue comme un problème technique.
      toast(t('toastAdminForbidden'));
      return;
    }
    if(!res.ok){
      const data = await res.json().catch(()=>({}));
      throw new Error(data.error || `HTTP ${res.status}`);
    }
    // Le nouveau droit n'apparaît qu'après un rafraîchissement forcé du jeton.
    const tokenResult = await fbCurrentUser.getIdTokenResult(true);
    state.isAdmin = !!(tokenResult.claims && tokenResult.claims.admin === true);
    toast(state.isAdmin ? t('toastAdminGranted') : t('toastAdminForbidden'));
    render();
  }catch(err){
    console.error('demande de statut admin échouée', err);
    toast(t('toastAdminError'));
  }
}

async function fetchAdminStats(){
  if(!fbCurrentUser){ toast(t('toastLoginRequired')); return; }
  if(!window.ADMIN_STATS_ENDPOINT){ toast(t('toastAdminNotConfigured')); return; }
  state.adminStatsLoading = true; render();
  try{
    const idToken = await fbCurrentUser.getIdToken();
    const res = await fetch(window.ADMIN_STATS_ENDPOINT, {headers: {Authorization: `Bearer ${idToken}`}});
    if(res.status === 403){
      state.adminStats = null;
      toast(t('toastAdminForbidden'));
    }else if(!res.ok){
      throw new Error(`HTTP ${res.status}`);
    }else{
      state.adminStats = await res.json();
    }
  }catch(err){
    console.error('erreur de chargement des statistiques admin', err);
    toast(t('toastAdminError'));
  }finally{
    state.adminStatsLoading = false;
    render();
  }
}

async function pushToCloud(key){
  if(!cloudReady || !cloudUser || !fbDb) return;
  try{
    await fbDb.collection('utilisateurs').doc(cloudUser.uid)
      .set({ [key]: state[key] ?? null, updatedAt: Date.now() }, {merge:true});
  }catch(err){ console.error('synchronisation cloud (envoi) échouée', key, err); }
}

async function pullFromCloud(){
  if(!cloudReady || !cloudUser || !fbDb) return;
  try{
    const snap = await fbDb.collection('utilisateurs').doc(cloudUser.uid).get();
    if(snap.exists){
      const data = snap.data();
      if(Array.isArray(data.clients)) state.clients = data.clients;
      if(Array.isArray(data.articles)) state.articles = data.articles;
      if(Array.isArray(data.documents)) state.documents = data.documents;
      if(data.entreprise) state.entreprise = Object.assign({nom:'',adresse:'',siret:'',tva:'',iban:'',pied:'',logo:'',devise:'EUR',police:''}, data.entreprise);
      // On garde une copie locale à jour pour continuer à fonctionner hors ligne.
      await Promise.all([save('clients'), save('articles'), save('documents'), save('entreprise')]);
      toast(t('toastSyncPulled'));
    } else {
      // Premier appareil connecté avec cet e-mail : on envoie les données locales vers le cloud.
      await Promise.all(['clients','articles','documents','entreprise'].map(pushToCloud));
    }
  }catch(err){ console.error('synchronisation cloud (réception) échouée', err); }
}

/* ============================= SAUVEGARDE / RESTAURATION ============================= */
// Comme l'application ne dispose d'aucun serveur, il n'existe pas de « compte »
// avec e-mail/mot de passe : la seule façon fiable de mettre vos données à
// l'abri (ou de les transférer sur un autre appareil) est d'exporter un fichier
// de sauvegarde, que vous pouvez ensuite vous envoyer par e-mail via la feuille
// de partage native, ou garder dans vos fichiers.
async function exportBackup(){
  try{
    const payload = {
      app: 'le-registre', version: 1, exportedAt: new Date().toISOString(),
      clients: state.clients, articles: state.articles, documents: state.documents,
      entreprise: state.entreprise,
      preferences: { lang: state.lang, theme: state.theme, fontSize: state.fontSize }
    };
    const json = JSON.stringify(payload, null, 2);
    const filename = `sauvegarde-registre-${todayISO()}.json`;
    const blob = new Blob([json], {type:'application/json'});
    const file = new File([blob], filename, {type:'application/json'});
    if(navigator.canShare && navigator.canShare({files:[file]})){
      try{
        await navigator.share({files:[file], title:filename});
        toast(t('toastBackupSaved'));
        return;
      }catch(err){
        if(err && err.name === 'AbortError') return;
        console.warn('partage indisponible pour la sauvegarde, repli sur le téléchargement', err);
      }
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=> URL.revokeObjectURL(url), 4000);
    toast(t('toastBackupSaved'));
  }catch(err){
    console.error('erreur export sauvegarde', err);
    toast(t('toastBackupError'));
  }
}

async function importBackupFile(file){
  try{
    const text = await file.text();
    const data = JSON.parse(text);
    if(!data || typeof data !== 'object' || !Array.isArray(data.clients) || !Array.isArray(data.articles) || !Array.isArray(data.documents)){
      throw new Error('format invalide');
    }
    if(!confirm(t('restoreConfirm'))) return;
    state.clients = data.clients || [];
    state.articles = data.articles || [];
    state.documents = data.documents || [];
    state.entreprise = Object.assign({nom:'',adresse:'',siret:'',tva:'',iban:'',pied:'',logo:'',devise:'EUR',police:''}, data.entreprise||{});
    if(data.preferences){
      state.lang = data.preferences.lang === 'en' ? 'en' : 'fr';
      state.theme = data.preferences.theme === 'sombre' ? 'sombre' : 'clair';
      state.fontSize = ['petit','moyen','grand'].includes(data.preferences.fontSize) ? data.preferences.fontSize : 'moyen';
    }
    await Promise.all([save('clients'), save('articles'), save('documents'), save('entreprise'), savePreferences()]);
    toast(t('toastBackupRestored'));
    render();
  }catch(err){
    console.error('erreur restauration sauvegarde', err);
    toast(t('toastBackupError'));
  }
}

/* ============================= NAVIGATION ============================= */
function navigate(view, payload){
  state.view = view;
  state.modal = null;
  state.sidebarOpen = false;
  if(view === 'nouveau'){
    state.editingDoc = payload || blankDoc('devis');
  }
  render();
  if(view === 'admin') fetchAdminStats();
}
function openModal(type, payload){ state.modal = {type, payload}; render(); }
function closeModal(){ state.modal = null; render(); }
function toggleSidebar(){ state.sidebarOpen = !state.sidebarOpen; render(); }
function closeSidebar(){ state.sidebarOpen = false; render(); }

/* ============================= DOMAIN LOGIC ============================= */
function blankDoc(type){
  return {
    id: uid(), type, statut:'brouillon',
    numero: nextNumero(type),
    date: todayISO(),
    clientId: '', clientSnapshot: null,
    lignes: [ blankLigne() ],
    conditions: type==='devis' ? t('defaultConditionsQuote') : t('defaultConditionsInvoice'),
    lieDevisNumero: null,
    dateValidite: '',
    signature: null,
    signatureDate: null,
    createdAt: Date.now(),
  };
}
function blankLigne(){ return { id: uid(), reference:'', description:'', unite:'', quantite:1, prixUnitaireHT:0, remise:0, tauxTva:20 }; }

function nextNumero(type){
  const year = new Date().getFullYear();
  const prefix = type === 'devis' ? 'DEVIS' : 'FACT';
  const existing = state.documents.filter(d => d.type===type && d.numero.startsWith(`${prefix}-${year}-`));
  const nums = existing.map(d => parseInt(d.numero.split('-').pop(),10)).filter(n=>!isNaN(n));
  const next = (nums.length ? Math.max(...nums) : 0) + 1;
  return `${prefix}-${year}-${String(next).padStart(3,'0')}`;
}

function ligneMontantHT(l){
  const brut = (parseFloat(l.quantite)||0) * (parseFloat(l.prixUnitaireHT)||0);
  const remise = Math.min(100, Math.max(0, parseFloat(l.remise)||0));
  return brut * (1 - remise/100);
}

function computeTotals(doc){
  let totalHT = 0; const tvaByRate = {};
  for(const l of doc.lignes){
    const lineHT = ligneMontantHT(l);
    totalHT += lineHT;
    const rate = parseFloat(l.tauxTva)||0;
    tvaByRate[rate] = (tvaByRate[rate]||0) + lineHT * rate/100;
  }
  const totalTVA = Object.values(tvaByRate).reduce((a,b)=>a+b,0);
  return { totalHT, tvaByRate, totalTVA, totalTTC: totalHT + totalTVA };
}

async function persistDoc(doc, {silent}={}){
  const idx = state.documents.findIndex(d=>d.id===doc.id);
  if(idx>=0) state.documents[idx] = doc; else state.documents.push(doc);
  await save('documents');
  if(!silent) toast(doc.type==='devis' ? t('toastQuoteSaved') : t('toastInvoiceSaved'));
}
let autosaveTimer = null;
function scheduleAutosave(doc){
  clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(()=>{ persistDoc(doc, {silent:true}); }, 900);
}
// Filet de sécurité : si l'onglet/l'app se ferme ou passe en arrière-plan
// pendant qu'un devis ou une facture est en cours d'édition, on sauvegarde
// immédiatement pour ne rien perdre.
function flushPendingSave(){
  if(state.editingDoc && state.view==='nouveau'){
    clearTimeout(autosaveTimer);
    persistDoc(state.editingDoc, {silent:true});
  }
}
document.addEventListener('visibilitychange', ()=>{ if(document.visibilityState==='hidden') flushPendingSave(); });
window.addEventListener('pagehide', flushPendingSave);
async function deleteDoc(id){
  state.documents = state.documents.filter(d=>d.id!==id);
  await save('documents');
  toast(t('toastDocumentDeleted'));
  navigate('accueil');
}
async function convertToFacture(devis){
  const facture = JSON.parse(JSON.stringify(devis));
  facture.id = uid();
  facture.type = 'facture';
  facture.statut = 'brouillon';
  facture.numero = nextNumero('facture');
  facture.date = todayISO();
  facture.lieDevisNumero = devis.numero;
  facture.conditions = t('defaultConditionsInvoice');
  facture.signature = null;
  facture.signatureDate = null;
  facture.createdAt = Date.now();
  state.documents.push(facture);
  await save('documents');
  toast(t('toastInvoiceFromQuote'));
  navigate('nouveau', facture);
}

async function upsertClient(client){
  const idx = state.clients.findIndex(c=>c.id===client.id);
  if(idx>=0) state.clients[idx]=client; else state.clients.push(client);
  await save('clients');
}
async function deleteClient(id){
  state.clients = state.clients.filter(c=>c.id!==id);
  await save('clients');
  toast(t('toastClientDeleted'));
}
async function upsertArticle(article){
  const idx = state.articles.findIndex(a=>a.id===article.id);
  if(idx>=0) state.articles[idx]=article; else state.articles.push(article);
  await save('articles');
}
async function deleteArticle(id){
  state.articles = state.articles.filter(a=>a.id!==id);
  await save('articles');
  toast(t('toastArticleDeleted'));
}
async function saveEntreprise(profile){
  // On conserve le logo existant : le formulaire "Mon entreprise" ne
  // contient pas ce champ (il est géré séparément par le sélecteur de fichier).
  state.entreprise = Object.assign({}, state.entreprise, {
    nom: profile.nom||'', adresse: profile.adresse||'', siret: profile.siret||'',
    tva: profile.tva||'', iban: profile.iban||'', pied: profile.pied||'',
    devise: CURRENCIES[profile.devise] ? profile.devise : (state.entreprise.devise||'EUR'),
    police: DOCUMENT_FONTS.some(f=>f.id===profile.police) ? profile.police : ''
  });
  await save('entreprise');
  toast(t('toastCompanySaved'));
}

/* ============================= IMAGES : LOGO ============================= */
// Lit un fichier image choisi par l'utilisateur, le redimensionne et le
// découpe en cercle (transparence autour) afin qu'il s'affiche comme un
// logo rond partout dans l'application et dans le PDF exporté.
function fileToCircularLogoDataURL(file, size=320){
  return new Promise((resolve, reject)=>{
    if(!file || !file.type || !file.type.startsWith('image/')){ reject(new Error('not-an-image')); return; }
    const reader = new FileReader();
    reader.onload = ()=>{
      const img = new Image();
      img.onload = ()=>{
        try{
          const canvas = document.createElement('canvas');
          canvas.width = size; canvas.height = size;
          const ctx = canvas.getContext('2d');
          const scale = Math.max(size/img.width, size/img.height);
          const w = img.width*scale, h = img.height*scale;
          const x = (size-w)/2, y = (size-h)/2;
          ctx.drawImage(img, x, y, w, h);
          ctx.globalCompositeOperation = 'destination-in';
          ctx.beginPath();
          ctx.arc(size/2, size/2, size/2, 0, Math.PI*2);
          ctx.closePath();
          ctx.fill();
          resolve(canvas.toDataURL('image/png'));
        }catch(err){ reject(err); }
      };
      img.onerror = ()=> reject(new Error('image-load-error'));
      img.src = reader.result;
    };
    reader.onerror = ()=> reject(new Error('file-read-error'));
    reader.readAsDataURL(file);
  });
}

/* ============================= RENDER SHELL ============================= */
function render(){
  const app = document.getElementById('app');
  try{
    applyTheme();
    if(!state.loaded){
      app.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;height:100vh;width:100%;background:var(--ink);">
          <img src="icons/icon-192.png" alt="" width="64" height="64" style="border-radius:14px;">
          <div style="text-align:center;">
            <div style="font-family:'Fraunces',serif;font-style:italic;font-size:1.5rem;color:var(--paper);">${t('appName')}</div>
            <div style="font-size:0.6875rem;letter-spacing:1px;text-transform:uppercase;color:#8FA0BE;margin-top:4px;">${t('appTagline')}</div>
          </div>
        </div>`;
      return;
    }
    app.innerHTML = `
      <div class="topbar">
        <button class="hamburger" data-toggle-sidebar aria-label="Menu">${ICONS.menu}</button>
        <span class="topbar-title">${t('appName')}</span>
      </div>
      <div class="sidebar-overlay ${state.sidebarOpen?'open':''}" data-close-sidebar></div>
      <div class="app-body">
        ${renderSidebar()}
        <main>${renderView()}</main>
      </div>
      ${state.modal ? renderModal() : ''}
      ${state.showOnboarding ? renderOnboarding() : ''}
      ${renderChatWidget()}
    `;
    bindPostRender();
    const chatBody = app.querySelector('#chat-body');
    if(chatBody) chatBody.scrollTop = chatBody.scrollHeight;
  }catch(err){
    console.error('render error', err);
    app.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;width:100%;gap:14px;padding:24px;text-align:center;font-family:'Inter',sans-serif;color:#1B2A4A;background:#F5F0E4;">
        <div style="font-family:'Fraunces',serif;font-size:20px;">Un souci d'affichage est survenu</div>
        <div style="font-size:13px;color:#3D5170;max-width:320px;">Vos données sont en sécurité (elles restent sur votre appareil). Rechargez la page pour continuer.</div>
        <button onclick="location.reload()" style="margin-top:8px;background:#1B2A4A;color:#F5F0E4;border:none;padding:10px 18px;border-radius:6px;font-size:14px;font-weight:600;">Recharger</button>
      </div>`;
  }
}

function renderSidebar(){
  const items = [
    {id:'accueil', label:t('navDashboard'), icon:ICONS.ledger},
    {id:'clients', label:t('navClients'), icon:ICONS.users},
    {id:'articles', label:t('navArticles'), icon:ICONS.box},
    {id:'parametres', label:t('navSettings'), icon:ICONS.building},
    {id:'reglages', label:t('navPreferences'), icon:ICONS.gear},
  ];
  if(state.isAdmin) items.push({id:'admin', label:t('navAdmin'), icon:ICONS.gear});
  return `
  <div class="sidebar ${state.sidebarOpen?'open':''}">
    <div class="brand">
      ${state.entreprise.logo ? `<div class="brand-logo"><img src="${state.entreprise.logo}" alt=""></div>` : ''}
      <div class="brand-mark">${t('appName')}</div>
      <div class="brand-sub">${t('appTagline')}</div>
    </div>
    <nav>
      ${items.map(it => `
        <button class="nav-btn ${state.view===it.id?'active':''}" data-nav="${it.id}">
          ${it.icon}<span>${it.label}</span>
        </button>`).join('')}
    </nav>
    <div class="sidebar-foot">
      ${t('sidebarPrivacy')}
      <button data-action="new-devis">+ ${t('newQuoteBtn')}</button>
      <button data-action="download-guide">${ICONS.pdf} ${t('guideBtn')}</button>
      <button class="link-legal ${state.view==='legal'?'active':''}" data-nav="legal">${t('legalLinkBtn')}</button>
    </div>
  </div>`;
}

function renderView(){
  switch(state.view){
    case 'accueil': return renderAccueil();
    case 'clients': return renderClients();
    case 'articles': return renderArticles();
    case 'parametres': return renderParametres();
    case 'reglages': return renderReglages();
    case 'admin': return renderAdmin();
    case 'nouveau': return renderEditor();
    case 'legal': return renderLegal();
    default: return renderAccueil();
  }
}

/* ============================= DASHBOARD ============================= */
function renderAccueil(){
  const docs = state.documents.slice().sort((a,b)=>b.createdAt-a.createdAt);
  const filtered = docs.filter(d=>{
    if(state.filter!=='tous' && d.type!==state.filter) return false;
    if(state.search){
      const c = clientLabel(d);
      const hay = (d.numero+' '+c).toLowerCase();
      if(!hay.includes(state.search.toLowerCase())) return false;
    }
    return true;
  });
  const nbDevis = docs.filter(d=>d.type==='devis').length;
  const nbFactures = docs.filter(d=>d.type==='facture').length;
  const now = new Date();
  const caMois = docs.filter(d=>d.type==='facture' && d.statut==='payee' && new Date(d.date).getMonth()===now.getMonth() && new Date(d.date).getFullYear()===now.getFullYear())
    .reduce((s,d)=> s + computeTotals(d).totalTTC, 0);
  const enAttente = docs.filter(d=>d.type==='facture' && d.statut!=='payee').reduce((s,d)=>s+computeTotals(d).totalTTC,0);

  return `
    <div class="page-head">
      <div><div class="eyebrow">${t('eyebrowOverview')}</div><h1>${t('dashboardTitle')}</h1><p>${t('dashboardSubtitle')}</p></div>
      <button class="btn stamp" data-action="new-devis">${ICONS.plus} ${t('newQuoteBtn')}</button>
    </div>

    <div class="stats">
      <div class="card stat"><div class="label">${t('statQuotesIssued')}</div><div class="value num">${nbDevis}</div></div>
      <div class="card stat"><div class="label">${t('statInvoicesIssued')}</div><div class="value num">${nbFactures}</div></div>
      <div class="card stat"><div class="label">${t('statPaidThisMonth')}</div><div class="value num">${money(caMois)}</div></div>
      <div class="card stat"><div class="label">${t('statPending')}</div><div class="value num">${money(enAttente)}</div></div>
    </div>

    <div class="toolbar">
      <div class="search">${ICONS.search}<input id="search-input" placeholder="${t('searchPlaceholder')}" value="${escapeHtml(state.search)}"></div>
      <div class="chip-group">
        ${['tous','devis','facture'].map(f=>`<button class="chip ${state.filter===f?'active':''}" data-filter="${f}">${f==='tous'?t('filterAll'):f==='devis'?t('filterQuotes'):t('filterInvoices')}</button>`).join('')}
      </div>
    </div>

    <div class="card">
      <div class="table-scroll">
      <table>
        <thead><tr><th>${t('colType')}</th><th>${t('colNumber')}</th><th>${t('colClient')}</th><th>${t('colDate')}</th><th>${t('colStatus')}</th><th style="text-align:right">${t('colTotalTTC')}</th><th></th></tr></thead>
        <tbody>
          ${filtered.length===0 ? `<tr class="empty-row"><td colspan="7">${docs.length===0 ? t('emptyNoDocs') : t('emptySearch')}</td></tr>` :
            filtered.map(d=>{
              const tt = computeTotals(d);
              return `<tr class="clickable" data-open-doc="${d.id}">
                <td><span class="badge ${d.type}">${d.type==='devis'?t('badgeQuote'):t('badgeInvoice')}</span></td>
                <td class="num">${d.numero}</td>
                <td>${escapeHtml(clientLabel(d))}</td>
                <td class="num">${formatDate(d.date)}</td>
                <td>${statusBadge(d.statut)}</td>
                <td class="num" style="text-align:right">${money(tt.totalTTC)}</td>
                <td><span class="row-actions">${ICONS.arrow}</span></td>
              </tr>`;
            }).join('')}
        </tbody>
      </table>
      </div>
    </div>
  `;
}
function clientLabel(d){ return d.clientSnapshot ? d.clientSnapshot.nom : '—'; }
function formatDate(iso){ if(!iso) return '—'; const [y,m,day]=iso.split('-'); return `${day}/${m}/${y}`; }
function statusBadge(s){
  const map = {brouillon:t('statusDraft'), envoye:t('statusSent'), accepte:t('statusAccepted'), payee:t('statusPaid')};
  return `<span class="status ${s}">${map[s]||s}</span>`;
}

/* ============================= CLIENTS ============================= */
function renderClients(){
  const list = state.clients.slice().sort((a,b)=>a.nom.localeCompare(b.nom));
  return `
    <div class="page-head">
      <div><div class="eyebrow">${t('eyebrowDirectory')}</div><h1>${t('clientsTitle')}</h1><p>${t('clientsSubtitle')}</p></div>
      <button class="btn stamp" data-action="new-client">${ICONS.plus} ${t('newClientBtn')}</button>
    </div>
    <div class="card">
      <div class="table-scroll">
      <table>
        <thead><tr><th>${t('colName')}</th><th>${t('colAddress')}</th><th>${t('colTaxId')}</th><th>${t('colEmail')}</th><th></th></tr></thead>
        <tbody>
          ${list.length===0 ? `<tr class="empty-row"><td colspan="5">${t('emptyClients')}</td></tr>` :
          list.map(c=>`
            <tr>
              <td><strong>${escapeHtml(c.nom)}</strong></td>
              <td>${escapeHtml(c.adresse||'—')}</td>
              <td class="num">${escapeHtml(c.numTva || c.siret || '—')}</td>
              <td>${escapeHtml(c.email||'—')}</td>
              <td><span class="row-actions">
                <button class="icon-btn" data-edit-client="${c.id}" title="${t('editTitle')}">${ICONS.edit}</button>
                <button class="icon-btn" data-delete-client="${c.id}" title="${t('deleteTitle')}">${ICONS.trash}</button>
              </span></td>
            </tr>`).join('')}
        </tbody>
      </table>
      </div>
    </div>
  `;
}

/* ============================= ARTICLES ============================= */
function renderArticles(){
  const list = state.articles.slice().sort((a,b)=>a.description.localeCompare(b.description));
  return `
    <div class="page-head">
      <div><div class="eyebrow">${t('eyebrowLibrary')}</div><h1>${t('articlesTitle')}</h1><p>${t('articlesSubtitle')}</p></div>
      <button class="btn stamp" data-action="new-article">${ICONS.plus} ${t('newArticleBtn')}</button>
    </div>
    <div class="card">
      <div class="table-scroll">
      <table>
        <thead><tr><th>${t('colDescription')}</th><th style="text-align:right">${t('colUnitPriceHT')}</th><th style="text-align:right">${t('colVat')}</th><th></th></tr></thead>
        <tbody>
          ${list.length===0 ? `<tr class="empty-row"><td colspan="4">${t('emptyArticles')}</td></tr>` :
          list.map(a=>`
            <tr>
              <td>${escapeHtml(a.description)}</td>
              <td class="num" style="text-align:right">${money(a.prixUnitaireHT)}</td>
              <td class="num" style="text-align:right">${a.tauxTva}%</td>
              <td><span class="row-actions">
                <button class="icon-btn" data-edit-article="${a.id}" title="${t('editTitle')}">${ICONS.edit}</button>
                <button class="icon-btn" data-delete-article="${a.id}" title="${t('deleteTitle')}">${ICONS.trash}</button>
              </span></td>
            </tr>`).join('')}
        </tbody>
      </table>
      </div>
    </div>
  `;
}

/* ============================= PARAMETRES (Mon entreprise) ============================= */
function renderParametres(){
  const e = state.entreprise;
  return `
    <div class="page-head">
      <div><div class="eyebrow">${t('eyebrowHeader')}</div><h1>${t('settingsTitle')}</h1><p>${t('settingsSubtitle')}</p></div>
    </div>
    <div class="card" style="padding:24px;max-width:560px;">
      <div class="field" style="margin-bottom:18px;">
        <label>${t('fieldLogo')}</label>
        <div class="logo-row">
          <div class="logo-preview">${e.logo ? `<img src="${e.logo}" alt="logo">` : ICONS.image}</div>
          <div class="logo-actions">
            <label class="btn secondary logo-upload-label">
              ${ICONS.plus} ${t('logoUploadBtn')}
              <input type="file" id="logo-input" accept="image/*" hidden>
            </label>
            ${e.logo ? `<button type="button" class="btn danger" data-action="remove-logo">${ICONS.trash} ${t('logoRemoveBtn')}</button>` : ''}
          </div>
        </div>
        <div class="hint" style="margin-top:8px;">${t('logoHint')}</div>
      </div>
      <form id="form-entreprise" style="display:flex;flex-direction:column;gap:14px;">
        <div class="field"><label>${t('fieldCompanyName')}</label><input name="nom" value="${escapeHtml(e.nom)}" placeholder="${t('placeholderCompanyName')}" required></div>
        <div class="field"><label>${t('fieldAddress')}</label><textarea name="adresse" placeholder="${t('placeholderAddress')}">${escapeHtml(e.adresse)}</textarea></div>
        <div class="field-row">
          <div class="field"><label>${t('fieldSiret')}</label><input name="siret" value="${escapeHtml(e.siret)}" placeholder="${t('placeholderSiret')}"></div>
          <div class="field"><label>${t('fieldVat')}</label><input name="tva" value="${escapeHtml(e.tva)}" placeholder="${t('placeholderVat')}"></div>
        </div>
        <div class="field">
          <label>${t('fieldCurrency')}</label>
          <select name="devise">
            ${Object.keys(CURRENCIES).map(code=>`<option value="${code}" ${e.devise===code?'selected':''}>${code} — ${CURRENCIES[code]['name_'+state.lang] || CURRENCIES[code].name_fr} (${CURRENCIES[code].symbol})</option>`).join('')}
          </select>
          <div class="hint" style="margin-top:6px;">${t('currencyHint')}</div>
        </div>
        <div class="field">
          <label>${t('fieldFont')}</label>
          <select name="police">
            ${DOCUMENT_FONTS.map(f=>`<option value="${escapeHtml(f.id)}" ${e.police===f.id?'selected':''} style="font-family:'${f.id||'Fraunces'}',serif;">${f.id ? escapeHtml(f.id) : t('fontDefaultOption')}</option>`).join('')}
          </select>
          <div class="hint" style="margin-top:6px;">${t('fontHint')}</div>
        </div>
        <div class="field"><label>${t('fieldIban')}</label><input name="iban" value="${escapeHtml(e.iban)}" placeholder="${t('placeholderIban')}"></div>
        <div class="field"><label>${t('fieldFooterNote')}</label><textarea name="pied" placeholder="${t('placeholderFooter')}">${escapeHtml(e.pied)}</textarea></div>
        <div style="display:flex;justify-content:flex-end;"><button type="submit" class="btn stamp">${t('saveBtn')}</button></div>
      </form>
    </div>
  `;
}

/* ============================= COMPTE : BLOC UI ============================= */
function renderAccountBlock(){
  if(!cloudConfigured()){
    return `<p class="hint">${t('accountHintOff')}</p>`;
  }
  if(cloudUser){
    return `
      <p class="hint" style="margin-bottom:12px;">${t('loggedInAs')} <strong style="color:var(--ink);">${escapeHtml(cloudUser.email)}</strong></p>
      <button class="btn secondary" data-action="logout">${ICONS.x} ${t('logoutBtn')}</button>
    `;
  }
  if(state.loginLinkSent){
    return `<p class="hint">${t('loginLinkSentHint')}</p>`;
  }
  return `
    <p class="hint" style="margin-bottom:12px;">${t('accountHintOn')}</p>
    <form id="form-login" style="display:flex;gap:8px;flex-wrap:wrap;">
      <input type="email" id="login-email" required placeholder="${t('accountEmailPlaceholder')}" style="flex:1;min-width:180px;padding:9px 11px;border:1px solid var(--rule);border-radius:6px;background:var(--paper);color:var(--ink);font-size:0.8438rem;">
      <button type="submit" class="btn stamp">${ICONS.mail} ${t('sendLoginLinkBtn')}</button>
    </form>
  `;
}

/* ============================= REGLAGES (Préférences) ============================= */
function renderReglages(){
  return `
    <div class="page-head">
      <div><div class="eyebrow">${t('sectionPreferences')}</div><h1>${t('navPreferences')}</h1></div>
    </div>
    <div class="card" style="padding:24px;max-width:560px;">
      <div class="field-row">
        <div class="field">
          <label>${t('fieldLanguage')}</label>
          <select id="pref-lang">
            <option value="fr" ${state.lang==='fr'?'selected':''}>${t('langFr')}</option>
            <option value="en" ${state.lang==='en'?'selected':''}>${t('langEn')}</option>
          </select>
        </div>
        <div class="field">
          <label>${t('fieldTheme')}</label>
          <select id="pref-theme">
            <option value="clair" ${state.theme==='clair'?'selected':''}>${t('themeLight')}</option>
            <option value="sombre" ${state.theme==='sombre'?'selected':''}>${t('themeDark')}</option>
          </select>
        </div>
      </div>
      <div class="field-row" style="margin-top:12px;">
        <div class="field">
          <label>${t('fieldFontSize')}</label>
          <select id="pref-fontsize">
            <option value="petit" ${state.fontSize==='petit'?'selected':''}>${t('fontSmall')}</option>
            <option value="moyen" ${state.fontSize==='moyen'?'selected':''}>${t('fontMedium')}</option>
            <option value="grand" ${state.fontSize==='grand'?'selected':''}>${t('fontLarge')}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="card" style="padding:24px;max-width:560px;margin-top:16px;">
      <div class="section-title" style="border:none;padding:0;margin-bottom:10px;">${t('sectionAccount')}</div>
      ${renderAccountBlock()}
      ${(cloudUser && !state.isAdmin) ? `
        <div style="margin-top:14px;padding-top:14px;border-top:1px solid var(--rule);">
          <p class="hint" style="margin-bottom:10px;">${t('adminClaimHint')}</p>
          <button class="btn secondary" data-action="become-admin">${ICONS.gear} ${t('becomeAdminBtn')}</button>
        </div>` : ''}
    </div>
    <div class="card" style="padding:24px;max-width:560px;margin-top:16px;">
      <div class="section-title" style="border:none;padding:0;margin-bottom:10px;">${t('guideBtn')}</div>
      <button class="btn secondary" data-action="download-guide">${ICONS.pdf} ${t('guideBtn')}</button>
    </div>
    <div class="card" style="padding:24px;max-width:560px;margin-top:16px;">
      <div class="section-title" style="border:none;padding:0;margin-bottom:10px;">${t('sectionBackup')}</div>
      <p class="hint" style="margin-bottom:14px;">${t('backupHint')}</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <button class="btn secondary" data-action="export-backup">${ICONS.copy} ${t('backupBtn')}</button>
        <label class="btn secondary logo-upload-label">
          ${ICONS.plus} ${t('restoreBtn')}
          <input type="file" id="restore-input" accept="application/json,.json" hidden>
        </label>
      </div>
    </div>
  `;
}

/* ============================= TABLEAU DE BORD ADMIN (optionnel) ============================= */
function renderAdmin(){
  if(!window.ADMIN_STATS_ENDPOINT){
    return `
      <div class="page-head"><div><div class="eyebrow">${t('sectionAdmin')}</div><h1>${t('navAdmin')}</h1></div></div>
      <div class="card" style="padding:24px;max-width:560px;"><p class="hint">${t('adminNotConfiguredHint')}</p></div>
    `;
  }
  const s = state.adminStats;
  return `
    <div class="page-head">
      <div><div class="eyebrow">${t('sectionAdmin')}</div><h1>${t('navAdmin')}</h1><p>${t('adminSubtitle')}</p></div>
    </div>
    <div style="display:flex;justify-content:flex-end;margin-bottom:14px;">
      <button class="btn secondary" data-action="admin-refresh" ${state.adminStatsLoading?'disabled':''}>${ICONS.gear} ${t('adminRefreshBtn')}</button>
    </div>
    ${state.adminStatsLoading ? `<p class="hint">${t('adminLoadingHint')}</p>` : ''}
    ${!state.adminStatsLoading && !s ? `<p class="hint">${t('adminNoDataHint')}</p>` : ''}
    ${s ? `
    <div class="stats">
      <div class="stat"><div class="label">${t('adminStatUsers')}</div><div class="value">${s.totalUsers ?? '—'}</div></div>
      <div class="stat"><div class="label">${t('adminStatQuotes')}</div><div class="value">${s.totalQuotes ?? '—'}</div></div>
      <div class="stat"><div class="label">${t('adminStatInvoices')}</div><div class="value">${s.totalInvoices ?? '—'}</div></div>
      <div class="stat"><div class="label">${t('adminStatChat')}</div><div class="value">${s.totalChatQuestions ?? '—'}</div></div>
    </div>
    <div class="card" style="padding:0;margin-top:20px;overflow:auto;">
      <table>
        <thead><tr><th>${t('adminColEmail')}</th><th>${t('adminColCreated')}</th><th>${t('adminColLastLogin')}</th></tr></thead>
        <tbody>
          ${(s.users||[]).map(u=>`
            <tr>
              <td>${escapeHtml(u.email||'—')}</td>
              <td>${u.createdAt ? formatDate(u.createdAt.slice(0,10)) : '—'}</td>
              <td>${u.lastSignIn ? formatDate(u.lastSignIn.slice(0,10)) : '—'}</td>
            </tr>`).join('') || `<tr><td colspan="3">${t('adminNoUsers')}</td></tr>`}
        </tbody>
      </table>
    </div>` : ''}
  `;
}

/* ============================= INFORMATIONS LÉGALES ============================= */
const LEGAL_CONTENT = {
  fr: {
    cgu: [
      ["Objet", "Le Registre est un outil de création de devis et factures, mis à disposition tel quel, sans garantie d'adéquation à un usage particulier. L'utilisateur reste seul responsable de l'exactitude des documents qu'il génère et de leur conformité avec la réglementation qui lui est applicable."],
      ["Accès au service", "L'application est accessible gratuitement depuis un navigateur. Elle fonctionne principalement hors ligne ; certaines fonctions optionnelles (connexion par e-mail, synchronisation, assistant) nécessitent une connexion Internet et un projet Firebase configuré par l'utilisateur ou l'exploitant du site."],
      ["Responsabilité", "L'éditeur ne pourra être tenu responsable des pertes de données, interruptions de service, ou conséquences financières ou juridiques liées à l'utilisation des documents générés."],
      ["Évolution", "Ces conditions peuvent être mises à jour à tout moment. La version en vigueur est celle publiée dans l'application."],
    ],
    privacy: [
      ["Données stockées localement", "Par défaut, toutes les données saisies (clients, articles, devis, factures, logo, signature) sont enregistrées uniquement dans le navigateur de l'utilisateur (IndexedDB). Rien n'est transmis à un serveur tant que la connexion par e-mail n'est pas activée."],
      ["Connexion par e-mail (optionnelle)", "Si l'utilisateur active la connexion par e-mail, ses données sont également stockées dans une base Firestore associée à son compte, protégée par des règles garantissant que seul l'utilisateur authentifié peut y accéder. Aucune autre personne, y compris l'éditeur de l'application, n'a accès à ces documents."],
      ["Assistant (chatbot)", "Si l'utilisateur pose une question à l'assistant, le texte de sa question est transmis à un service tiers (API Anthropic) via une fonction serveur, dans le seul but de générer une réponse. Cette question n'est pas conservée au-delà du traitement de la demande."],
      ["Statistiques anonymes et tableau de bord admin", "Des compteurs globaux (nombre d'utilisateurs, de devis, de factures, de questions posées à l'assistant) sont collectés à des fins statistiques : ils ne contiennent aucun devis, aucune facture et aucune information client. Un compte spécifiquement autorisé par l'exploitant du site (voir SETUP-COMPTE-ET-ASSISTANT.md) peut consulter ces compteurs ainsi que la liste des adresses e-mail inscrites et leurs dates de connexion, mais jamais le contenu des documents des utilisateurs."],
      ["Droits de l'utilisateur", "L'utilisateur peut à tout moment exporter ou supprimer ses données depuis l'application (page Réglages)."],
    ],
    mentionsIntro: "Les informations ci-dessous concernent l'entreprise utilisatrice de cette instance de l'application, telles que renseignées dans « Mon entreprise ».",
    about: [
      ["À propos", "Le Registre est une application de gestion de devis et factures, conçue pour fonctionner sans dépendance obligatoire à un serveur."],
      ["Développeur", "Application conçue par Mike Pelé."],
    ],
  },
  en: {
    cgu: [
      ["Purpose", "Le Registre is a quote and invoice creation tool, provided as-is, without warranty of fitness for a particular purpose. The user remains solely responsible for the accuracy of the documents they generate and for their compliance with applicable regulations."],
      ["Access to the service", "The application is accessible free of charge from a browser. It works mainly offline; some optional features (email sign-in, sync, assistant) require an internet connection and a Firebase project configured by the user or site operator."],
      ["Liability", "The publisher cannot be held liable for data loss, service interruptions, or any financial or legal consequences related to the use of generated documents."],
      ["Changes", "These terms may be updated at any time. The version in force is the one published in the application."],
    ],
    privacy: [
      ["Locally stored data", "By default, all entered data (clients, articles, quotes, invoices, logo, signature) is saved only in the user's browser (IndexedDB). Nothing is sent to a server unless email sign-in is enabled."],
      ["Email sign-in (optional)", "If the user enables email sign-in, their data is also stored in a Firestore database tied to their account, protected by rules ensuring only the authenticated user can access it. No one else, including the app's publisher, has access to these documents."],
      ["Assistant (chatbot)", "If the user asks the assistant a question, the text of the question is sent to a third-party service (Anthropic API) via a server function, solely to generate a response. It is not retained beyond processing the request."],
      ["Anonymous statistics and admin dashboard", "Global counters (number of users, quotes, invoices, questions asked to the assistant) are collected for statistical purposes: they contain no quotes, no invoices and no client information. An account specifically authorized by the site operator (see SETUP-COMPTE-ET-ASSISTANT.md) can view these counters plus the list of registered email addresses and their sign-in dates, but never the content of users' documents."],
      ["User rights", "The user can export or delete their data at any time from the application (Settings page)."],
    ],
    mentionsIntro: "The information below concerns the business using this instance of the application, as entered under \"My business\".",
    about: [
      ["About", "Le Registre is a quote and invoice management application, designed to work without a mandatory server dependency."],
      ["Developer", "Application designed by Mike Pelé."],
    ],
  }
};
function renderLegalSection(title, entries){
  return `
    <div class="card" style="padding:24px;max-width:720px;margin-top:16px;">
      <div class="section-title" style="border:none;padding:0;margin-bottom:12px;">${title}</div>
      ${entries.map(([h,body])=>`<h4 style="margin:14px 0 4px;color:var(--ink);">${escapeHtml(h)}</h4><p class="hint" style="margin:0;">${escapeHtml(body)}</p>`).join('')}
    </div>`;
}
function renderLegal(){
  const L = LEGAL_CONTENT[state.lang] || LEGAL_CONTENT.fr;
  const e = state.entreprise;
  const mentionsRows = [
    [t('fieldCompanyName'), e.nom], [t('fieldAddress'), e.adresse], [t('fieldSiret'), e.siret],
    [t('fieldVat'), e.tva],
  ].filter(([,v])=>v);
  return `
    <div class="page-head">
      <div><div class="eyebrow">${t('sectionPreferences')}</div><h1>${t('legalTitle')}</h1><p>${t('legalSubtitle')}</p></div>
    </div>
    ${renderLegalSection(t('legalTabCgu'), L.cgu)}
    ${renderLegalSection(t('legalTabPrivacy'), L.privacy)}
    <div class="card" style="padding:24px;max-width:720px;margin-top:16px;">
      <div class="section-title" style="border:none;padding:0;margin-bottom:12px;">${t('legalTabMentions')}</div>
      <p class="hint" style="margin-bottom:10px;">${L.mentionsIntro}</p>
      ${mentionsRows.length ? mentionsRows.map(([k,v])=>`<p style="margin:4px 0;"><strong>${escapeHtml(k)} :</strong> ${escapeHtml(v)}</p>`).join('') : `<p class="hint">—</p>`}
    </div>
    ${renderLegalSection(t('legalTabAbout'), L.about)}
  `;
}

/* ============================= DOCUMENT EDITOR ============================= */
function renderEditor(){
  const doc = state.editingDoc;
  if(!doc) return renderAccueil();
  const totals = computeTotals(doc);
  const client = state.clients.find(c=>c.id===doc.clientId);
  const statusMap = {brouillon:t('statusDraft'), envoye:t('statusSent'), accepte:t('statusAccepted'), payee:t('statusPaid')};

  return `
    <div class="page-head">
      <div>
        <div class="eyebrow">${doc.type==='devis'?t('eyebrowQuote'):t('eyebrowInvoice')} ${doc.lieDevisNumero?`· ${t('establishedFrom')} ${doc.lieDevisNumero}`:''}</div>
        <h1 class="num">${doc.numero}</h1>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn secondary" data-action="back">← ${t('backBtn')}</button>
        <button class="btn secondary" data-action="export-pdf">${ICONS.pdf} ${t('exportPdfBtn')}</button>
        <button class="btn secondary" data-action="email-pdf">${ICONS.pdf} ${t('emailPdfBtn')}</button>
        ${doc.type==='devis' ? `<button class="btn stamp" data-action="to-facture">${ICONS.copy} ${t('convertBtn')}</button>` : ''}
        <button class="btn danger" data-action="delete-doc">${ICONS.trash} ${t('deleteBtn')}</button>
      </div>
    </div>

    <div class="doc-grid">
      <div class="card doc-main">

        <div>
          <div class="section-title">${t('sectionGeneral')}</div>
          <div class="field-row" style="margin-top:12px;">
            <div class="field"><label>${t('fieldDocType')}</label>
              <select id="f-type">
                <option value="devis" ${doc.type==='devis'?'selected':''}>${t('typeQuote')}</option>
                <option value="facture" ${doc.type==='facture'?'selected':''}>${t('typeInvoice')}</option>
              </select>
            </div>
            <div class="field"><label>${t('fieldDate')}</label><input id="f-date" type="date" value="${doc.date}"></div>
          </div>
          <div class="field-row" style="margin-top:12px;">
            <div class="field"><label>${t('fieldStatus')}</label>
              <select id="f-statut">
                ${['brouillon','envoye','accepte','payee'].map(s=>`<option value="${s}" ${doc.statut===s?'selected':''}>${statusMap[s]}</option>`).join('')}
              </select>
            </div>
            <div class="field"><label>${t('fieldConditions')}</label><input id="f-conditions" value="${escapeHtml(doc.conditions)}"></div>
          </div>
          <div class="field-row" style="margin-top:12px;">
            <div class="field"><label>${t('fieldValidity')}</label><input id="f-validite" type="date" value="${doc.dateValidite||''}"></div>
          </div>
        </div>

        <div>
          <div class="section-title">${t('sectionClient')}</div>
          <div class="field-row" style="margin-top:12px;align-items:end;">
            <div class="field"><label>${t('selectClientLabel')}</label>
              <select id="f-client">
                <option value="">${t('chooseOption')}</option>
                ${state.clients.map(c=>`<option value="${c.id}" ${doc.clientId===c.id?'selected':''}>${escapeHtml(c.nom)}</option>`).join('')}
              </select>
            </div>
            <button class="btn secondary" data-action="new-client-inline" style="height:38px;">${ICONS.plus} ${t('newClientInlineBtn')}</button>
          </div>
          ${client ? `<div class="hint" style="margin-top:8px;">${escapeHtml(client.adresse||'')} ${client.numTva?(' · '+escapeHtml(client.numTva)):''}</div>` : ''}
        </div>

        <div>
          <div class="section-title">${t('sectionLines')}</div>
          <div class="lines-wrap" style="margin-top:12px;">
            ${doc.lignes.map((l)=>`
              <div class="line-item" data-line="${l.id}">
                <div class="line-item-top">
                  <input class="line-desc" list="articles-list" data-line-field="description" data-line-id="${l.id}" value="${escapeHtml(l.description)}" placeholder="${t('descriptionPlaceholder')}">
                  <button class="icon-btn" data-remove-line="${l.id}" ${doc.lignes.length===1?'disabled':''} title="${t('removeLineTitle')}">${ICONS.x}</button>
                </div>
                <div class="line-item-grid">
                  <div class="li-field"><label>${t('colReference')}</label><input data-line-field="reference" data-line-id="${l.id}" value="${escapeHtml(l.reference||'')}" placeholder="${t('referencePlaceholder')}"></div>
                  <div class="li-field"><label>${t('colUnite')}</label><input data-line-field="unite" data-line-id="${l.id}" value="${escapeHtml(l.unite||'')}" placeholder="${t('unitePlaceholder')}"></div>
                  <div class="li-field"><label>${t('colQty')}</label><input type="number" min="0" step="0.5" data-line-field="quantite" data-line-id="${l.id}" value="${l.quantite}"></div>
                  <div class="li-field"><label>${t('colUnitPriceHTshort')}</label><input type="number" min="0" step="0.01" data-line-field="prixUnitaireHT" data-line-id="${l.id}" value="${l.prixUnitaireHT}"></div>
                  <div class="li-field"><label>${t('colRemise')}</label><input type="number" min="0" max="100" step="1" data-line-field="remise" data-line-id="${l.id}" value="${l.remise||0}"></div>
                  <div class="li-field"><label>${t('colVatPct')}</label><input type="number" min="0" step="0.1" data-line-field="tauxTva" data-line-id="${l.id}" value="${l.tauxTva}"></div>
                </div>
                <div class="line-item-total">${t('colTotalHTshort')} : <strong class="num">${money(ligneMontantHT(l))}</strong></div>
              </div>`).join('')}
          </div>
          <datalist id="articles-list">
            ${state.articles.map(a=>`<option value="${escapeHtml(a.description)}">`).join('')}
          </datalist>
          <button class="btn secondary add-line" data-action="add-line">${ICONS.plus} ${t('addLineBtn')}</button>
        </div>

        <div>
          <div class="section-title">${t('sectionSignature')}</div>
          <p class="hint" style="margin:10px 0 0;">${t('signatureHint')}</p>
          <div class="signature-box"><canvas id="signature-pad" width="600" height="180"></canvas></div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;flex-wrap:wrap;gap:8px;">
            <span class="hint">${doc.signature ? (t('signedOn')+' '+formatDate(doc.signatureDate)) : ''}</span>
            <button type="button" class="btn secondary" data-action="clear-signature">${ICONS.trash} ${t('clearSignatureBtn')}</button>
          </div>
        </div>

      </div>

      <div class="doc-side">
        <div class="card doc-preview">
          <div class="stamp-mark">${statusMap[doc.statut]}</div>
          <div class="doc-preview-head">
            <div class="doc-preview-headline">
              ${state.entreprise.logo ? `<img class="doc-preview-logo" src="${state.entreprise.logo}" alt="logo">` : ''}
              <div>
                <h2>${doc.type==='devis'?t('typeQuote'):t('typeInvoice')}</h2>
                <div class="hint num">${doc.numero}</div>
              </div>
            </div>
          </div>

          <div class="doc-preview-parties">
            <div class="party">
              <div class="party-label">${t('pdfIssuer')}</div>
              <strong>${escapeHtml(state.entreprise.nom || t('yourCompanyFallback'))}</strong>
              ${state.entreprise.adresse ? `<div class="hint">${escapeHtml(state.entreprise.adresse).replace(/\n/g,'<br>')}</div>` : ''}
              ${state.entreprise.siret ? `<div class="hint">${t('pdfSiret')} ${escapeHtml(state.entreprise.siret)}</div>` : ''}
              ${state.entreprise.tva ? `<div class="hint">${t('pdfVat')} ${escapeHtml(state.entreprise.tva)}</div>` : ''}
              ${!state.entreprise.nom ? `<div class="hint" style="color:var(--stamp);">${t('eyebrowHeader')} : « ${t('navSettings')} »</div>` : ''}
            </div>
            <div class="party">
              <div class="party-label">${t('pdfClient')}</div>
              <strong>${client ? escapeHtml(client.nom) : '—'}</strong>
              ${client && client.adresse ? `<div class="hint">${escapeHtml(client.adresse).replace(/\n/g,'<br>')}</div>` : ''}
              ${client && client.numTva ? `<div class="hint">${t('pdfVat')} ${escapeHtml(client.numTva)}</div>` : ''}
            </div>
          </div>

          <table class="mini-table">
            <thead><tr><th>${t('colDescription')}</th><th style="text-align:right">${t('colTotalHTshort')}</th></tr></thead>
            <tbody>
              ${doc.lignes.map(l=>`
                <tr>
                  <td>
                    ${escapeHtml(l.description || '—')}
                    <div class="mini-sub">${l.quantite||0}${l.unite?(' '+escapeHtml(l.unite)):''} × ${money(l.prixUnitaireHT)}${(parseFloat(l.remise)||0)>0?(' · -'+l.remise+'%'):''} · ${t('colVat')} ${l.tauxTva}%</div>
                  </td>
                  <td class="num" style="text-align:right">${money(ligneMontantHT(l))}</td>
                </tr>`).join('')}
            </tbody>
          </table>

          <div class="totals">
            <div class="row"><span>${t('totalHTLabel')}</span><span class="num">${money(totals.totalHT)}</span></div>
            ${Object.entries(totals.tvaByRate).map(([rate,amt])=>`<div class="row"><span>${t('colVat')} ${rate}%</span><span class="num">${money(amt)}</span></div>`).join('')}
            <div class="row grand"><span>${t('totalTTCLabel')}</span><span>${money(totals.totalTTC)}</span></div>
          </div>

          <div class="hint" style="margin-top:10px;">${t('fieldConditions')} : ${escapeHtml(doc.conditions||'—')}</div>
          ${doc.dateValidite ? `<div class="hint">${t('pdfValidity')} ${formatDate(doc.dateValidite)}</div>` : ''}
          ${doc.signature ? `<div class="hint">✓ ${t('signedOn')} ${formatDate(doc.signatureDate)}</div>` : ''}
        </div>
        <div class="hint">${t('pdfSideNote')}</div>
      </div>
    </div>
  `;
}

/* ============================= ONBOARDING ============================= */
function onboardingSteps(){
  const tutoSteps = [
    {title:t('onboardStep1Title'), body:t('onboardStep1Body')},
    {title:t('onboardStep2Title'), body:t('onboardStep2Body')},
    {title:t('onboardStep3Title'), body:t('onboardStep3Body')},
    {title:t('onboardStep4Title'), body:t('onboardStep4Body')},
    {title:t('onboardStep5Title'), body:t('onboardStep5Body')},
  ];
  // Dernière étape : inscription (si Firebase est configuré) ou explication
  // du mode local (sinon) — l'utilisateur peut toujours continuer sans compte.
  tutoSteps.push({signup:true});
  return tutoSteps;
}
function renderOnboarding(){
  const steps = onboardingSteps();
  const i = Math.min(Math.max(state.onboardingStep,0), steps.length-1);
  const step = steps[i];
  const isLast = i === steps.length-1;
  const isFirst = i === 0;

  const dots = steps.map((_,idx)=>`<span class="onboard-dot ${idx===i?'active':''}"></span>`).join('');

  let body;
  if(step.signup){
    body = `
      <div style="text-align:center;">
        <div style="width:52px;height:52px;border-radius:50%;background:var(--stamp);color:#fff;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;">${ICONS.mail}</div>
        <div style="font-weight:600;font-size:0.9375rem;color:var(--ink);">${t('onboardSignupTitle')}</div>
        <div style="font-size:0.8125rem;color:var(--ink-soft);margin-top:6px;">${t('onboardSignupBody')}</div>
      </div>
      <div style="margin-top:18px;">${renderAccountBlock()}</div>
    `;
  }else{
    body = `
      <div style="text-align:center;padding:6px 0 4px;">
        <div class="num" style="width:40px;height:40px;border-radius:50%;border:1.5px solid var(--stamp);color:var(--stamp);display:flex;align-items:center;justify-content:center;font-size:0.875rem;font-weight:600;margin:0 auto 14px;">${i+1}</div>
        <div style="font-weight:600;font-size:0.9375rem;color:var(--ink);">${step.title}</div>
        <div style="font-size:0.8125rem;color:var(--ink-soft);margin-top:8px;line-height:1.5;">${step.body}</div>
      </div>`;
  }

  return `
  <div class="overlay" style="z-index:60;">
    <div class="modal" style="max-width:420px;" onclick="event.stopPropagation()">
      <div class="modal-body" style="padding-top:26px;">
        <div style="text-align:center;margin-bottom:14px;">
          <img src="icons/icon-192.png" alt="" width="40" height="40" style="border-radius:10px;">
          ${isFirst ? `<h2 style="font-size:1.25rem;margin-top:10px;">${t('onboardTitle')}</h2><p style="color:var(--ink-soft);font-size:0.8125rem;margin-top:6px;">${t('onboardIntro')}</p>` : ''}
        </div>
        ${body}
      </div>
      <div style="display:flex;justify-content:center;gap:6px;padding:4px 0 14px;">${dots}</div>
      <div class="modal-foot" style="justify-content:space-between;gap:8px;">
        ${!isFirst ? `<button class="btn secondary" data-action="onboard-prev">← ${t('onboardPrevBtn')}</button>` : `<button class="btn secondary" data-action="close-onboarding">${t('onboardSkipBtn')}</button>`}
        ${!isLast
          ? `<button class="btn stamp" data-action="onboard-next">${t('onboardNextBtn')} →</button>`
          : `<button class="btn stamp" data-action="close-onboarding">${t('onboardFinishBtn')}</button>`}
      </div>
    </div>
  </div>`;
}
function onboardNext(){
  const steps = onboardingSteps();
  state.onboardingStep = Math.min(state.onboardingStep+1, steps.length-1);
  render();
}
function onboardPrev(){
  state.onboardingStep = Math.max(state.onboardingStep-1, 0);
  render();
}
async function dismissOnboarding(){
  state.showOnboarding = false;
  state.onboardingStep = 0;
  try{ await window.storage.set('onboarding_seen', '1', false); }catch(e){ /* pas grave si ça échoue */ }
  render();
}

/* ============================= ASSISTANT (CHATBOT) ============================= */
// Petit assistant intégré, volontairement limité : il ne répond qu'aux
// questions sur l'utilisation de l'application, les devis/factures et la
// réglementation associée (voir le prompt système côté serveur, dans
// functions/index.js). Si l'assistant n'est pas configuré (CHAT_ENDPOINT
// vide), le bouton reste visible mais explique comment l'activer.
function renderChatWidget(){
  return `
    <button class="chat-fab" data-action="toggle-chat" aria-label="${t('chatTitle')}">${state.chatOpen ? ICONS.x : ICONS.chat}</button>
    ${state.chatOpen ? renderChatPanel() : ''}
  `;
}
function renderChatPanel(){
  return `
    <div class="chat-panel">
      <div class="chat-panel-head">
        <strong>${t('chatTitle')}</strong>
        <button class="icon-btn" data-action="toggle-chat">${ICONS.x}</button>
      </div>
      <div class="chat-panel-body" id="chat-body">
        ${state.chatMessages.length===0 ? `<div class="chat-empty">${t('chatIntro')}</div>` : ''}
        ${state.chatMessages.map(m=>`<div class="chat-msg ${m.role==='user'?'user':'assistant'}">${escapeHtml(m.content)}</div>`).join('')}
        ${state.chatLoading ? `<div class="chat-msg assistant loading">…</div>` : ''}
      </div>
      <form id="chat-form" class="chat-panel-foot">
        <input id="chat-input" placeholder="${t('chatPlaceholder')}" autocomplete="off">
        <button type="submit" class="icon-btn" style="color:var(--stamp);" aria-label="Envoyer">${ICONS.arrow}</button>
      </form>
    </div>`;
}
async function askAssistant(question){
  state.chatMessages.push({role:'user', content:question});
  state.chatLoading = true;
  render();
  if(!window.CHAT_ENDPOINT){
    state.chatMessages.push({role:'assistant', content:t('chatNotConfigured')});
    state.chatLoading = false;
    render();
    return;
  }
  if(!fbCurrentUser){
    state.chatMessages.push({role:'assistant', content:t('chatLoginRequired')});
    state.chatLoading = false;
    render();
    return;
  }
  try{
    const idToken = await fbCurrentUser.getIdToken();
    const res = await fetch(window.CHAT_ENDPOINT, {
      method:'POST',
      headers:{'Content-Type':'application/json', Authorization:`Bearer ${idToken}`},
      body: JSON.stringify({ question, lang: state.lang })
    });
    if(!res.ok) throw new Error('réponse serveur invalide');
    const data = await res.json();
    state.chatMessages.push({role:'assistant', content: data.answer || t('chatError')});
  }catch(err){
    console.error('assistant indisponible', err);
    state.chatMessages.push({role:'assistant', content: t('chatError')});
  }
  state.chatLoading = false;
  render();
}

/* ============================= MODALS ============================= */
function renderModal(){
  const {type, payload} = state.modal;
  if(type==='client') return renderClientModal(payload);
  if(type==='article') return renderArticleModal(payload);
  return '';
}
function renderClientModal(client){
  const c = client || {id:uid(), nom:'', adresse:'', numTva:'', email:''};
  return `
  <div class="overlay" data-close-modal>
    <div class="modal" onclick="event.stopPropagation()">
      <div class="modal-head"><h3>${client?t('editClientTitle'):t('newClientTitle')}</h3><button class="icon-btn" data-close-modal>${ICONS.x}</button></div>
      <form id="form-client">
        <input type="hidden" name="id" value="${c.id}">
        <div class="modal-body">
          <div class="field"><label>${t('labelName')}</label><input name="nom" value="${escapeHtml(c.nom)}" required autofocus></div>
          <div class="field"><label>${t('labelAddress')}</label><textarea name="adresse">${escapeHtml(c.adresse)}</textarea></div>
          <div class="field"><label>${t('labelTaxId')}</label><input name="numTva" value="${escapeHtml(c.numTva)}"></div>
          <div class="field"><label>${t('labelEmail')}</label><input name="email" type="email" value="${escapeHtml(c.email)}"></div>
        </div>
        <div class="modal-foot">
          <button type="button" class="btn secondary" data-close-modal>${t('cancelBtn')}</button>
          <button type="submit" class="btn stamp">${t('saveBtn')}</button>
        </div>
      </form>
    </div>
  </div>`;
}
function renderArticleModal(article){
  const a = article || {id:uid(), description:'', prixUnitaireHT:0, tauxTva:20};
  return `
  <div class="overlay" data-close-modal>
    <div class="modal" onclick="event.stopPropagation()">
      <div class="modal-head"><h3>${article?t('editArticleTitle'):t('newArticleTitle')}</h3><button class="icon-btn" data-close-modal>${ICONS.x}</button></div>
      <form id="form-article">
        <input type="hidden" name="id" value="${a.id}">
        <div class="modal-body">
          <div class="field"><label>${t('labelDescription')}</label><input name="description" value="${escapeHtml(a.description)}" required autofocus></div>
          <div class="field-row">
            <div class="field"><label>${t('labelUnitPriceEur')} (${currentCurrency().symbol})</label><input name="prixUnitaireHT" type="number" min="0" step="0.01" value="${a.prixUnitaireHT}"></div>
            <div class="field"><label>${t('labelVatRate')}</label><input name="tauxTva" type="number" min="0" step="0.1" value="${a.tauxTva}"></div>
          </div>
        </div>
        <div class="modal-foot">
          <button type="button" class="btn secondary" data-close-modal>${t('cancelBtn')}</button>
          <button type="submit" class="btn stamp">${t('saveBtn')}</button>
        </div>
      </form>
    </div>
  </div>`;
}

/* ============================= EVENTS ============================= */
function bindPostRender(){
  const app = document.getElementById('app');

  const hamburgerBtn = app.querySelector('[data-toggle-sidebar]');
  if(hamburgerBtn) hamburgerBtn.onclick = toggleSidebar;
  const overlayEl = app.querySelector('[data-close-sidebar]');
  if(overlayEl) overlayEl.onclick = closeSidebar;

  app.querySelectorAll('[data-nav]').forEach(b=>b.onclick = ()=> navigate(b.dataset.nav));
  app.querySelectorAll('[data-action="new-devis"]').forEach(b=> b.onclick = () => navigate('nouveau', blankDoc('devis')));
  app.querySelectorAll('[data-action="download-guide"]').forEach(b=> b.onclick = generateGuidePdf);
  app.querySelectorAll('[data-action="export-backup"]').forEach(b=> b.onclick = exportBackup);
  const restoreInput = app.querySelector('#restore-input');
  if(restoreInput) restoreInput.onchange = ()=>{
    const file = restoreInput.files && restoreInput.files[0];
    if(file) importBackupFile(file);
  };
  const formLogin = app.querySelector('#form-login');
  if(formLogin) formLogin.onsubmit = (e)=>{
    e.preventDefault();
    const email = app.querySelector('#login-email').value.trim();
    if(email) sendLoginLink(email);
  };
  const logoutBtn = app.querySelector('[data-action="logout"]');
  if(logoutBtn) logoutBtn.onclick = signOutCloud;
  const becomeAdminBtn = app.querySelector('[data-action="become-admin"]');
  if(becomeAdminBtn) becomeAdminBtn.onclick = becomeAdmin;
  const adminRefreshBtn = app.querySelector('[data-action="admin-refresh"]');
  if(adminRefreshBtn) adminRefreshBtn.onclick = fetchAdminStats;

  app.querySelectorAll('[data-action="toggle-chat"]').forEach(b=> b.onclick = ()=>{ state.chatOpen = !state.chatOpen; render(); });
  const chatForm = app.querySelector('#chat-form');
  if(chatForm) chatForm.onsubmit = (e)=>{
    e.preventDefault();
    const inp = app.querySelector('#chat-input');
    const question = inp.value.trim();
    if(!question) return;
    inp.value = '';
    askAssistant(question);
  };

  const searchInput = app.querySelector('#search-input');
  if(searchInput){
    searchInput.oninput = (e) => { state.search = e.target.value; renderSoft(); };
  }
  app.querySelectorAll('[data-filter]').forEach(b=> b.onclick = ()=>{ state.filter=b.dataset.filter; render(); });
  app.querySelectorAll('[data-open-doc]').forEach(tr=> tr.onclick = ()=>{
    const doc = state.documents.find(d=>d.id===tr.dataset.openDoc);
    if(doc) navigate('nouveau', doc);
  });

  const newClientBtn = app.querySelector('[data-action="new-client"]');
  if(newClientBtn) newClientBtn.onclick = () => openModal('client', null);
  app.querySelectorAll('[data-edit-client]').forEach(b=> b.onclick = ()=> openModal('client', state.clients.find(c=>c.id===b.dataset.editClient)));
  app.querySelectorAll('[data-delete-client]').forEach(b=> b.onclick = ()=>{ if(confirm(t('deleteClientConfirm'))) deleteClient(b.dataset.deleteClient).then(render); });

  const newArticleBtn = app.querySelector('[data-action="new-article"]');
  if(newArticleBtn) newArticleBtn.onclick = () => openModal('article', null);
  app.querySelectorAll('[data-edit-article]').forEach(b=> b.onclick = ()=> openModal('article', state.articles.find(a=>a.id===b.dataset.editArticle)));
  app.querySelectorAll('[data-delete-article]').forEach(b=> b.onclick = ()=>{ if(confirm(t('deleteArticleConfirm'))) deleteArticle(b.dataset.deleteArticle).then(render); });

  const formEnt = app.querySelector('#form-entreprise');
  if(formEnt) formEnt.onsubmit = (e)=>{
    e.preventDefault();
    const fd = new FormData(formEnt);
    saveEntreprise(Object.fromEntries(fd.entries())).then(render);
  };

  const logoInput = app.querySelector('#logo-input');
  if(logoInput) logoInput.onchange = async ()=>{
    const file = logoInput.files && logoInput.files[0];
    if(!file) return;
    try{
      const dataUrl = await fileToCircularLogoDataURL(file, 320);
      state.entreprise.logo = dataUrl;
      await save('entreprise');
      toast(t('toastCompanySaved'));
      render();
    }catch(err){
      console.error('logo error', err);
      toast(t('toastLogoError'));
    }
  };
  const removeLogoBtn = app.querySelector('[data-action="remove-logo"]');
  if(removeLogoBtn) removeLogoBtn.onclick = async ()=>{
    state.entreprise.logo = '';
    await save('entreprise');
    render();
  };

  const prefLang = app.querySelector('#pref-lang');
  if(prefLang) prefLang.onchange = ()=>{ state.lang = prefLang.value; savePreferences(); render(); };
  const prefTheme = app.querySelector('#pref-theme');
  if(prefTheme) prefTheme.onchange = ()=>{ state.theme = prefTheme.value; savePreferences(); render(); };
  const prefFontSize = app.querySelector('#pref-fontsize');
  if(prefFontSize) prefFontSize.onchange = ()=>{ state.fontSize = prefFontSize.value; savePreferences(); render(); };

  const formClient = app.querySelector('#form-client');
  if(formClient) formClient.onsubmit = (e)=>{
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(formClient).entries());
    upsertClient(fd).then(()=>{ closeModal(); toast(t('toastClientSaved')); });
  };
  const formArticle = app.querySelector('#form-article');
  if(formArticle) formArticle.onsubmit = (e)=>{
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(formArticle).entries());
    fd.prixUnitaireHT = parseFloat(fd.prixUnitaireHT)||0;
    fd.tauxTva = parseFloat(fd.tauxTva)||0;
    upsertArticle(fd).then(()=>{ closeModal(); toast(t('toastArticleSaved')); });
  };
  app.querySelectorAll('[data-close-modal]').forEach(el=> el.onclick = closeModal);
  const closeOnboardingBtn = app.querySelector('[data-action="close-onboarding"]');
  if(closeOnboardingBtn) closeOnboardingBtn.onclick = dismissOnboarding;
  const onboardNextBtn = app.querySelector('[data-action="onboard-next"]');
  if(onboardNextBtn) onboardNextBtn.onclick = onboardNext;
  const onboardPrevBtn = app.querySelector('[data-action="onboard-prev"]');
  if(onboardPrevBtn) onboardPrevBtn.onclick = onboardPrev;

  bindEditorEvents(app);
}

function renderSoft(){
  const app = document.getElementById('app');
  const main = app.querySelector('main');
  if(main && state.view==='accueil'){
    const activeEl = document.activeElement;
    const wasSearch = activeEl && activeEl.id==='search-input';
    const caret = wasSearch ? activeEl.selectionStart : null;
    main.innerHTML = renderView();
    bindPostRender();
    if(wasSearch){
      const el = document.getElementById('search-input');
      el.focus(); el.selectionStart = el.selectionEnd = caret;
    }
  }
}

/* ============================= SIGNATURE PAD ============================= */
// Signature manuscrite : dessin libre au doigt/souris sur un <canvas>,
// enregistrée sous forme d'image (dataURL PNG) directement dans le document.
function bindSignaturePad(app, doc){
  const canvas = app.querySelector('#signature-pad');
  if(!canvas) return;
  // Le buffer interne du canvas est calé sur sa taille réellement affichée
  // (× devicePixelRatio pour un rendu net), au lieu d'une résolution fixe
  // 600×180 étirée par le CSS : c'est ce décalage qui déformait la signature
  // à l'écran, à la réouverture, et dans le PDF exporté.
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const cssW = rect.width || 400;
  const cssH = cssW * (3/10); // même ratio 10:3 que le CSS (aspect-ratio)
  canvas.width = Math.round(cssW * dpr);
  canvas.height = Math.round(cssH * dpr);
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);
  if(doc.signature){
    const img = new Image();
    img.onload = ()=> ctx.drawImage(img,0,0,canvas.width,canvas.height);
    img.src = doc.signature;
  }
  let drawing = false;
  let last = null;
  const posFromEvent = (e)=>{
    const r = canvas.getBoundingClientRect();
    const scaleX = canvas.width / r.width;
    const scaleY = canvas.height / r.height;
    return { x:(e.clientX - r.left) * scaleX, y:(e.clientY - r.top) * scaleY };
  };
  const start = (e)=>{
    drawing = true;
    last = posFromEvent(e);
    try{ canvas.setPointerCapture(e.pointerId); }catch(err){}
  };
  const move = (e)=>{
    if(!drawing) return;
    const p = posFromEvent(e);
    ctx.strokeStyle = '#1B2A4A';
    ctx.lineWidth = 2.6;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    last = p;
  };
  const end = ()=>{
    if(!drawing) return;
    drawing = false;
    doc.signature = canvas.toDataURL('image/png');
    doc.signatureDate = todayISO();
    scheduleAutosave(doc);
  };
  canvas.onpointerdown = start;
  canvas.onpointermove = move;
  canvas.onpointerup = end;
  canvas.onpointerleave = end;
  canvas.onpointercancel = end;
}

function bindEditorEvents(app){
  const doc = state.editingDoc;
  if(!doc || state.view!=='nouveau') return;

  const backBtn = app.querySelector('[data-action="back"]');
  if(backBtn) backBtn.onclick = ()=> navigate('accueil');

  const typeSel = app.querySelector('#f-type');
  if(typeSel) typeSel.onchange = ()=>{
    const newType = typeSel.value;
    if(newType !== doc.type){
      doc.type = newType;
      // Le numéro doit correspondre au type du document (DEVIS- ou FACT-) :
      // sans ça, un document reste affiché « Facture » avec un numéro de devis.
      doc.numero = nextNumero(doc.type);
      doc.conditions = doc.type==='devis' ? t('defaultConditionsQuote') : t('defaultConditionsInvoice');
      scheduleAutosave(doc);
    }
    renderEditorSoft();
  };
  const validiteInp = app.querySelector('#f-validite');
  if(validiteInp) validiteInp.onchange = ()=>{ doc.dateValidite = validiteInp.value; scheduleAutosave(doc); };
  const dateInp = app.querySelector('#f-date');
  if(dateInp) dateInp.onchange = ()=>{ doc.date = dateInp.value; };
  const statutSel = app.querySelector('#f-statut');
  if(statutSel) statutSel.onchange = ()=>{ doc.statut = statutSel.value; persistDoc(doc,{silent:true}); renderEditorSoft(); };
  const condInp = app.querySelector('#f-conditions');
  if(condInp) condInp.onchange = ()=>{ doc.conditions = condInp.value; };

  const clientSel = app.querySelector('#f-client');
  if(clientSel) clientSel.onchange = ()=>{
    doc.clientId = clientSel.value;
    const c = state.clients.find(x=>x.id===doc.clientId);
    doc.clientSnapshot = c ? {nom:c.nom, adresse:c.adresse, numTva:c.numTva} : null;
    renderEditorSoft();
  };
  const newClientInline = app.querySelector('[data-action="new-client-inline"]');
  if(newClientInline) newClientInline.onclick = ()=> openModal('client', null);

  const textLineFields = new Set(['description','reference','unite']);
  app.querySelectorAll('[data-line-field]').forEach(inp=>{
    inp.oninput = ()=>{
      const l = doc.lignes.find(x=>x.id===inp.dataset.lineId);
      if(!l) return;
      const field = inp.dataset.lineField;
      l[field] = textLineFields.has(field) ? inp.value : (parseFloat(inp.value)||0);
      renderEditorSoft();
      scheduleAutosave(doc);
    };
  });
  // Auto-complétion : si la description saisie correspond exactement à un
  // article enregistré, on reprend son prix et son taux de TVA (comme une
  // recherche dans une base de données de prix).
  app.querySelectorAll('[data-line-field="description"]').forEach(inp=>{
    inp.addEventListener('change', ()=>{
      const match = state.articles.find(a=>a.description===inp.value);
      if(match){
        const l = doc.lignes.find(x=>x.id===inp.dataset.lineId);
        if(l){
          l.prixUnitaireHT = match.prixUnitaireHT;
          l.tauxTva = match.tauxTva;
          renderEditorSoft();
          scheduleAutosave(doc);
        }
      }
    });
  });
  app.querySelectorAll('[data-remove-line]').forEach(b=> b.onclick = ()=>{
    doc.lignes = doc.lignes.filter(l=>l.id!==b.dataset.removeLine);
    renderEditorSoft();
    scheduleAutosave(doc);
  });
  const addLineBtn = app.querySelector('[data-action="add-line"]');
  if(addLineBtn) addLineBtn.onclick = ()=>{ doc.lignes.push(blankLigne()); renderEditorSoft(); };

  const clearSigBtn = app.querySelector('[data-action="clear-signature"]');
  if(clearSigBtn) clearSigBtn.onclick = ()=>{
    doc.signature = null;
    doc.signatureDate = null;
    const canvas = app.querySelector('#signature-pad');
    if(canvas){ canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height); }
    scheduleAutosave(doc);
    renderEditorSoft();
  };

  const exportBtn = app.querySelector('[data-action="export-pdf"]');
  if(exportBtn) exportBtn.onclick = ()=> exportDocPdf(doc);

  const emailBtn = app.querySelector('[data-action="email-pdf"]');
  if(emailBtn) emailBtn.onclick = ()=> emailDocPdf(doc);

  const toFactureBtn = app.querySelector('[data-action="to-facture"]');
  if(toFactureBtn) toFactureBtn.onclick = ()=> convertToFacture(doc);

  const deleteBtn = app.querySelector('[data-action="delete-doc"]');
  if(deleteBtn) deleteBtn.onclick = ()=>{
    if(confirm(t('deleteConfirm'))) deleteDoc(doc.id);
  };

  bindSignaturePad(app, doc);

  // Assignation (et non addEventListener) : `main` n'est pas recréé entre
  // deux appels de renderEditorSoft() pendant la frappe, donc addEventListener
  // empilerait un nouvel écouteur à chaque caractère tapé. L'assignation
  // remplace proprement le gestionnaire précédent à chaque fois.
  const mainEl = app.querySelector('main');
  mainEl.onfocusout = ()=> persistDoc(doc, {silent:true});
}

function renderEditorSoft(){
  const app = document.getElementById('app');
  const main = app.querySelector('main');
  const active = document.activeElement;
  const focusedId = active && active.dataset ? active.dataset.lineId : null;
  const focusedField = active && active.dataset ? active.dataset.lineField : null;
  main.innerHTML = renderView();
  bindPostRender();
  if(focusedId && focusedField){
    const el = app.querySelector(`[data-line-id="${focusedId}"][data-line-field="${focusedField}"]`);
    if(el){ el.focus(); }
  }
}

/* ============================= LIVRAISON DU PDF ============================= */
// Sur iPhone/iPad, surtout en application installée (PWA « ajoutée à l'écran
// d'accueil »), le téléchargement classique d'un fichier via un lien <a download>
// échoue très souvent silencieusement : il n'y a pas d'interface de
// téléchargement dans ce mode. On utilise donc en priorité le partage natif
// du système (qui propose Mail, Messages, Fichiers, etc.), avec repli sur le
// téléchargement classique, puis sur l'ouverture dans un nouvel onglet.
async function deliverPdf(pdf, filename){
  try{
    const blob = pdf.output('blob');
    const file = new File([blob], filename, {type:'application/pdf'});
    if(navigator.canShare && navigator.canShare({files:[file]})){
      await navigator.share({files:[file], title:filename});
      toast(t('toastPdfShared'));
      return true;
    }
  }catch(err){
    if(err && err.name === 'AbortError'){
      // L'utilisateur a simplement annulé le partage : ce n'est pas une erreur.
      return true;
    }
    console.warn('partage indisponible, repli sur le téléchargement', err);
  }
  try{
    pdf.save(filename);
    return true;
  }catch(err){
    console.warn('téléchargement direct impossible, ouverture dans un nouvel onglet', err);
  }
  try{
    const url = pdf.output('bloburl');
    window.open(url, '_blank');
    return true;
  }catch(err){
    console.error('échec complet de la livraison du PDF', err);
    return false;
  }
}

/* ============================= PDF EXPORT ============================= */
// buildDocPdf() construit l'objet jsPDF du devis/facture sans le livrer
// (téléchargement/partage), afin d'être réutilisé à la fois par l'export
// classique (exportDocPdf) et par l'envoi par e-mail (emailDocPdf).
async function buildDocPdf(doc){
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({unit:'pt', format:'a4'});
  if(typeof pdf.autoTable !== 'function'){ toast(t('toastPdfLibLoading')); return; }
  const totals = computeTotals(doc);
  const client = state.clients.find(c=>c.id===doc.clientId) || doc.clientSnapshot;
  const e = state.entreprise;
  const marginX = 48;
  const pageRight = 547;
  let y = 56;
  const statusMap = {brouillon:t('statusDraft'), envoye:t('statusSent'), accepte:t('statusAccepted'), payee:t('statusPaid')};

  if(e.logo){
    try{ pdf.addImage(e.logo, 'PNG', pageRight-52, 26, 52, 52); }
    catch(err){ console.warn('logo pdf error', err); }
  }

  pdf.setFont('helvetica','bold'); pdf.setFontSize(20);
  pdf.setTextColor(27,42,74);
  const titleText = doc.type==='devis' ? t('pdfQuote') : t('pdfInvoice');
  let titleDrawn = false;
  if(e.police){
    try{
      const loaded = await ensureDocumentFontLoaded(e.police);
      if(loaded){
        const img = renderTitleAsImage(titleText, e.police, '#1B2A4A');
        pdf.addImage(img.dataUrl, 'PNG', marginX, y-16, img.widthPt, img.heightPt);
        titleDrawn = true;
      }
    }catch(err){ console.warn('police personnalisée indisponible, style par défaut utilisé', err); }
  }
  if(!titleDrawn) pdf.text(titleText, marginX, y);
  pdf.setFontSize(11); pdf.setFont('helvetica','normal'); pdf.setTextColor(90,90,90);
  pdf.text(doc.numero, marginX, y+16);

  pdf.setFontSize(10); pdf.setTextColor(120,120,120);
  pdf.text(`${t('pdfDate')} : ${formatDate(doc.date)}`, marginX, y+40);
  pdf.text(`${t('pdfStatus')} : ${statusMap[doc.statut]}`, marginX, y+56);
  if(doc.lieDevisNumero) pdf.text(`${t('pdfEstablishedFrom')} ${doc.lieDevisNumero}`, marginX, y+72);

  y += 92;
  pdf.setDrawColor(216,210,194); pdf.line(marginX, y, pageRight, y);
  y += 22;

  pdf.setFontSize(9); pdf.setTextColor(150,150,150); pdf.text(t('pdfIssuer'), marginX, y);
  pdf.setFontSize(9); pdf.text(t('pdfClient'), 320, y);
  y += 14;
  pdf.setFontSize(10.5); pdf.setTextColor(27,42,74); pdf.setFont('helvetica','bold');
  pdf.text(e.nom || t('pdfYourCompany'), marginX, y);
  pdf.text(client ? (client.nom||'') : '—', 320, y);
  pdf.setFont('helvetica','normal'); pdf.setTextColor(60,60,60);
  let y2 = y+14;
  (e.adresse||'').split('\n').forEach(line=>{ pdf.text(line, marginX, y2); y2+=13; });
  let y3 = y+14;
  if(client && client.adresse){ (client.adresse||'').split('\n').forEach(line=>{ pdf.text(line, 320, y3); y3+=13; }); }
  if(e.siret) { pdf.text(`${t('pdfSiret')} : ${e.siret}`, marginX, y2); y2+=13; }
  if(e.tva) { pdf.text(`${t('pdfVat')} : ${e.tva}`, marginX, y2); y2+=13; }
  if(client && client.numTva){ pdf.text(`${t('pdfVat')} : ${client.numTva}`, 320, y3); y3+=13; }

  y = Math.max(y2, y3) + 24;

  const rows = doc.lignes.map(l => {
    const remise = Math.min(100, Math.max(0, parseFloat(l.remise)||0));
    return [
      l.reference || '—',
      l.description || '—',
      l.unite || '—',
      String(l.quantite),
      moneyPdf(parseFloat(l.prixUnitaireHT)||0),
      remise ? remise+'%' : '—',
      (parseFloat(l.tauxTva)||0)+'%',
      moneyPdf(ligneMontantHT(l))
    ];
  });
  pdf.autoTable({
    startY: y,
    margin:{left:marginX, right:48},
    head:[[t('pdfReference'), t('pdfDescription'), t('pdfUnit'), t('pdfQty'), t('pdfUnitPriceHT'), t('pdfDiscount'), t('colVat'), t('pdfTotalHT')]],
    body: rows,
    styles:{font:'helvetica', fontSize:8.3, textColor:[27,42,74], cellPadding:5, overflow:'linebreak'},
    headStyles:{fillColor:[27,42,74], textColor:[245,240,228], fontSize:8},
    alternateRowStyles:{fillColor:[247,243,233]},
    columnStyles:{
      0:{cellWidth:48},
      2:{cellWidth:40, halign:'center'},
      3:{cellWidth:30, halign:'right'},
      4:{cellWidth:56, halign:'right'},
      5:{cellWidth:38, halign:'right'},
      6:{cellWidth:34, halign:'right'},
      7:{cellWidth:58, halign:'right'}
    }
  });

  let ty = pdf.lastAutoTable.finalY + 24;
  if(ty > 700){ pdf.addPage(); ty = 60; }
  const totalsX = 400;
  pdf.setFontSize(10); pdf.setTextColor(60,60,60);
  pdf.text(t('pdfTotalHT'), totalsX, ty); pdf.text(moneyPdf(totals.totalHT), pageRight, ty, {align:'right'});
  ty += 15;
  Object.entries(totals.tvaByRate).forEach(([rate,amt])=>{
    pdf.text(`${t('colVat')} ${rate}%`, totalsX, ty); pdf.text(moneyPdf(amt), pageRight, ty, {align:'right'});
    ty += 15;
  });
  pdf.setDrawColor(216,210,194); pdf.line(totalsX, ty, pageRight, ty); ty += 14;
  pdf.setFont('helvetica','bold'); pdf.setFontSize(12.5); pdf.setTextColor(27,42,74);
  pdf.text(t('totalTTCLabel'), totalsX, ty); pdf.text(moneyPdf(totals.totalTTC), pageRight, ty, {align:'right'});

  ty += 34;
  if(ty > 730){ pdf.addPage(); ty = 60; }
  pdf.setFont('helvetica','normal'); pdf.setFontSize(9.5); pdf.setTextColor(90,90,90);
  pdf.text(`${t('pdfConditions')} : ${doc.conditions || '—'}`, marginX, ty);
  if(doc.dateValidite){ ty+=14; pdf.text(`${t('pdfValidity')} ${formatDate(doc.dateValidite)}`, marginX, ty); }
  if(e.iban){ ty+=14; pdf.text(`${t('pdfIban')} : ${e.iban}`, marginX, ty); }

  if(doc.signature){
    ty += 34;
    if(ty + 60 > 800){ pdf.addPage(); ty = 60; }
    pdf.setFont('helvetica','bold'); pdf.setFontSize(9); pdf.setTextColor(90,90,90);
    pdf.text(`${t('pdfSignature')}${doc.signatureDate ? ' — '+formatDate(doc.signatureDate) : ''}`, marginX, ty);
    try{ pdf.addImage(doc.signature, 'PNG', marginX, ty+8, 150, 45); }
    catch(err){ console.warn('signature pdf error', err); }
  }

  pdf.setDrawColor(179,58,46); pdf.setTextColor(179,58,46);
  pdf.setLineWidth(1.4);
  pdf.circle(500, 130, 40, 'S');
  pdf.setFontSize(9); pdf.setFont('helvetica','bold');
  pdf.text(statusMap[doc.statut].toUpperCase(), 500, 133, {align:'center'});

  if(e.pied){
    pdf.setFont('helvetica','italic'); pdf.setFontSize(8.5); pdf.setTextColor(140,140,140);
    pdf.text(e.pied, marginX, 800, {maxWidth:500});
  }

  return pdf;
}

async function exportDocPdf(doc){
  if(!window.jspdf || !window.jspdf.jsPDF){ toast(t('toastPdfLibLoading')); return; }
  persistDoc(doc, {silent:true});
  try{
    const pdf = await buildDocPdf(doc);
    if(!pdf) return;
    const delivered = await deliverPdf(pdf, `${doc.numero}.pdf`);
    if(delivered) toast(t('toastPdfExported'));
    else toast(t('toastPdfExportError'));
  }catch(err){
    console.error('erreur export PDF', err);
    toast(t('toastPdfExportError'));
  }
}

// emailDocPdf() prépare le PDF puis ouvre le client e-mail de l'utilisateur
// (mailto:) pré-rempli avec le destinataire (adresse du client, si connue),
// l'objet et le corps du message. Sans backend, un navigateur ne peut pas
// joindre automatiquement un fichier à un mailto: ; on livre donc d'abord
// le PDF (partage natif ou téléchargement, comme pour l'export classique)
// puis on ouvre la fenêtre e-mail en expliquant à l'utilisateur de joindre
// le fichier qu'il vient d'obtenir. Si une Cloud Function d'envoi est
// configurée un jour (window.EMAIL_ENDPOINT), on pourra basculer vers un
// envoi 100% automatique sans changer l'appel depuis l'interface.
async function emailDocPdf(doc){
  if(!window.jspdf || !window.jspdf.jsPDF){ toast(t('toastPdfLibLoading')); return; }
  persistDoc(doc, {silent:true});
  try{
    const pdf = await buildDocPdf(doc);
    if(!pdf) return;
    const filename = `${doc.numero}.pdf`;
    const client = state.clients.find(c=>c.id===doc.clientId) || doc.clientSnapshot;
    const e = state.entreprise;
    const isQuote = doc.type === 'devis';
    const subject = (isQuote ? t('emailPdfSubjectQuote') : t('emailPdfSubjectInvoice'))(doc.numero);
    const body = (isQuote ? t('emailPdfBodyQuote') : t('emailPdfBodyInvoice'))(doc.numero, e && e.nom);

    if(window.EMAIL_ENDPOINT && fbCurrentUser){
      // Envoi automatique via une Cloud Function (si configurée, voir
      // SETUP-COMPTE-ET-ASSISTANT.md). Le PDF est envoyé en pièce jointe
      // sans que l'utilisateur ait à ouvrir sa messagerie.
      if(!client || !client.email){ toast(t('toastEmailNoClientAddress')); return; }
      const pdfBase64 = pdf.output('datauristring').split(',')[1];
      const idToken = await fbCurrentUser.getIdToken();
      const res = await fetch(window.EMAIL_ENDPOINT, {
        method: 'POST',
        headers: {'Content-Type':'application/json', Authorization:`Bearer ${idToken}`},
        body: JSON.stringify({to: client.email, subject, message: body, filename, pdfBase64})
      });
      if(!res.ok) throw new Error(`HTTP ${res.status}`);
      toast(t('toastEmailSent'));
      return;
    }

    const delivered = await deliverPdf(pdf, filename);
    if(!delivered){ toast(t('toastPdfExportError')); return; }
    if(client && !client.email) toast(t('toastEmailNoClientAddress'));
    const to = (client && client.email) ? encodeURIComponent(client.email) : '';
    const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    toast(t('toastEmailPrepared'));
  }catch(err){
    console.error('erreur envoi e-mail PDF', err);
    toast(t('toastEmailError'));
  }
}

/* ============================= GUIDE D'UTILISATION (PDF) ============================= */
// Génère, entièrement hors ligne, un guide PDF expliquant le fonctionnement
// de l'application dans la langue active, pour guider l'utilisateur au bon usage.
async function generateGuidePdf(){
  if(!window.jspdf || !window.jspdf.jsPDF){ toast(t('toastPdfLibLoading')); return; }
  try{
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({unit:'pt', format:'a4'});
  const marginX = 48;
  const pageRight = 547;
  let y = 64;
  const isEn = state.lang==='en';
  const title = isEn ? 'User Guide — The Registry' : "Guide d'utilisation — Le Registre";

  pdf.setFont('helvetica','bold'); pdf.setFontSize(21); pdf.setTextColor(27,42,74);
  pdf.text(title, marginX, y);
  y += 10;
  pdf.setFont('helvetica','normal'); pdf.setFontSize(10); pdf.setTextColor(120,120,120);
  y += 16;
  pdf.text(isEn ? 'Works fully offline · your data never leaves this device' : 'Fonctionne entièrement hors ligne · vos données ne quittent jamais cet appareil', marginX, y);
  y += 18;
  pdf.setDrawColor(216,210,194); pdf.line(marginX, y, pageRight, y);
  y += 26;

  const sections = TRANSLATIONS[state.lang].guideSections || TRANSLATIONS.fr.guideSections;
  sections.forEach(([heading, body])=>{
    if(y > 730){ pdf.addPage(); y = 64; }
    pdf.setFont('helvetica','bold'); pdf.setFontSize(12); pdf.setTextColor(179,58,46);
    pdf.text(heading, marginX, y);
    y += 17;
    pdf.setFont('helvetica','normal'); pdf.setFontSize(10.5); pdf.setTextColor(60,60,60);
    const lines = pdf.splitTextToSize(body, pageRight-marginX);
    if(y + lines.length*14 > 780){ pdf.addPage(); y = 64; }
    pdf.text(lines, marginX, y);
    y += lines.length*14 + 20;
  });

  const delivered = await deliverPdf(pdf, isEn ? 'user-guide.pdf' : 'guide-utilisation.pdf');
  if(delivered) toast(t('toastGuideGenerated'));
  else toast(t('toastPdfExportError'));
  }catch(err){
    console.error('erreur génération guide PDF', err);
    toast(t('toastPdfExportError'));
  }
}

/* ============================= INIT ============================= */
window.addEventListener('error', (e)=>{ console.error('Erreur non interceptée :', e.error || e.message); });
window.addEventListener('unhandledrejection', (e)=>{ console.error('Promesse rejetée :', e.reason); });
loadAll();
// Les SDK Firebase sont chargés avec `defer` dans index.html. Attendre `load`
// évite de rater la synchronisation si la connexion est lente au premier accès.
window.addEventListener('load', initCloud, {once:true});
