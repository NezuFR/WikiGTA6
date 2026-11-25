// Générateur du site statique WikiGTA6
// Usage : node build.mjs   → génère le site dans ./docs (servi par GitHub Pages)
import { mkdir, writeFile, rm, cp, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import config from "./config.mjs";

const ORDER = ["personnages", "lieux", "vehicules", "marques", "armes", "organisations", "gameplay", "musique", "editions", "chronologie"];
const OUT = "docs";

const cats = [];
for (const id of ORDER) cats.push((await import(`./data/${id}.mjs`)).default);
const catById = Object.fromEntries(cats.map((c) => [c.id, c]));
const entryByKey = {};
for (const c of cats) for (const e of c.entries) {
  const key = `${c.id}/${e.slug}`;
  if (entryByKey[key]) throw new Error(`Doublon : ${key}`);
  entryByKey[key] = { ...e, cat: c };
}

// ---------- utilitaires ----------
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const errors = [];
let currentPage = "";
const backlinks = {}; // key -> Set(keys)

function hrefFor(target, root) {
  if (catById[target]) return `${root}${target}/`;
  return `${root}${target}/`;
}
function labelFor(target) {
  if (catById[target]) return catById[target].title;
  return entryByKey[target]?.name ?? target;
}
// Convertit [[cat/slug|texte]] en liens, après échappement HTML
function rich(text, root) {
  return esc(text).replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, label) => {
    target = target.trim();
    if (!catById[target] && !entryByKey[target]) {
      errors.push(`${currentPage} → lien cassé [[${target}]]`);
      return label || target;
    }
    if (entryByKey[target] && currentPage && currentPage !== target) {
      (backlinks[target] ??= new Set()).add(currentPage);
    }
    return `<a href="${hrefFor(target, root)}">${label ? label : esc(labelFor(target))}</a>`;
  });
}
const plain = (text) => String(text).replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, t, l) => l || labelFor(t.trim()));
const initials = (name) => name.replace(/[^\p{L}\p{N} ]/gu, " ").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
const grad = (e) => {
  const [a, b] = e.color || e.cat?.color || ["#ff2d95", "#7b5cff"];
  return `background:linear-gradient(135deg,${a},${b})`;
};
const STATUT = {
  officiel: ["Officiel", "Présenté par Rockstar Games"],
  confirme: ["Confirmé", "Vu en jeu ou largement rapporté par la presse"],
  communaute: ["À vérifier", "Information de la communauté, non confirmée"],
};
const badge = (s) => {
  const [l, t] = STATUT[s] || STATUT.confirme;
  return `<span class="badge badge-${s}" title="${esc(t)}">${l}</span>`;
};

// Première passe : collecte des rétroliens (on rend tout une fois à blanc)
for (const [key, e] of Object.entries(entryByKey)) {
  currentPage = key;
  Object.values(e.infobox || {}).forEach((v) => rich(v, ""));
  (e.sections || []).forEach((s) => s.body.forEach((p) => rich(p, "")));
  rich(e.summary, "");
  for (const r of e.related || []) {
    if (!catById[r] && !entryByKey[r]) errors.push(`${key} → related cassé "${r}"`);
    else if (entryByKey[r]) (backlinks[r] ??= new Set()).add(key);
  }
}
if (errors.length) {
  console.error("Erreurs de liens :\n" + [...new Set(errors)].join("\n"));
  process.exit(1);
}

