import 'package:flutter/material.dart';
import '../../core/firestore/firestore_repository.dart';
import 'entreprise_model.dart';

/// Affiché automatiquement juste après l'inscription (voir la logique de
/// routage dans app_router.dart : si `entreprise.estComplete == false`,
/// on redirige systématiquement ici avant de laisser accéder au reste de
/// l'app). Réaccessible ensuite via Menu -> Mon entreprise.
class CreerEntrepriseScreen extends StatefulWidget {
  final VoidCallback onTermine;
  final Entreprise? entrepriseExistante; // non-null si on modifie plus tard

  const CreerEntrepriseScreen({
    super.key,
    required this.onTermine,
    this.entrepriseExistante,
  });

  @override
  State<CreerEntrepriseScreen> createState() => _CreerEntrepriseScreenState();
}

class _CreerEntrepriseScreenState extends State<CreerEntrepriseScreen> {
  final _formKey = GlobalKey<FormState>();
  final _repo = FirestoreRepository();
  bool _enregistrement = false;

  late final Map<String, TextEditingController> _controllers;

  @override
  void initState() {
    super.initState();
    final e = widget.entrepriseExistante ?? const Entreprise();
    _controllers = {
      'nom': TextEditingController(text: e.nom),
      'adresse': TextEditingController(text: e.adresse),
      'ville': TextEditingController(text: e.ville),
      'pays': TextEditingController(text: e.pays),
      'telephone': TextEditingController(text: e.telephone),
      'email': TextEditingController(text: e.email),
      'siteInternet': TextEditingController(text: e.siteInternet),
      'siret': TextEditingController(text: e.siret),
      'tva': TextEditingController(text: e.tva),
      'iban': TextEditingController(text: e.iban),
      'bic': TextEditingController(text: e.bic),
      'conditionsPaiement': TextEditingController(text: e.conditionsPaiement),
      'conditionsGenerales': TextEditingController(text: e.conditionsGenerales),
    };
  }

  @override
  void dispose() {
    for (final c in _controllers.values) {
      c.dispose();
    }
    super.dispose();
  }

  Future<void> _enregistrer() async {
    if (!_formKey.currentState!.validate()) return;
    setState(() => _enregistrement = true);

    final entreprise = Entreprise(
      nom: _controllers['nom']!.text.trim(),
      adresse: _controllers['adresse']!.text.trim(),
      ville: _controllers['ville']!.text.trim(),
      pays: _controllers['pays']!.text.trim(),
      telephone: _controllers['telephone']!.text.trim(),
      email: _controllers['email']!.text.trim(),
      siteInternet: _controllers['siteInternet']!.text.trim(),
      siret: _controllers['siret']!.text.trim(),
      tva: _controllers['tva']!.text.trim(),
      iban: _controllers['iban']!.text.trim(),
      bic: _controllers['bic']!.text.trim(),
      conditionsPaiement: _controllers['conditionsPaiement']!.text.trim(),
      conditionsGenerales: _controllers['conditionsGenerales']!.text.trim(),
      logoUrl: widget.entrepriseExistante?.logoUrl ?? '',
    );

    try {
      await _repo.sauvegarderEntreprise(entreprise);
      widget.onTermine();
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Erreur d\'enregistrement : $e')),
        );
      }
    } finally {
      if (mounted) setState(() => _enregistrement = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Créer mon entreprise')),
      body: Form(
        key: _formKey,
        child: ListView(
          padding: const EdgeInsets.all(16),
          children: [
            const Text(
              'Ces informations seront réutilisées automatiquement dans '
              'tous tes devis et factures. Tu pourras les modifier plus '
              'tard depuis Menu > Mon entreprise.',
              style: TextStyle(color: Colors.grey),
            ),
            const SizedBox(height: 16),
            _champ('nom', 'Nom de l\'entreprise *', obligatoire: true),
            _champ('adresse', 'Adresse'),
            _champ('ville', 'Ville'),
            _champ('pays', 'Pays'),
            _champ('telephone', 'Téléphone'),
            _champ('email', 'Email *', obligatoire: true, clavier: TextInputType.emailAddress),
            _champ('siteInternet', 'Site Internet'),
            _champ('siret', 'Numéro SIRET'),
            _champ('tva', 'TVA intracommunautaire'),
            _champ('iban', 'IBAN'),
            _champ('bic', 'BIC'),
            _champ('conditionsPaiement', 'Conditions de paiement', lignes: 3),
            _champ('conditionsGenerales', 'Conditions générales', lignes: 5),
            const SizedBox(height: 24),
            FilledButton(
              onPressed: _enregistrement ? null : _enregistrer,
              child: _enregistrement
                  ? const SizedBox(
                      width: 20, height: 20,
                      child: CircularProgressIndicator(strokeWidth: 2))
                  : const Text('Continuer'),
            ),
          ],
        ),
      ),
    );
  }

  Widget _champ(String cle, String label,
      {bool obligatoire = false, int lignes = 1, TextInputType? clavier}) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: TextFormField(
        controller: _controllers[cle],
        decoration: InputDecoration(labelText: label),
        maxLines: lignes,
        keyboardType: clavier,
        validator: obligatoire
            ? (v) => (v == null || v.trim().isEmpty) ? 'Champ obligatoire' : null
            : null,
      ),
    );
  }
}
