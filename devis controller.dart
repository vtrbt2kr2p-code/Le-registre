import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'devis_model.dart';

/// Fournit et fait évoluer le devis actuellement en cours d'édition.
/// Chaque action (ajouter une ligne, changer une quantité, etc.) recrée
/// un nouvel objet `Devis` immuable -> Riverpod notifie automatiquement
/// l'UI -> les totaux affichés se recalculent en direct, sans setState
/// manuel dispersé dans les widgets.
class DevisEditController extends StateNotifier<Devis> {
  DevisEditController(super.state);

  int _compteurLigne = 0;
  String _nouvelIdLigne() => 'ligne_${DateTime.now().microsecondsSinceEpoch}_${_compteurLigne++}';

  void ajouterLigne() {
    final nouvelleLigne = LigneDevis(
      id: _nouvelIdLigne(),
      description: '',
      quantite: 1,
      prixUnitaireHT: 0,
    );
    state = state.copyWith(lignes: [...state.lignes, nouvelleLigne]);
  }

  void supprimerLigne(String ligneId) {
    state = state.copyWith(
      lignes: state.lignes.where((l) => l.id != ligneId).toList(),
    );
  }

  void modifierLigne(String ligneId, LigneDevis Function(LigneDevis) update) {
    state = state.copyWith(
      lignes: [
        for (final l in state.lignes)
          if (l.id == ligneId) update(l) else l,
      ],
    );
  }

  void reordonnerLignes(int oldIndex, int newIndex) {
    final lignes = [...state.lignes];
    if (newIndex > oldIndex) newIndex -= 1;
    final ligne = lignes.removeAt(oldIndex);
    lignes.insert(newIndex, ligne);
    state = state.copyWith(lignes: lignes);
  }

  void modifierClient({String? nom, String? adresse, String? email}) {
    state = state.copyWith(
      clientNom: nom,
      clientAdresse: adresse,
      clientEmail: email,
    );
  }

  void modifierDevise(String devise) {
    state = state.copyWith(devise: devise);
  }

  void modifierNotes(String notes) {
    state = state.copyWith(notes: notes);
  }

  void modifierConditionsPaiement(String conditions) {
    state = state.copyWith(conditionsPaiement: conditions);
  }
}

/// Provider "famille" : un contrôleur indépendant par devis (via son id),
/// pour pouvoir éditer plusieurs devis dans des onglets différents sans
/// qu'ils se marchent dessus.
final devisEditProvider =
    StateNotifierProvider.family<DevisEditController, Devis, Devis>(
  (ref, devisInitial) => DevisEditController(devisInitial),
);

/// Crée un devis vierge prêt à être édité (nouveau devis).
Devis nouveauDevisVierge({required String numero, String devise = 'EUR'}) {
  return Devis(
    id: 'devis_${DateTime.now().microsecondsSinceEpoch}',
    numero: numero,
    date: DateTime.now(),
    clientNom: '',
    clientAdresse: '',
    clientEmail: '',
    lignes: const [],
    devise: devise,
  );
}
