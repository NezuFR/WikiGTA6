// Véhicules de GTA VI
// Rockstar n'a jamais publié de liste officielle complète : chaque fiche indique son niveau de confirmation.

const SRC_RS = { title: "Rockstar Games – Éditions de GTA VI", url: "https://www.rockstargames.com/VI" };
const SRC_HELPHUB = { title: "GTA6 Help Hub – Véhicules nommés par Rockstar", url: "https://gta6helphub.com/guides/gta-6-cars/" };
const SRC_INTEL = { title: "GTA Intel – Véhicules confirmés", url: "https://gtaintel.com/news/gta-6-confirmed-vehicles-encyclopedia" };
const SRC_DRIFFLE = { title: "Driffle – Véhicules nouveaux et de retour", url: "https://driffle.com/blog/gta-6-vehicles-list/" };
const SRC_BEEBOM = { title: "Beebom – Liste des voitures de GTA 6", url: "https://beebom.com/gta-6-cars/" };

function vehicule(slug, name, marque, categorie, inspiration, summary, opts = {}) {
  const infobox = {
    Marque: marque ? `[[marques/${marque}]]` : "—",
    Catégorie: categorie,
  };
  if (inspiration) infobox["Inspiré de"] = inspiration;
  if (opts.obtention) infobox["Obtention"] = opts.obtention;
  if (opts.serie) infobox["Déjà dans la série"] = opts.serie;
  return {
    slug,
    name,
    subtitle: categorie,
    tags: [categorie],
    statut: opts.statut || "confirme",
    color: opts.color,
    infobox,
    summary,
    sections: opts.sections || [],
    related: [...(marque ? [`marques/${marque}`] : []), ...(opts.related || [])],
    sources: opts.sources || [SRC_INTEL],
  };
}

