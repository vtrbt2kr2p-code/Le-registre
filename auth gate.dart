import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'core/auth/auth_service.dart';
import 'core/firestore/firestore_repository.dart';
import 'features/entreprise/creer_entreprise_screen.dart';

/// Racine de navigation. Logique :
/// 1. Pas connecté -> écran de connexion/inscription (à brancher, cf AuthService)
/// 2. Connecté mais entreprise incomplète -> CreerEntrepriseScreen (obligatoire)
/// 3. Connecté + entreprise complète -> l'app (accueil)
///
/// C'est ce widget qui répond au point 5 du cahier des charges :
/// "Lors de la première inscription, l'utilisateur est automatiquement
/// redirigé vers Créer mon entreprise".
class AuthGate extends StatelessWidget {
  final Widget accueilApp;
  final Widget ecranConnexion;

  const AuthGate({
    super.key,
    required this.accueilApp,
    required this.ecranConnexion,
  });

  @override
  Widget build(BuildContext context) {
    final auth = AuthService();

    return StreamBuilder<User?>(
      stream: auth.utilisateurCourant,
      builder: (context, snapshotAuth) {
        if (snapshotAuth.connectionState == ConnectionState.waiting) {
          return const Scaffold(body: Center(child: CircularProgressIndicator()));
        }

        if (!snapshotAuth.hasData) {
          return ecranConnexion;
        }

        // Utilisateur connecté -> on vérifie si l'entreprise est configurée.
        final repo = FirestoreRepository();
        return StreamBuilder(
          stream: repo.ecouterEntreprise(),
          builder: (context, snapshotEntreprise) {
            if (snapshotEntreprise.connectionState == ConnectionState.waiting) {
              return const Scaffold(body: Center(child: CircularProgressIndicator()));
            }

            final entreprise = snapshotEntreprise.data;
            if (entreprise == null || !entreprise.estComplete) {
              return CreerEntrepriseScreen(
                onTermine: () {
                  // Le StreamBuilder se met à jour automatiquement dès que
                  // Firestore confirme l'écriture -> pas de navigation
                  // manuelle nécessaire, l'écran change tout seul.
                },
              );
            }

            return accueilApp;
          },
        );
      },
    );
  }
}
