// Constructeurs fictifs de l'univers GTA (inspirations bien établies dans la série)

function marque(slug, name, pays, inspiration, summary, specialite) {
  return {
    slug,
    name,
    subtitle: `Constructeur · ${pays}`,
    tags: [pays],
    statut: "confirme",
    infobox: { Type: "Constructeur fictif", Origine: pays, "Inspiré de": inspiration, Spécialité: specialite },
    summary,
    sections: [],
    related: [],
    sources: [{ title: "Wiki GTA (Fandom) – Constructeurs", url: "https://gta.fandom.com/wiki/Manufacturers" }],
  };
}

export default {
  id: "marques",
  title: "Marques",
  singular: "Marque",
  icon: "🏷️",
  intro:
    "Dans GTA, aucune vraie marque : chaque constructeur est une parodie. Voici les marques présentes à Leonida et ce qu'elles imitent. Chaque fiche liste automatiquement ses véhicules.",
  filters: ["États-Unis", "Italie", "Allemagne", "Japon", "Royaume-Uni"],
  entries: [
    marque("vapid", "Vapid", "États-Unis", "Ford", "Le constructeur populaire américain : Dominator, Stanier, Ganado, Aleutian…", "Muscle cars, pick-up, SUV"),
    marque("bravado", "Bravado", "États-Unis", "Dodge / Ram", "Muscle cars et véhicules de police (Banshee, Gauntlet, Buffalo).", "Muscle, police"),
    marque("declasse", "Declasse", "États-Unis", "Chevrolet", "Les américaines classiques et populaires, dont la Tulip.", "Muscle, classiques"),
    marque("albany", "Albany", "États-Unis", "Cadillac / Buick / Lincoln", "Le luxe à l'américaine (Buccaneer, Emperor, Manana).", "Berlines, luxe"),
    marque("invetero", "Invetero", "États-Unis", "Chevrolet Corvette", "Marque dédiée à la Coquette, sportive américaine par excellence.", "Sportives"),
    marque("canis", "Canis", "États-Unis", "Jeep", "Tout-terrain et pick-up robustes (Kamacho, Crawler).", "Tout-terrain"),
    marque("grotti", "Grotti", "Italie", "Ferrari", "Supercars italiennes : Cheetah, Carbonizzare, Furia.", "Supercars"),
    marque("pegassi", "Pegassi", "Italie", "Lamborghini / Ducati", "Supercars agressives et motos (Tempesta, Infernus, Zorrusso).", "Supercars, motos"),
    marque("pfister", "Pfister", "Allemagne", "Porsche", "Sportives allemandes : Comet, Astron.", "Sportives, SUV"),
    marque("benefactor", "Benefactor", "Allemagne", "Mercedes-Benz", "Luxe et robustesse : Schafter, Dubsta.", "Berlines, SUV"),
    marque("ubermacht", "Übermacht", "Allemagne", "BMW", "Berlines et coupés sportifs allemands (Sentinel, Cypher).", "Berlines sportives"),
    marque("annis", "Annis", "Japon", "Nissan", "Icônes JDM, à commencer par l'Elegy.", "Sportives JDM"),
    marque("maibatsu", "Maibatsu", "Japon", "Mitsubishi", "Penumbra et la moto Sanchez.", "Sportives, motos"),
    marque("dinka", "Dinka", "Japon", "Honda", "Voitures et motos japonaises (Blista, Enduro, Chavos).", "Compactes, motos"),
    marque("nagasaki", "Nagasaki", "Japon", "Kawasaki", "Motos sportives (Carbon RS).", "Motos"),
    marque("shitzu", "Shitzu", "Japon", "Yamaha / Suzuki", "Motos et bateaux, dont le hors-bord Squalo.", "Motos, bateaux"),
    marque("karin", "Karin", "Japon", "Toyota", "Voitures japonaises fiables et populaires.", "Compactes, tout-terrain"),
    marque("obey", "Obey", "Allemagne", "Audi", "Sportives et berlines premium (8F Drafter).", "Premium"),
    marque("progen", "Progen", "Royaume-Uni", "McLaren", "Hypercars britanniques (Emerus).", "Hypercars"),
    marque("crest", "Crest", "États-Unis", "Marques de bateaux de loisir", "Petites embarcations de loisir, dont le kayak.", "Bateaux"),
  ],
};
