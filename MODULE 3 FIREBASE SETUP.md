# Module 3 — Firebase (Auth + Firestore + Storage + Sécurité)

## ⚠️ Étapes à faire TOI-MÊME (je n'ai pas d'accès réseau ici)

### 1. Créer le projet Firebase
1. Va sur https://console.firebase.google.com
2. **Ajouter un projet** → nomme-le (ex: `le-registre`)
3. Désactive Google Analytics si tu ne veux pas encore l'utiliser (tu
   pourras l'activer plus tard pour le dashboard admin du module 5)

### 2. Activer les services nécessaires
Dans la console, active :
- **Authentication** → onglet Sign-in method → active **Email/Password**
- **Firestore Database** → Créer une base → mode production (les règles
  qu'on a écrites gèrent déjà la sécurité)
- **Storage** → Commencer → mode production

### 3. Connecter Flutter au projet
Dans ton terminal, à la racine du projet Flutter :
```bash
dart pub global activate flutterfire_cli
flutterfire configure
```
Ça va :
- te demander de choisir ton projet Firebase créé à l'étape 1
- te demander quelles plateformes activer (Android / iOS / Web / Windows...)
- **générer automatiquement `lib/firebase_options.dart`** avec tes vraies
  clés — ce fichier ne doit PAS être commité s'il contient des clés
  sensibles pour des plateformes serveur (pour Flutter mobile/web, ces
  clés sont normalement publiques et sans risque, mais reste dans le
  `.gitignore` déjà fourni par précaution)

### 4. Déployer les règles de sécurité
```bash
npm install -g firebase-tools
firebase login
firebase init firestore storage
# quand demandé, indique les fichiers : firebase/firestore.rules et firebase/storage.rules
firebase deploy --only firestore:rules,storage:rules
```

### 5. Initialiser Firebase dans `main.dart`
```dart
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  runApp(const MyApp());
}
```

Puis utilise `AuthGate` (fourni) comme `home:` de ton `MaterialApp`.

## Ce qui est livré et prêt à l'emploi
- `core/auth/auth_service.dart` — inscription, connexion, reset mot de
  passe, suppression de compte, messages d'erreur en français
- `core/firestore/firestore_repository.dart` — CRUD + écoute temps réel
  pour entreprise/devis/clients, structuré sous `users/{uid}/...`
- `core/storage/storage_service.dart` — upload logo/signature
- `features/entreprise/entreprise_model.dart` + `creer_entreprise_screen.dart`
  — écran "Créer mon entreprise" affiché automatiquement à l'inscription
- `auth_gate.dart` — routage automatique connexion → onboarding → app
- `firebase/firestore.rules` + `firebase/storage.rules` — chaque
  utilisateur ne voit QUE ses données ; toi (développeur) n'as aucun accès
  aux documents privés, seulement à des compteurs agrégés séparés (module 5)

## Pourquoi c'est sécurisé (point 10 du cahier des charges)
- Toutes les données d'un utilisateur vivent sous `users/{uid}/...`
- Une seule règle Firestore protège tout : `request.auth.uid == userId`
- Aucune règle "admin" ne donne accès aux documents privés — le futur
  dashboard admin (module 5) ne lira que des compteurs anonymes dans une
  collection séparée, écrite uniquement par une Cloud Function
- Les fichiers Storage suivent la même isolation, avec en plus une
  limite de taille et de type sur le logo

## Prochaine étape (module 4)
Brancher `DevisEditController` (module 2) sur `FirestoreRepository` pour
que chaque modification de devis se sauvegarde automatiquement (debounce
~1s pour ne pas spammer Firestore à chaque frappe), et créer l'écran
"Mes devis" / "Mes clients" qui écoute `ecouterDevis()` en temps réel.
