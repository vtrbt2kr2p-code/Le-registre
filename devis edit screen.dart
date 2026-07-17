import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../pdf/pdf_service.dart';
import '../signature/signature_capture.dart';
import 'devis_controller.dart';
import 'devis_model.dart';
import 'widgets/ligne_devis_tile.dart';

/// Écran complet d'édition d'un devis. Tout ce qui est saisi met à jour
/// le state du DevisEditController -> les totaux (encadré du bas) se
/// recalculent immédiatement, sans action de l'utilisateur.
class DevisEditScreen extends ConsumerStatefulWidget {
  final Devis devisInitial;
  final String entrepriseNom;
  final String entrepriseAdresse;

  const DevisEditScreen({
    super.key,
    required this.devisInitial,
    required this.entrepriseNom,
    required this.entrepriseAdresse,
  });

  @override
  ConsumerState<DevisEditScreen> createState() => _DevisEditScreenState();
}

class _DevisEditScreenState extends ConsumerState<DevisEditScreen> {
  dynamic _signatureBytes; // Uint8List? — capturée via SignatureCapture

  @override
  Widget build(BuildContext context) {
    final provider = devisEditProvider(widget.devisInitial);
    final devis = ref.watch(provider);
    final controller = ref.read(provider.notifier);

    return Scaffold(
      appBar: AppBar(
        title: Text('Devis ${devis.numero.isEmpty ? "(nouveau)" : devis.numero}'),
        actions: [
          IconButton(
            icon: const Icon(Icons.picture_as_pdf),
            tooltip: 'Générer le PDF',
            onPressed: () => _genererEtProposerActions(context, devis),
          ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          _sectionClient(controller, devis),
          const SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text('Lignes', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
              TextButton.icon(
                onPressed: controller.ajouterLigne,
                icon: const Icon(Icons.add),
                label: const Text('Ajouter une ligne'),
              ),
            ],
          ),
          if (devis.lignes.isEmpty)
            const Padding(
              padding: EdgeInsets.symmetric(vertical: 24),
              child: Center(child: Text('Aucune ligne — clique sur "Ajouter une ligne".')),
            ),
          for (final ligne in devis.lignes)
            LigneDevisTile(
              key: ValueKey(ligne.id),
              ligne: ligne,
              devise: devis.devise,
              onChanged: (nouvelle) => controller.modifierLigne(ligne.id, (_) => nouvelle),
              onSupprimer: () => controller.supprimerLigne(ligne.id),
            ),
          const SizedBox(height: 16),
          _recapitulatifTotaux(devis),
          const SizedBox(height: 24),
          Text('Signature', style: Theme.of(context).textTheme.titleMedium),
          const SizedBox(height: 8),
          SignatureCapture(onSigned: (bytes) => setState(() => _signatureBytes = bytes)),
          const SizedBox(height: 32),
        ],
      ),
    );
  }

  Widget _sectionClient(DevisEditController controller, Devis devis) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const Text('Client', style: TextStyle(fontWeight: FontWeight.bold)),
            const SizedBox(height: 8),
            TextFormField(
              initialValue: devis.clientNom,
              decoration: const InputDecoration(labelText: 'Nom du client'),
              onChanged: (v) => controller.modifierClient(nom: v),
            ),
            TextFormField(
              initialValue: devis.clientAdresse,
              decoration: const InputDecoration(labelText: 'Adresse'),
              onChanged: (v) => controller.modifierClient(adresse: v),
            ),
            TextFormField(
              initialValue: devis.clientEmail,
              decoration: const InputDecoration(labelText: 'Email'),
              keyboardType: TextInputType.emailAddress,
              onChanged: (v) => controller.modifierClient(email: v),
            ),
          ],
        ),
      ),
    );
  }

  Widget _recapitulatifTotaux(Devis devis) {
    Widget ligne(String label, String valeur, {bool gras = false}) => Padding(
      padding: const EdgeInsets.symmetric(vertical: 2),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(label, style: TextStyle(fontWeight: gras ? FontWeight.bold : FontWeight.normal)),
          Text(valeur, style: TextStyle(fontWeight: gras ? FontWeight.bold : FontWeight.normal)),
        ],
      ),
    );

    return Card(
      color: Theme.of(context).colorScheme.surfaceContainerHighest,
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            ligne('Total HT', '${devis.totalHT.toStringAsFixed(2)} ${devis.devise}'),
            for (final entry in devis.tvaParTaux.entries)
              ligne('dont TVA ${entry.key.toStringAsFixed(1)}%',
                  '${entry.value.toStringAsFixed(2)} ${devis.devise}'),
            const Divider(),
            ligne('Total TTC', '${devis.totalTTC.toStringAsFixed(2)} ${devis.devise}', gras: true),
          ],
        ),
      ),
    );
  }

  Future<void> _genererEtProposerActions(BuildContext context, Devis devis) async {
    if (devis.lignes.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Ajoute au moins une ligne avant de générer le PDF.')),
      );
      return;
    }

    final bytes = await PdfService.genererDevisPdf(
      devis: devis,
      entrepriseNom: widget.entrepriseNom,
      entrepriseAdresse: widget.entrepriseAdresse,
      signatureBytes: _signatureBytes,
    );

    if (!context.mounted) return;

    showModalBottomSheet(
      context: context,
      builder: (_) => SafeArea(
        child: Wrap(
          children: [
            ListTile(
              leading: const Icon(Icons.download),
              title: const Text('Télécharger / ouvrir'),
              onTap: () {
                Navigator.pop(context);
                PdfService.telechargerEtOuvrir(bytes, 'devis_${devis.numero}.pdf');
              },
            ),
            ListTile(
              leading: const Icon(Icons.print),
              title: const Text('Imprimer'),
              onTap: () {
                Navigator.pop(context);
                PdfService.imprimer(bytes);
              },
            ),
            ListTile(
              leading: const Icon(Icons.share),
              title: const Text('Partager'),
              onTap: () {
                Navigator.pop(context);
                PdfService.partager(bytes, 'devis_${devis.numero}.pdf');
              },
            ),
          ],
        ),
      ),
    );
  }
}
