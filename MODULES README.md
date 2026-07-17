# Module 1 — PDF + Signature (livré)

## Ce qui est corrigé / ajouté
- **Téléchargement PDF universel** : `PdfService.telechargerEtOuvrir()` utilise
  le package `printing`, qui a une API unique pour Android / iOS / Web /
  Windows / macOS. Fini les branches de code par plateforme qui cassaient
  le bouton "Télécharger".
- **Impression** : `PdfService.imprimer()` ouvre l'aperçu natif d'impression
  partout.
- **Partage** : `PdfService.partager()` ouvre la feuille de partage native
  (email, WhatsApp, Drive...).
- **Signature manuscrite** : capturée en vectoriel haute résolution
  (`SignatureCapture`), exportée en PNG transparent, intégrée dans le PDF à
  une position et une taille fixes (`pw.Container(width:180, height:90)`)
  → visible et nette sur tous les appareils.
- **Devis détaillé** : `Devis` / `LigneDevis` gèrent quantité, prix unitaire,
  remise par ligne, TVA par ligne (donc plusieurs taux dans un même devis),
  sous-totaux et total — avec le récapitulatif "dont TVA x%" attendu sur un
  document professionnel.

## Comment l'utiliser (exemple minimal)
```dart
final pdfBytes = await PdfService.genererDevisPdf(
  devis: monDevis,
  entrepriseNom: "Mon Entreprise",
  entrepriseAdresse: "12 rue Example, 75000 Paris",
  logoBytes: monLogo,
  signatureBytes: maSignature, // vient de SignatureCapture.onSigned
);

await PdfService.telechargerEtOuvrir(pdfBytes, "devis_${devis.numero}.pdf");
```

## Module 2 — Écran d'édition en direct (livré)
- `devis_controller.dart` : `DevisEditController` (Riverpod StateNotifier)
  gère tout l'état d'un devis en cours d'édition — ajout/suppression/
  réordonnancement de lignes, modif client, devise, notes. Pattern
  immuable : chaque action recrée un `Devis` via `copyWith`, donc l'UI se
  recalcule automatiquement (pas de setState dispersé, pas de bug de
  synchro entre les totaux et les lignes).
- `widgets/ligne_devis_tile.dart` : une ligne éditable (description, qté,
  PU HT, remise %, TVA %) avec total TTC de la ligne affiché en direct.
- `devis_edit_screen.dart` : écran complet — infos client, liste des
  lignes, récapitulatif des totaux (HT / TVA par taux / TTC) qui se met à
  jour à chaque frappe, capture de signature, et bouton PDF qui propose
  télécharger / imprimer / partager (relié au module 1).

### Comment l'utiliser
```dart
Navigator.push(context, MaterialPageRoute(
  builder: (_) => DevisEditScreen(
    devisInitial: nouveauDevisVierge(numero: 'DEV-2026-001', devise: 'EUR'),
    entrepriseNom: "Mon Entreprise",
    entrepriseAdresse: "12 rue Example, 75000 Paris",
  ),
));
```

## Prochaine étape (module 3)
Brancher tout ça sur Firebase : Auth (email/mot de passe), Firestore pour
la persistance + sauvegarde automatique en temps réel, Storage pour logo/
signature, et les règles de sécurité pour que chaque utilisateur ne voie
que ses propres données.

## Important
Ce code n'a pas pu être compilé/testé ici (pas d'accès réseau dans cet
environnement pour `flutter pub get`). Avant de l'intégrer :
1. Crée un projet Flutter vierge (`flutter create le_registre`)
2. Remplace `pubspec.yaml` par celui fourni, lance `flutter pub get`
3. Copie les fichiers `lib/features/...` dans ton projet
4. Teste sur au moins un appareil réel + le web avant de passer au module 2
