# Dossier de maintenance — Pupitre Patrimoine

## Architecture
- `index.html` : coquille de la page (ne bouge quasiment jamais).
- `assets/app.js` : l'application COMPILÉE (générée, ne pas éditer à la main).
- `src/app.jsx` : LE code source — interface + moteur de calcul, commenté par sections.
- `src/main.jsx` : point d'entrée (3 lignes).

## Où vivent les données
Dans le navigateur (localStorage, clé `cockpit-v1`) + vos exports JSON.
Le JSON exporté est la sauvegarde de référence : lisible, restaurable, exploitable
dans Excel/Python. Rien ne part sur un serveur.

## Où modifier quoi (dans src/app.jsx)
- Taux, TJM, allocation, dates par défaut : bloc `DEFAULT` (début de fichier).
- Chaîne fiscale CA → IS → flat tax : fonction `compute()` (le moteur, vos formules).
- Référentiels chantier (pièces, catégories, magasins, mots-clés) : constantes
  `CATS / PIECES / THEMES / MAGS / CHANTIER_KW`.
- Historique chantier embarqué : constante `HISTO`.
- Couleurs et polices : objet `T` et `FONT`.
- Voyants de la rampe : tableau `lamps` dans le composant `Cockpit`.

## Recompiler après une modification du code
Installer Node.js (nodejs.org, LTS) une fois, puis dans le dossier :
    npm install
    npx esbuild src/main.jsx --bundle --minify --loader:.jsx=jsx --outfile=assets/app.js
Re-déposer `assets/app.js` (et les sources modifiées) sur GitHub → Vercel redéploie.
Alternative sans effort : ouvrir ce dossier avec Claude Code (ou tout assistant IA)
et demander la modification en français — le code est du React standard.

## Bascule d'année (janvier)
Le Suivi CA embarqué couvre l'année en cours via `MONTH(TODAY())` ; vérifier en
janvier le bloc `DEFAULT.moisFactures` (le remettre à zéro) et exporter la sauvegarde
de clôture de l'année avant toute remise à zéro.

## Procédure de restauration
Nouveau navigateur / PC / téléphone : ouvrir l'URL > Réglages > Importer une
sauvegarde > choisir le dernier JSON. Tout revient.
