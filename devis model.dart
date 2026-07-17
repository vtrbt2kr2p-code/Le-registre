/// Une ligne de devis/facture.
class LigneDevis {
  final String id; // identifiant stable, nécessaire pour cibler une ligne
                    // précise dans la liste lors de l'édition (Riverpod)
  final String description;
  final double quantite;
  final double prixUnitaireHT;
  final double tauxTVA; // ex: 20.0 pour 20%
  final double remisePourcent; // ex: 10.0 pour 10%

  const LigneDevis({
    required this.id,
    required this.description,
    required this.quantite,
    required this.prixUnitaireHT,
    this.tauxTVA = 20.0,
    this.remisePourcent = 0.0,
  });

  double get totalHTBrut => quantite * prixUnitaireHT;
  double get montantRemise => totalHTBrut * (remisePourcent / 100);
  double get totalHTNet => totalHTBrut - montantRemise;
  double get montantTVA => totalHTNet * (tauxTVA / 100);
  double get totalTTC => totalHTNet + montantTVA;

  LigneDevis copyWith({
    String? description,
    double? quantite,
    double? prixUnitaireHT,
    double? tauxTVA,
    double? remisePourcent,
  }) {
    return LigneDevis(
      id: id,
      description: description ?? this.description,
      quantite: quantite ?? this.quantite,
      prixUnitaireHT: prixUnitaireHT ?? this.prixUnitaireHT,
      tauxTVA: tauxTVA ?? this.tauxTVA,
      remisePourcent: remisePourcent ?? this.remisePourcent,
    );
  }
}

class Devis {
  final String id;
  final String numero;
  final DateTime date;
  final String clientNom;
  final String clientAdresse;
  final String clientEmail;
  final List<LigneDevis> lignes;
  final String devise; // ex: "EUR", "USD", "XOF"...
  final String? signaturePngBase64; // signature intégrée, cf module signature
  final String conditionsPaiement;
  final String notes;

  const Devis({
    required this.id,
    required this.numero,
    required this.date,
    required this.clientNom,
    required this.clientAdresse,
    required this.clientEmail,
    required this.lignes,
    this.devise = 'EUR',
    this.signaturePngBase64,
    this.conditionsPaiement = '',
    this.notes = '',
  });

  double get totalHT => lignes.fold(0, (sum, l) => sum + l.totalHTNet);
  double get totalTVA => lignes.fold(0, (sum, l) => sum + l.montantTVA);
  double get totalTTC => lignes.fold(0, (sum, l) => sum + l.totalTTC);

  /// Regroupe les montants de TVA par taux, pour l'affichage réglementaire
  /// ("dont TVA 20% : ...", "dont TVA 5.5% : ..." etc.)
  Map<double, double> get tvaParTaux {
    final map = <double, double>{};
    for (final l in lignes) {
      map[l.tauxTVA] = (map[l.tauxTVA] ?? 0) + l.montantTVA;
    }
    return map;
  }

  Devis copyWith({
    String? numero,
    DateTime? date,
    String? clientNom,
    String? clientAdresse,
    String? clientEmail,
    List<LigneDevis>? lignes,
    String? devise,
    String? signaturePngBase64,
    String? conditionsPaiement,
    String? notes,
  }) {
    return Devis(
      id: id,
      numero: numero ?? this.numero,
      date: date ?? this.date,
      clientNom: clientNom ?? this.clientNom,
      clientAdresse: clientAdresse ?? this.clientAdresse,
      clientEmail: clientEmail ?? this.clientEmail,
      lignes: lignes ?? this.lignes,
      devise: devise ?? this.devise,
      signaturePngBase64: signaturePngBase64 ?? this.signaturePngBase64,
      conditionsPaiement: conditionsPaiement ?? this.conditionsPaiement,
      notes: notes ?? this.notes,
    );
  }
}