export default {
  id: "vehicules",
  title: "Véhicules",
  singular: "Véhicule",
  icon: "🚗",
  intro:
    "Voitures de sport, muscle cars, SUV, motos, bateaux et hydroglisseurs. Rockstar n'a pas publié de liste complète : chaque fiche précise si le véhicule a été nommé officiellement ou repéré dans le jeu et les trailers.",
  filters: ["Sportive", "Super-sportive", "Classique", "Muscle", "SUV", "Tout-terrain", "Berline", "Moto", "Bateau", "Service"],
  entries: [
    // --- Nommés officiellement par Rockstar (éditions) ---
    vehicule("vapid-stanier-55", "Vapid Stanier '55", "vapid", "Classique", "Ford Crown Victoria (années 50)",
      "Berline bicolore jaune et blanche des années 50, offerte avec le Vintage Vice City Pack.",
      { statut: "officiel", color: ["#ffd166", "#ffffff"], obtention: "[[editions/vintage-vice-city-pack|Vintage Vice City Pack]] (avec garage)", related: ["editions/vintage-vice-city-pack"], sources: [SRC_RS, SRC_HELPHUB] }),
    vehicule("grotti-cheetah-95", "Grotti Cheetah '95", "grotti", "Super-sportive", "Ferrari Testarossa / F512",
      "Supercar rétro du milieu des années 90, hommage direct à la Cheetah du Vice City original.",
      { statut: "officiel", color: ["#ff4d4d", "#ff8a3d"], obtention: "[[editions/ultimate-edition|Ultimate Edition]]", serie: "GTA III, Vice City, San Andreas, V", related: ["editions/ultimate-edition"], sources: [SRC_RS, SRC_INTEL] }),
    vehicule("vapid-dominator-buggy-67", "Vapid Dominator Buggy '67", "vapid", "Tout-terrain", "Ford Mustang 1967 transformée en buggy",
      "Muscle car des années 60 transformée en buggy de plage.",
      { statut: "officiel", obtention: "[[editions/ultimate-edition|Ultimate Edition]]", related: ["editions/ultimate-edition", "vehicules/vapid-dominator"], sources: [SRC_RS, SRC_INTEL] }),
    vehicule("vapid-ganado", "Vapid Ganado", "vapid", "Tout-terrain", "Ford Bronco",
      "Pick-up / 4x4 proposé en version rétro parmi les véhicules de la planque de Jason.",
      { statut: "officiel", obtention: "[[editions/ultimate-edition|Ultimate Edition]] (planque de Jason)", related: ["editions/ultimate-edition"], sources: [SRC_HELPHUB] }),
    vehicule("dinka-enduro", "Dinka Enduro", "dinka", "Moto", "Honda XR (enduro)",
      "Moto tout-terrain fournie avec la planque de Jason.",
      { statut: "officiel", obtention: "[[editions/ultimate-edition|Ultimate Edition]] (planque de Jason)", serie: "GTA V", related: ["editions/ultimate-edition"], sources: [SRC_HELPHUB] }),
    vehicule("crest-kayak", "Crest Kayak", "crest", "Bateau", null,
      "Kayak orange avec lequel Jason pagaie dans les images officielles.",
      { statut: "officiel", obtention: "[[editions/ultimate-edition|Ultimate Edition]] (planque de Jason)", related: ["editions/ultimate-edition", "gameplay/activites"], sources: [SRC_HELPHUB] }),
    vehicule("shitzu-squalo", "Shitzu Squalo", "shitzu", "Bateau", "Hors-bord de type Formula / Fountain",
      "Hors-bord rose et bleu aperçu traversant la baie de nuit, skyline de Vice City en arrière-plan.",
      { statut: "officiel", color: ["#ff6ad5", "#00a3ff"], obtention: "[[editions/ultimate-edition|Ultimate Edition]]", serie: "GTA Vice City, V", related: ["editions/ultimate-edition"], sources: [SRC_RS, SRC_INTEL] }),

    // --- Repérés dans les trailers / le jeu ---
    vehicule("invetero-coquette", "Invetero Coquette", "invetero", "Sportive", "Chevrolet Corvette",
      "Sportive emblématique de la série, aperçue dans le deuxième trailer.",
      { serie: "GTA IV, V", sources: [SRC_BEEBOM] }),
    vehicule("invetero-coquette-d10", "Invetero Coquette D10", "invetero", "Sportive", "Chevrolet Corvette C8",
      "Version moderne à moteur central de la Coquette, déjà connue de GTA Online.", { serie: "GTA Online" }),
    vehicule("bravado-banshee", "Bravado Banshee", "bravado", "Sportive", "Dodge Viper",
      "Roadster décapotable associé à Lucia dans plusieurs listes de véhicules.", { serie: "GTA III à V", sources: [SRC_DRIFFLE] }),
    vehicule("pfister-comet", "Pfister Comet", "pfister", "Sportive", "Porsche 911",
      "La sportive allemande de la série, ici aussi en version cabriolet (Comet S2 Cabrio).", { serie: "Depuis GTA Vice City" }),
    vehicule("annis-elegy", "Annis Elegy", "annis", "Sportive", "Nissan Skyline GT-R",
      "La référence JDM de GTA, présente en version Retro Custom.", { serie: "San Andreas, IV, V", sources: [SRC_DRIFFLE] }),
    vehicule("maibatsu-penumbra", "Maibatsu Penumbra", "maibatsu", "Sportive", "Mitsubishi Eclipse",
      "Coupé sportif japonais de retour, notamment en version FF.", { serie: "GTA V", sources: [SRC_BEEBOM] }),
    vehicule("pegassi-tempesta", "Pegassi Tempesta", "pegassi", "Super-sportive", "Lamborghini Huracán",
      "Supercar italienne de retour de GTA Online, parfaite pour Ocean Drive.", { serie: "GTA Online" }),
    vehicule("grotti-carbonizzare", "Grotti Carbonizzare", "grotti", "Sportive", "Ferrari California",
      "Cabriolet italien de retour de GTA V.", { serie: "GTA V" }),
    vehicule("benefactor-schafter-v12", "Benefactor Schafter V12", "benefactor", "Berline", "Mercedes-Benz Classe S / CLS",
      "Berline de luxe allemande à moteur V12.", { serie: "GTA IV, V", sources: [SRC_BEEBOM] }),
    vehicule("vapid-dominator", "Vapid Dominator", "vapid", "Muscle", "Ford Mustang",
      "La muscle car star de la série, déclinée en plusieurs générations (ASP, GTX…).", { serie: "GTA IV, V", sources: [SRC_DRIFFLE] }),
    vehicule("bravado-gauntlet-hellfire", "Bravado Gauntlet Hellfire", "bravado", "Muscle", "Dodge Challenger SRT Hellcat",
      "Muscle car moderne aperçue dans la circulation des trailers.", { serie: "GTA Online" }),
    vehicule("albany-buccaneer", "Albany Buccaneer Custom", "albany", "Muscle", "Buick Riviera",
      "Muscle car customisée aperçue en ville.", { serie: "Depuis GTA III" }),
    vehicule("declasse-tulip", "Declasse Tulip M-100", "declasse", "Muscle", "Chevrolet Monte Carlo",
      "Coupé américain au style « donk », très présent dans la culture auto de Leonida.", { serie: "GTA Online" }),
    vehicule("canis-kamacho", "Canis Kamacho", "canis", "Tout-terrain", "Toyota Hilux / Jeep Gladiator",
      "Pick-up tout-terrain taillé pour les pistes du Mont Kalaga.", { serie: "GTA Online", related: ["lieux/mount-kalaga"] }),
    vehicule("benefactor-dubsta", "Benefactor Dubsta", "benefactor", "SUV", "Mercedes-Benz Classe G",
      "SUV de luxe cubique, de retour.", { serie: "GTA IV, V", sources: [SRC_DRIFFLE] }),
    vehicule("vapid-aleutian", "Vapid Aleutian", "vapid", "SUV", "Ford Expedition",
      "Grand SUV américain de famille.", { sources: [SRC_DRIFFLE] }),
    vehicule("pfister-astron", "Pfister Astron", "pfister", "SUV", "Porsche Macan",
      "SUV compact premium.", { sources: [SRC_DRIFFLE] }),
    vehicule("nagasaki-carbon-rs", "Nagasaki Carbon RS", "nagasaki", "Moto", "Kawasaki Ninja / Ducati",
      "Moto sportive de retour de GTA IV et V.", { serie: "GTA IV, V" }),
    vehicule("maibatsu-sanchez", "Maibatsu Sanchez", "maibatsu", "Moto", "Moto de cross",
      "La moto de cross culte de la série, idéale hors des sentiers battus.", { serie: "Depuis GTA Vice City" }),
    vehicule("airboat", "Hydroglisseur (airboat)", null, "Bateau", "Airboats des Everglades",
      "Le moyen de transport roi des Grassrivers, propulsé par une grande hélice aérienne.",
      { color: ["#3ddc97", "#00a3ff"], related: ["lieux/grassrivers"], sources: [{ title: "VideoGamer – Régions de GTA 6", url: "https://www.videogamer.com/?p=1162335" }] }),
    vehicule("voiture-de-police", "Voitures de police", "bravado", "Service", "Dodge Charger / Durango de police",
      "La police de Leonida roule notamment en Bravado (Buffalo, Gresley). Elle dispose aussi d'hélicoptères.",
      { related: ["gameplay/systeme-de-recherche"], sources: [SRC_BEEBOM] }),
  ],
};
