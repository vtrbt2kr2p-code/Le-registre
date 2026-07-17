class Entreprise {
  final String nom;
  final String logoUrl; // URL Firebase Storage, vide si pas encore uploadé
  final String adresse;
  final String ville;
  final String pays;
  final String telephone;
  final String email;
  final String siteInternet;
  final String siret;
  final String tva;
  final String iban;
  final String bic;
  final String conditionsPaiement;
  final String conditionsGenerales;

  const Entreprise({
    this.nom = '',
    this.logoUrl = '',
    this.adresse = '',
    this.ville = '',
    this.pays = '',
    this.telephone = '',
    this.email = '',
    this.siteInternet = '',
    this.siret = '',
    this.tva = '',
    this.iban = '',
    this.bic = '',
    this.conditionsPaiement = '',
    this.conditionsGenerales = '',
  });

  /// Vrai si les champs essentiels sont remplis. Sert à savoir si on doit
  /// rediriger vers l'écran "Créer mon entreprise" à la connexion.
  bool get estComplete => nom.isNotEmpty && email.isNotEmpty;

  Map<String, dynamic> versFirestore() => {
        'nom': nom,
        'logoUrl': logoUrl,
        'adresse': adresse,
        'ville': ville,
        'pays': pays,
        'telephone': telephone,
        'email': email,
        'siteInternet': siteInternet,
        'siret': siret,
        'tva': tva,
        'iban': iban,
        'bic': bic,
        'conditionsPaiement': conditionsPaiement,
        'conditionsGenerales': conditionsGenerales,
      };

  factory Entreprise.depuisFirestore(Map<String, dynamic>? data) {
    if (data == null) return const Entreprise();
    return Entreprise(
      nom: data['nom'] ?? '',
      logoUrl: data['logoUrl'] ?? '',
      adresse: data['adresse'] ?? '',
      ville: data['ville'] ?? '',
      pays: data['pays'] ?? '',
      telephone: data['telephone'] ?? '',
      email: data['email'] ?? '',
      siteInternet: data['siteInternet'] ?? '',
      siret: data['siret'] ?? '',
      tva: data['tva'] ?? '',
      iban: data['iban'] ?? '',
      bic: data['bic'] ?? '',
      conditionsPaiement: data['conditionsPaiement'] ?? '',
      conditionsGenerales: data['conditionsGenerales'] ?? '',
    );
  }

  Entreprise copyWith({
    String? nom,
    String? logoUrl,
    String? adresse,
    String? ville,
    String? pays,
    String? telephone,
    String? email,
    String? siteInternet,
    String? siret,
    String? tva,
    String? iban,
    String? bic,
    String? conditionsPaiement,
    String? conditionsGenerales,
  }) {
    return Entreprise(
      nom: nom ?? this.nom,
      logoUrl: logoUrl ?? this.logoUrl,
      adresse: adresse ?? this.adresse,
      ville: ville ?? this.ville,
      pays: pays ?? this.pays,
      telephone: telephone ?? this.telephone,
      email: email ?? this.email,
      siteInternet: siteInternet ?? this.siteInternet,
      siret: siret ?? this.siret,
      tva: tva ?? this.tva,
      iban: iban ?? this.iban,
      bic: bic ?? this.bic,
      conditionsPaiement: conditionsPaiement ?? this.conditionsPaiement,
      conditionsGenerales: conditionsGenerales ?? this.conditionsGenerales,
    );
  }
}
