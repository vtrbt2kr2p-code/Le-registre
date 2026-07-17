import 'package:firebase_auth/firebase_auth.dart';

/// Centralise toute l'authentification. Aujourd'hui : email + mot de passe.
/// Pour ajouter Google/Apple/Microsoft plus tard, il suffira d'ajouter des
/// méthodes ici (`signInWithGoogle()` etc.) — aucun autre fichier de l'app
/// n'a besoin de connaître le détail du fournisseur utilisé.
class AuthService {
  final FirebaseAuth _auth = FirebaseAuth.instance;

  Stream<User?> get utilisateurCourant => _auth.authStateChanges();
  User? get utilisateur => _auth.currentUser;
  bool get estConnecte => _auth.currentUser != null;

  Future<UserCredential> inscription({
    required String email,
    required String motDePasse,
  }) async {
    final credential = await _auth.createUserWithEmailAndPassword(
      email: email.trim(),
      password: motDePasse,
    );
    // Email de vérification — recommandé avant de laisser l'utilisateur
    // utiliser pleinement l'app (facultatif à activer selon ta politique).
    await credential.user?.sendEmailVerification();
    return credential;
  }

  Future<UserCredential> connexion({
    required String email,
    required String motDePasse,
  }) {
    return _auth.signInWithEmailAndPassword(
      email: email.trim(),
      password: motDePasse,
    );
  }

  Future<void> reinitialiserMotDePasse(String email) {
    return _auth.sendPasswordResetEmail(email: email.trim());
  }

  Future<void> deconnexion() => _auth.signOut();

  /// Suppression de compte — nécessaire pour le paramètre "Suppression du
  /// compte" du cahier des charges. Supprime AUSSI toutes les données
  /// Firestore/Storage associées (voir FirestoreRepository.supprimerToutesLesDonnees).
  Future<void> supprimerCompte() async {
    final user = _auth.currentUser;
    if (user == null) return;
    await user.delete();
  }

  /// Traduit les erreurs Firebase en messages compréhensibles, à adapter
  /// avec le système d'i18n du module 7 (FR/EN).
  String messageErreur(FirebaseAuthException e) {
    switch (e.code) {
      case 'email-already-in-use':
        return 'Un compte existe déjà avec cet email.';
      case 'invalid-email':
        return 'Adresse email invalide.';
      case 'weak-password':
        return 'Le mot de passe est trop faible (8 caractères minimum).';
      case 'user-not-found':
      case 'wrong-password':
      case 'invalid-credential':
        return 'Email ou mot de passe incorrect.';
      case 'too-many-requests':
        return 'Trop de tentatives. Réessaie dans quelques minutes.';
      case 'requires-recent-login':
        return 'Pour cette action, reconnecte-toi puis réessaie.';
      default:
        return 'Une erreur est survenue (${e.code}).';
    }
  }
}