// ---------- gabarit ----------
function layout({ title, description, root, body, canonical, active }) {
  const nav = cats
    .map((c) => `<a class="nav-link${active === c.id ? " active" : ""}" href="${root}${c.id}/"><span>${c.icon}</span>${esc(c.title)}<em>${c.entries.length}</em></a>`)
    .join("");
  const fullTitle = title ? `${title} — ${config.siteName}` : `${config.siteName} — ${config.tagline}`;
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${config.siteUrl}${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${config.siteName}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${config.siteUrl}${canonical}">
<meta name="twitter:card" content="summary">
<meta name="theme-color" content="#0b0716">
<link rel="icon" href="${root}assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${root}assets/style.css">
</head>
<body data-root="${root}">
<header class="topbar">
  <button class="menu-btn" aria-label="Menu" onclick="document.body.classList.toggle('nav-open')">☰</button>
  <a class="logo" href="${root}"><span class="logo-wiki">Wiki</span><span class="logo-gta">GTA6</span></a>
  <div class="search">
    <input id="search" type="search" placeholder="Rechercher un personnage, un lieu, une voiture…" autocomplete="off" aria-label="Rechercher">
    <kbd>/</kbd>
    <div id="search-results" class="search-results" hidden></div>
  </div>
</header>
<div class="shell">
  <nav class="sidebar">
    <a class="nav-link${active === "home" ? " active" : ""}" href="${root}"><span>🏠</span>Accueil</a>
    <div class="nav-title">Encyclopédie</div>
    ${nav}
    <div class="nav-title">Le site</div>
    <a class="nav-link${active === "a-propos" ? " active" : ""}" href="${root}a-propos/"><span>ℹ️</span>À propos &amp; contribuer</a>
  </nav>
  <main class="content">
${body}
  </main>
</div>
<footer class="footer">
  <p><strong>${config.siteName}</strong> est un site de fans non officiel. Il n'est ni affilié, ni approuvé, ni sponsorisé par Rockstar Games ou Take-Two Interactive. Grand Theft Auto et les noms associés sont des marques de leurs propriétaires respectifs.</p>
  <p>Textes rédigés par la communauté ${config.siteName}. <a href="${root}a-propos/">À propos</a> · <a href="${config.repoUrl}">GitHub</a></p>
</footer>
<script src="${root}assets/search-index.js"></script>
<script src="${root}assets/app.js"></script>
</body>
</html>`;
}

function card(e, root) {
  const key = `${e.cat.id}/${e.slug}`;
  return `<a class="card" href="${root}${key}/" data-tags="${esc((e.tags || []).join("|"))}">
  <div class="card-art" style="${grad(e)}"><span>${esc(initials(e.name))}</span></div>
  <div class="card-body"><h3>${esc(e.name)}</h3><p class="card-sub">${esc(e.subtitle || "")}</p><p class="card-sum">${esc(plain(e.summary))}</p></div>
</a>`;
}

// ---------- pages ----------
const pages = []; // {path, html}
const sitemap = [];
function addPage(rel, html) {
  pages.push({ rel, html });
  sitemap.push(rel);
}

// Accueil
{
  const root = "./";
  const total = Object.keys(entryByKey).length;
  const featured = ["personnages/lucia-caminos", "personnages/jason-duval", "lieux/vice-city", "lieux/leonida-keys", "vehicules/grotti-cheetah-95", "gameplay/systeme-de-recherche"].map((k) => entryByKey[k]);
  const timeline = catById.chronologie.entries.slice(-4).reverse();
  const body = `
<section class="hero">
  <div class="hero-inner">
    <p class="eyebrow">L'encyclopédie francophone de Grand Theft Auto VI</p>
    <h1>Bienvenue à <span class="grad-text">Leonida</span></h1>
    <p class="lead">Personnages, lieux, véhicules, armes, mécaniques de jeu et chronologie : tout l'univers de GTA VI, organisé et relié. <strong>${total} articles</strong> et ça continue.</p>
    <div class="hero-stats">
      <div><b>19 nov. 2026</b><span>Sortie PS5 / Xbox Series</span></div>
      <div><b>99</b><span>Metacritic</span></div>
      <div><b>6</b><span>Régions</span></div>
      <div><b>170+</b><span>Espèces animales</span></div>
    </div>
  </div>
</section>
<h2 class="section-title">Explorer le wiki</h2>
<div class="cat-grid">
${cats.map((c) => `<a class="cat-tile" href="${root}${c.id}/"><span class="cat-icon">${c.icon}</span><b>${esc(c.title)}</b><em>${c.entries.length} articles</em></a>`).join("\n")}
</div>
<h2 class="section-title">À la une</h2>
<div class="cards">${featured.map((e) => card(e, root)).join("\n")}</div>
<h2 class="section-title">Dernières actualités</h2>
<ul class="timeline">
${timeline.map((e) => `<li><time>${esc(e.date)}</time><a href="${root}chronologie/${e.slug}/">${esc(e.name)}</a><p>${esc(plain(e.summary))}</p></li>`).join("\n")}
</ul>`;
  addPage("", layout({ title: "", description: `${config.siteName} : l'encyclopédie de GTA VI. Personnages, lieux de Leonida et Vice City, véhicules, armes, gameplay et chronologie.`, root, body, canonical: "/", active: "home" }));
}

// Catégories
for (const c of cats) {
  const root = "../";
  const usedTags = [...new Set(c.entries.flatMap((e) => e.tags || []))];
  const filters = (c.filters || []).filter((f) => usedTags.includes(f));
  const list = c.ordered
    ? `<ul class="timeline">${c.entries.map((e) => `<li><time>${esc(e.date)}</time><a href="${root}${c.id}/${e.slug}/">${esc(e.name)}</a> ${badge(e.statut)}<p>${esc(plain(e.summary))}</p></li>`).join("\n")}</ul>`
    : `<div class="cards">${c.entries.map((e) => card({ ...e, cat: c }, root)).join("\n")}</div>`;
  const body = `
<nav class="crumbs"><a href="${root}">Accueil</a> › <span>${esc(c.title)}</span></nav>
<h1 class="page-title">${c.icon} ${esc(c.title)}</h1>
<p class="lead">${esc(c.intro)}</p>
${filters.length && !c.ordered ? `<div class="filters"><button class="chip active" data-filter="*">Tous (${c.entries.length})</button>${filters.map((f) => `<button class="chip" data-filter="${esc(f)}">${esc(f)} (${c.entries.filter((e) => e.tags?.includes(f)).length})</button>`).join("")}</div>` : ""}
${list}`;
  addPage(`${c.id}/`, layout({ title: c.title, description: c.intro, root, body, canonical: `/${c.id}/`, active: c.id }));
}

// Fiches
for (const [key, e] of Object.entries(entryByKey)) {
  const root = "../../";
  currentPage = key;
  const c = e.cat;
  const info = Object.entries(e.infobox || {}).map(([k, v]) => `<tr><th>${esc(k)}</th><td>${rich(v, root)}</td></tr>`).join("");
  const toc = (e.sections || []).length > 1 ? `<div class="toc"><b>Sommaire</b><ol>${e.sections.map((s, i) => `<li><a href="#s${i}">${esc(s.title)}</a></li>`).join("")}</ol></div>` : "";
  const sections = (e.sections || []).map((s, i) => `<section id="s${i}"><h2>${esc(s.title)}</h2>${s.body.map((p) => `<p>${rich(p, root)}</p>`).join("")}</section>`).join("\n");
  const relatedKeys = [...new Set([...(e.related || []), ...[...(backlinks[key] || [])]])].filter((k) => k !== key);
  const relEntries = relatedKeys.filter((k) => entryByKey[k]).map((k) => entryByKey[k]);
  const relCats = relatedKeys.filter((k) => catById[k]);
  // Pour une marque : liste dédiée de ses véhicules
  const brandVehicles = c.id === "marques" ? catById.vehicules.entries.filter((v) => (v.related || []).includes(key)) : [];
  const idx = c.entries.findIndex((x) => x.slug === e.slug);
  const prev = c.entries[idx - 1], next = c.entries[idx + 1];
  const body = `
<nav class="crumbs"><a href="${root}">Accueil</a> › <a href="${root}${c.id}/">${esc(c.title)}</a> › <span>${esc(e.name)}</span></nav>
<article class="article">
  <aside class="infobox">
    <div class="infobox-art" style="${grad(e)}"><span>${esc(initials(e.name))}</span></div>
    <h2>${esc(e.name)}</h2>
    <table>${info}</table>
    <p class="infobox-statut">Fiabilité : ${badge(e.statut)}</p>
  </aside>
  <header>
    <p class="eyebrow">${c.icon} ${esc(c.singular)}${e.subtitle ? " · " + esc(e.subtitle) : ""}</p>
    <h1 class="page-title">${esc(e.name)}</h1>
    <p class="lead">${rich(e.summary, root)}</p>
  </header>
  ${toc}
  ${sections}
  ${brandVehicles.length ? `<section><h2>Véhicules de la marque</h2><div class="cards cards-sm">${brandVehicles.map((v) => card({ ...v, cat: catById.vehicules }, root)).join("")}</div></section>` : ""}
  ${relEntries.length ? `<section><h2>Articles liés</h2><div class="cards cards-sm">${relEntries.filter((r) => !brandVehicles.some((v) => v.slug === r.slug && r.cat.id === "vehicules")).map((r) => card(r, root)).join("")}</div>${relCats.map((k) => `<p><a href="${root}${k}/">Voir toute la catégorie ${esc(catById[k].title)} →</a></p>`).join("")}</section>` : ""}
  ${(e.sources || []).length ? `<section class="sources"><h2>Sources</h2><ol>${e.sources.map((s) => `<li><a href="${esc(s.url)}" rel="nofollow noopener" target="_blank">${esc(s.title)}</a></li>`).join("")}</ol></section>` : ""}
  <nav class="pager">${prev ? `<a href="${root}${c.id}/${prev.slug}/">← ${esc(prev.name)}</a>` : "<span></span>"}${next ? `<a href="${root}${c.id}/${next.slug}/">${esc(next.name)} →</a>` : "<span></span>"}</nav>
  <p class="edit"><a href="${config.repoUrl}/edit/main/data/${c.id}.mjs" target="_blank" rel="noopener">✏️ Proposer une modification de cet article</a></p>
</article>`;
  addPage(`${key}/`, layout({ title: e.name, description: plain(e.summary).slice(0, 160), root, body, canonical: `/${key}/`, active: c.id }));
}

// À propos
{
  const root = "../";
  const body = `
<nav class="crumbs"><a href="${root}">Accueil</a> › <span>À propos</span></nav>
<h1 class="page-title">À propos de ${config.siteName}</h1>
<div class="prose">
<p>${config.siteName} est une encyclopédie de fans consacrée à <em>Grand Theft Auto VI</em>. Chaque article est relié aux autres pour naviguer facilement entre personnages, lieux, véhicules et mécaniques de jeu.</p>
<h2>Fiabilité des informations</h2>
<p>Chaque article affiche un niveau de fiabilité :</p>
<ul>
<li>${badge("officiel")} : présenté directement par Rockstar Games (site officiel, trailers, éditions).</li>
<li>${badge("confirme")} : vu en jeu ou rapporté par plusieurs médias spécialisés.</li>
<li>${badge("communaute")} : information de la communauté qui reste à vérifier.</li>
</ul>
<p>Les sources sont citées en bas de chaque article. Les textes sont rédigés par l'équipe du site et ne reproduisent pas les textes officiels.</p>
<h2>Contribuer</h2>
<p>Le wiki est open source. Tout le contenu se trouve dans le dossier <code>data/</code> du <a href="${config.repoUrl}">dépôt GitHub</a> : un fichier par catégorie. Pour ajouter un article, copiez une fiche existante, modifiez-la et ouvrez une <em>pull request</em>.</p>
<h2>Mentions légales</h2>
<p>Site non officiel, sans lien avec Rockstar Games ni Take-Two Interactive. Grand Theft Auto, GTA, Vice City et les noms associés appartiennent à leurs propriétaires respectifs. Aucune image officielle n'est hébergée sur ce site.</p>
</div>`;
  addPage("a-propos/", layout({ title: "À propos", description: `À propos de ${config.siteName}, fiabilité des sources et comment contribuer.`, root, body, canonical: "/a-propos/", active: "a-propos" }));
}

// ---------- écriture ----------
if (existsSync(OUT)) await rm(OUT, { recursive: true });
await mkdir(OUT, { recursive: true });
await cp("assets", path.join(OUT, "assets"), { recursive: true });
for (const p of pages) {
  const dir = path.join(OUT, p.rel);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), p.html);
}
// 404 (liens absolus vers la racine du site)
const notFound = layout({ title: "Page introuvable", description: "Page introuvable", root: config.basePath, canonical: "/404", body: `<h1 class="page-title">Page introuvable</h1><p class="lead">Cette page n'existe pas (encore). Utilisez la recherche ou <a href="${config.basePath}">revenez à l'accueil</a>.</p>` });
await writeFile(path.join(OUT, "404.html"), notFound);

// Index de recherche
const index = Object.entries(entryByKey).map(([key, e]) => ({ k: key, n: e.name, c: e.cat.title, i: e.cat.icon, s: e.subtitle || "", t: plain(e.summary) + " " + Object.values(e.infobox || {}).map(plain).join(" ") + " " + (e.tags || []).join(" ") }));
index.push(...cats.map((c) => ({ k: c.id, n: c.title, c: "Catégorie", i: c.icon, s: `${c.entries.length} articles`, t: c.intro })));
await writeFile(path.join(OUT, "assets/search-index.js"), `window.WIKI_INDEX=${JSON.stringify(index)};`);

await writeFile(path.join(OUT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap.map((u) => `  <url><loc>${config.siteUrl}/${u}</loc></url>`).join("\n")}\n</urlset>\n`);
await writeFile(path.join(OUT, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${config.siteUrl}/sitemap.xml\n`);
await writeFile(path.join(OUT, ".nojekyll"), "");
if (config.customDomain) await writeFile(path.join(OUT, "CNAME"), config.customDomain + "\n");

console.log(`✔ ${pages.length} pages générées dans ./${OUT} (${Object.keys(entryByKey).length} articles)`);
