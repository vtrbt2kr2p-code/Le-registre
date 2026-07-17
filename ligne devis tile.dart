import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../devis_model.dart';

/// Une ligne éditable. Chaque champ modifié appelle `onChanged` avec la
/// version mise à jour de la ligne — le parent (contrôleur) se charge de
/// la remettre dans la liste et recalculer les totaux.
class LigneDevisTile extends StatelessWidget {
  final LigneDevis ligne;
  final String devise;
  final ValueChanged<LigneDevis> onChanged;
  final VoidCallback onSupprimer;

  const LigneDevisTile({
    super.key,
    required this.ligne,
    required this.devise,
    required this.onChanged,
    required this.onSupprimer,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(vertical: 4),
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Row(
              children: [
                Expanded(
                  child: TextFormField(
                    initialValue: ligne.description,
                    decoration: const InputDecoration(
                      labelText: 'Description',
                      isDense: true,
                    ),
                    onChanged: (v) => onChanged(ligne.copyWith(description: v)),
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.delete_outline),
                  tooltip: 'Supprimer la ligne',
                  onPressed: onSupprimer,
                ),
              ],
            ),
            const SizedBox(height: 8),
            Row(
              children: [
                _champNumerique(
                  label: 'Qté',
                  valeur: ligne.quantite,
                  onChanged: (v) => onChanged(ligne.copyWith(quantite: v)),
                ),
                const SizedBox(width: 8),
                _champNumerique(
                  label: 'PU HT ($devise)',
                  valeur: ligne.prixUnitaireHT,
                  onChanged: (v) => onChanged(ligne.copyWith(prixUnitaireHT: v)),
                ),
                const SizedBox(width: 8),
                _champNumerique(
                  label: 'Remise %',
                  valeur: ligne.remisePourcent,
                  onChanged: (v) => onChanged(ligne.copyWith(remisePourcent: v)),
                ),
                const SizedBox(width: 8),
                _champNumerique(
                  label: 'TVA %',
                  valeur: ligne.tauxTVA,
                  onChanged: (v) => onChanged(ligne.copyWith(tauxTVA: v)),
                ),
              ],
            ),
            const SizedBox(height: 8),
            Align(
              alignment: Alignment.centerRight,
              child: Text(
                'Total TTC : ${ligne.totalTTC.toStringAsFixed(2)} $devise',
                style: const TextStyle(fontWeight: FontWeight.bold),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _champNumerique({
    required String label,
    required double valeur,
    required ValueChanged<double> onChanged,
  }) {
    return Expanded(
      child: TextFormField(
        initialValue: valeur == valeur.roundToDouble()
            ? valeur.toStringAsFixed(0)
            : valeur.toString(),
        decoration: InputDecoration(labelText: label, isDense: true),
        keyboardType: const TextInputType.numberWithOptions(decimal: true),
        inputFormatters: [
          FilteringTextInputFormatter.allow(RegExp(r'^\d*\.?\d*$')),
        ],
        onChanged: (v) => onChanged(double.tryParse(v) ?? 0),
      ),
    );
  }
}
