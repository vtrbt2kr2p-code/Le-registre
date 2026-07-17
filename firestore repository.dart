import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import '../../features/entreprise/entreprise_model.dart';
import '../../features/devis/devis_model.dart';

/// Toutes les données de l'app sont stockées sous users/{uid}/... .
/// Cette structure imbriquée rend les règles de sécurité triviales à
/// écrire ET à auditer : "un utilisateur ne peut lire/écrire que sous son
/// propre uid" devient une seule règle (voir firebase/firestore.rules).
///
/// La sauvegarde automatique (point 4 du cahier des charges) et la
/// synchronisation multi-appareils (point 6) sont un seul et même
/// mécanisme ici : chaque écriture part directement vers Firestore (pas
/// de stockage local intermédiaire à synchroniser plus tard), et chaque
/// appareil connecté au même compte écoute les mêmes documents via
/// `snapshots()` -> toute modification apparaît en direct partout.
class FirestoreRepository {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  String get _uid {
    final uid = FirebaseAuth.instance.currentUser?.uid;
    if (uid == null) {
      throw StateError('Aucun utilisateur connecté — impossible d\'accéder aux données.');
    }
    return uid;
  }

  DocumentReference<Map<String, dynamic>> get _entrepriseDoc =>
      _db.collection('users').doc(_uid).collection('entreprise').doc('main');

  CollectionReference<Map<String, dynamic>> get _devisCol =>
      _db.collection('users').doc(_uid).collection('devis');

  CollectionReference<Map<String, dynamic>> get _facturesCol =>
      _db.collection('users').doc(_uid).collection('factures');

  CollectionReference<Map<String, dynamic>> get _clientsCol =>
      _db.collection('users').doc(_uid).collection('clients');

  // ---------------- Entreprise ----------------

  Future<void> sauvegarderEntreprise(Entreprise entreprise) {
    // merge:true -> sauvegarde auto sans jamais écraser un champ qu'on
    // n'a pas touché (utile si deux appareils modifient des champs
    // différents à quelques secondes d'intervalle).
    return _entrepriseDoc.set(entreprise.versFirestore(), SetOptions(merge: true));
  }

  Stream<Entreprise> ecouterEntreprise() {
    return _entrepriseDoc.snapshots().map((doc) => Entreprise.depuisFirestore(doc.data()));
  }

  Future<Entreprise> chargerEntreprise() async {
    final doc = await _entrepriseDoc.get();
    return Entreprise.depuisFirestore(doc.data());
  }

  // ---------------- Devis ----------------

  Future<void> sauvegarderDevis(Devis devis) {
    return _devisCol.doc(devis.id).set(_devisVersFirestore(devis), SetOptions(merge: true));
  }

  Future<void> supprimerDevis(String devisId) => _devisCol.doc(devisId).delete();

  /// Flux temps réel de tous les devis — c'est ce flux qui alimente la
  /// synchronisation multi-appareils : dès qu'un devis change sur un
  /// appareil, tous les autres appareils connectés le reçoivent ici.
  Stream<List<Devis>> ecouterDevis() {
    return _devisCol.orderBy('date', descending: true).snapshots().map(
          (snap) => snap.docs.map((d) => _devisDepuisFirestore(d.id, d.data())).toList(),
        );
  }

  Map<String, dynamic> _devisVersFirestore(Devis devis) => {
        'numero': devis.numero,
        'date': Timestamp.fromDate(devis.date),
        'clientNom': devis.clientNom,
        'clientAdresse': devis.clientAdresse,
        'clientEmail': devis.clientEmail,
        'devise': devis.devise,
        'signaturePngBase64': devis.signaturePngBase64,
        'conditionsPaiement': devis.conditionsPaiement,
        'notes': devis.notes,
        'lignes': devis.lignes
            .map((l) => {
                  'id': l.id,
                  'description': l.description,
                  'quantite': l.quantite,
                  'prixUnitaireHT': l.prixUnitaireHT,
                  'tauxTVA': l.tauxTVA,
                  'remisePourcent': l.remisePourcent,
                })
            .toList(),
        'misAJourLe': FieldValue.serverTimestamp(),
      };

  Devis _devisDepuisFirestore(String id, Map<String, dynamic> data) {
    return Devis(
      id: id,
      numero: data['numero'] ?? '',
      date: (data['date'] as Timestamp?)?.toDate() ?? DateTime.now(),
      clientNom: data['clientNom'] ?? '',
      clientAdresse: data['clientAdresse'] ?? '',
      clientEmail: data['clientEmail'] ?? '',
      devise: data['devise'] ?? 'EUR',
      signaturePngBase64: data['signaturePngBase64'],
      conditionsPaiement: data['conditionsPaiement'] ?? '',
      notes: data['notes'] ?? '',
      lignes: (data['lignes'] as List<dynamic>? ?? [])
          .map((l) => LigneDevis(
                id: l['id'],
                description: l['description'] ?? '',
                quantite: (l['quantite'] ?? 0).toDouble(),
                prixUnitaireHT: (l['prixUnitaireHT'] ?? 0).toDouble(),
                tauxTVA: (l['tauxTVA'] ?? 20.0).toDouble(),
                remisePourcent: (l['remisePourcent'] ?? 0).toDouble(),
              ))
          .toList(),
    );
  }

  // ---------------- Clients (carnet d'adresses) ----------------

  Future<void> sauvegarderClient(String id, Map<String, dynamic> data) {
    return _clientsCol.doc(id).set(data, SetOptions(merge: true));
  }

  Stream<List<Map<String, dynamic>>> ecouterClients() {
    return _clientsCol.snapshots().map(
          (snap) => snap.docs.map((d) => {'id': d.id, ...d.data()}).toList(),
        );
  }

  // ---------------- Suppression totale (RGPD / suppression de compte) ----------------

  Future<void> supprimerToutesLesDonnees() async {
    final batch = _db.batch();
    for (final col in [_devisCol, _facturesCol, _clientsCol]) {
      final docs = await col.get();
      for (final d in docs.docs) {
        batch.delete(d.reference);
      }
    }
    batch.delete(_entrepriseDoc);
    await batch.commit();
  }
}
