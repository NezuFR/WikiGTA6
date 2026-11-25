# WikiGTA6

L'encyclopédie francophone de **Grand Theft Auto VI** : personnages, lieux de Leonida, véhicules, marques, armes, organisations, gameplay, musique, éditions et chronologie. Tous les articles sont reliés entre eux.

> Site de fans non officiel, sans lien avec Rockstar Games ni Take-Two Interactive.

## Structure

```
data/          ← tout le contenu du wiki (un fichier par catégorie)
assets/        ← style.css, app.js (recherche + filtres), favicon
config.mjs     ← nom du site, URL, nom de domaine
build.mjs      ← générateur : transforme data/ en pages HTML
docs/          ← site généré (servi par GitHub Pages) — ne pas modifier à la main
```

## Ajouter ou modifier un article

1. Ouvre le fichier de la catégorie dans `data/` (ex. `data/personnages.mjs`).
2. Copie une fiche existante et modifie-la (`slug`, `name`, `infobox`, `summary`, `sections`, `sources`…).
3. Pour faire un lien vers un autre article : `[[personnages/jason-duval]]` ou `[[personnages/jason-duval|Jason]]`.
4. Régénère le site :

```bash
node build.mjs
```

Le générateur refuse de construire s'il trouve un lien cassé, pour que le wiki reste propre. Aucune dépendance à installer : Node.js 18+ suffit.

Chaque fiche a un niveau de fiabilité : `officiel` (Rockstar), `confirme` (vu en jeu / presse), `communaute` (à vérifier).

## Mise en ligne (GitHub Pages)

Dans le dépôt GitHub : **Settings → Pages → Source : Deploy from a branch → Branch : `main` / dossier `/docs` → Save**.
Le site sera en ligne sur `https://nezufr.github.io/WikiGTA6/`.

## Brancher un nom de domaine

1. Dans `config.mjs` : `customDomain: "tondomaine.fr"`, `siteUrl: "https://tondomaine.fr"`, `basePath: "/"`.
2. `node build.mjs`, puis commit + push.
3. Chez ton registrar, ajoute les enregistrements DNS de GitHub Pages (4 enregistrements `A` vers 185.199.108.153 / 109.153 / 110.153 / 111.153, ou un `CNAME` `www` vers `nezufr.github.io`).
4. Dans **Settings → Pages**, coche **Enforce HTTPS**.
