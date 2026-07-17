import 'dart:typed_data';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_storage/firebase_storage.dart';

/// Chaque fichier est stocké sous users/{uid}/... exactement comme
/// Firestore, pour que les règles Storage suivent la même logique simple
/// (voir firebase/storage.rules) : un utilisateur ne peut écrire/lire que
/// dans son propre dossier.
class StorageService {
  final FirebaseStorage _storage = FirebaseStorage.instance;

  String get _uid {
    final uid = FirebaseAuth.instance.currentUser?.uid;
    if (uid == null) {
      throw StateError('Aucun utilisateur connecté — impossible d\'uploader.');
    }
    return uid;
  }

  Future<String> uploaderLogo(Uint8List bytes) async {
    final ref = _storage.ref('users/$_uid/entreprise/logo.png');
    await ref.putData(bytes, SettableMetadata(contentType: 'image/png'));
    return ref.getDownloadURL();
  }

  Future<String> uploaderSignature(Uint8List bytes, {String? devisId}) async {
    final nomFichier = devisId != null ? 'signature_$devisId.png' : 'signature_defaut.png';
    final ref = _storage.ref('users/$_uid/signatures/$nomFichier');
    await ref.putData(bytes, SettableMetadata(contentType: 'image/png'));
    return ref.getDownloadURL();
  }

  Future<void> supprimerTousLesFichiers() async {
    final dossier = _storage.ref('users/$_uid');
    final liste = await dossier.listAll();
    for (final item in liste.items) {
      await item.delete();
    }
    for (final prefixe in liste.prefixes) {
      final sousListe = await prefixe.listAll();
      for (final item in sousListe.items) {
        await item.delete();
      }
    }
  }
}
