# Pupitre Patrimoine

Cockpit de pilotage financier personnel : revenus SASU + chômage, verdicts « serrer la
ceinture », suivi du chantier de rénovation (352 articles d'historique embarqués),
import CSV BoursoBank, courbe de fortune par composante. Données 100 % locales
(navigateur) avec export/import JSON.

## Mise en ligne (une fois, ~10 minutes, sans ligne de commande)

### 1. GitHub — héberger le code
1. Créez un compte sur github.com (gratuit) si besoin.
2. En haut à droite : **+** > **New repository** > nom `pupitre-patrimoine` >
   **Private** > Create repository.
3. Sur la page du dépôt vide : lien **« uploading an existing file »**.
4. Glissez-déposez TOUT le contenu de ce dossier (index.html, le dossier assets,
   le dossier src, les .md, package.json, .gitignore) > **Commit changes**.

### 2. Vercel — le mettre en ligne
1. Sur vercel.com : **Sign up** > **Continue with GitHub** (il réutilise votre compte).
2. **Add New… > Project** > votre dépôt `pupitre-patrimoine` > **Import**.
3. Framework Preset : **Other**. Ne touchez à rien d'autre > **Deploy**.
4. ~30 secondes plus tard : votre URL `https://pupitre-patrimoine-xxx.vercel.app`.
   Ouvrez-la sur PC et téléphone — c'est votre cockpit, partout.

### 3. Premier démarrage
Onglet **Réglages** : saisissez l'ancrage (soldes du jour) et vérifiez TJM/allocation.
Onglet **Chantier** : bouton « Charger les 352 articles » pour reprendre l'historique.
Puis **Réglages > Exporter la sauvegarde** : votre premier fichier de secours.

## Vie courante
- Pointer un jour facturé : onglet Saisie, un tap.
- Dépenses : import du CSV BoursoBank mensuel (Saisie).
- Sauvegarde : exportez le JSON après chaque grosse saisie (les données vivent dans
  le navigateur — un autre appareil = un autre stockage ; le JSON fait le pont).

## Mettre à jour l'application
Modifiez les fichiers puis re-déposez-les sur GitHub (bouton « Add file » ou en
remplaçant) : Vercel redéploie automatiquement à chaque commit.
Pour modifier le code applicatif, voir MAINTENANCE.md.
