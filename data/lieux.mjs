// Lieux de l'État de Leonida : régions, comtés, quartiers de Vice City et lieux notables

const SRC_MAP = [
  { title: "Rockstar Games – Grand Theft Auto VI", url: "https://www.rockstargames.com/VI" },
  { title: "PC Gamer – La carte de GTA 6", url: "https://www.pcgamer.com/games/grand-theft-auto/gta6-map" },
];
const SRC_ALLTHINGS = { title: "AllThings.How – Toutes les régions de Leonida", url: "https://allthings.how/gta-6-map-locations-every-confirmed-region-in-leonida/" };

// Fabrique compacte pour les petites fiches
function lieu(slug, name, type, parent, inspiration, summary, extra = {}) {
  const infobox = { Type: type };
  if (parent) infobox["Situé dans"] = parent;
  if (inspiration) infobox["Inspiré de"] = inspiration;
  return {
    slug,
    name,
    subtitle: type,
    tags: [type],
    statut: extra.statut || "confirme",
    color: extra.color,
    infobox: { ...infobox, ...(extra.infobox || {}) },
    summary,
    sections: extra.sections || [],
    related: extra.related || [],
    sources: extra.sources || [SRC_ALLTHINGS],
  };
}

export default {
  id: "lieux",
  title: "Lieux",
  singular: "Lieu",
  icon: "🗺️",
  intro:
    "GTA VI se déroule dans l'État fictif de Leonida, inspiré de la Floride. Six grandes régions, plusieurs comtés et des dizaines de quartiers et lieux emblématiques.",
  filters: ["État", "Région", "Comté", "Quartier", "Lieu notable"],
  entries: [
    {
      slug: "leonida",
      name: "État de Leonida",
      subtitle: "L'État du jeu",
      tags: ["État"],
      statut: "officiel",
      color: ["#ff2d95", "#00d4ff"],
      infobox: {
        Type: "État (fictif)",
        "Inspiré de": "Floride (États-Unis)",
        "Ville principale": "[[lieux/vice-city|Vice City]]",
        Régions: "6",
      },
      summary:
        "Leonida est l'État fictif dans lequel se déroule GTA VI. C'est la parodie de la Floride par Rockstar : soleil, marécages, plages, excès et criminalité.",
      sections: [
        {
          title: "Les six régions",
          body: [
            "Rockstar a présenté six régions : [[lieux/vice-city|Vice City]], les [[lieux/leonida-keys|Leonida Keys]], les [[lieux/grassrivers|Grassrivers]], [[lieux/port-gellhorn|Port Gellhorn]], [[lieux/ambrosia|Ambrosia]] et le [[lieux/mount-kalaga|parc national du Mont Kalaga]].",
          ],
        },
        {
          title: "Comtés",
          body: [
            "Le territoire est découpé en comtés : [[lieux/comte-vice-dale|Vice-Dale]], [[lieux/comte-leonard|Leonard]], [[lieux/comte-ambrosia|Ambrosia]], [[lieux/comte-kelly|Kelly]], [[lieux/comte-mariana|Mariana]] et [[lieux/comte-lummox|Lummox]]. Les limites exactes restent à documenter précisément.",
          ],
        },
        {
          title: "Faune",
          body: [
            "Leonida abrite plus de 170 espèces animales, des alligators aux dauphins en passant par les flamants roses (voir [[gameplay/faune|Faune]]).",
          ],
        },
      ],
      related: ["lieux/vice-city", "lieux/leonida-keys", "lieux/grassrivers", "lieux/port-gellhorn", "lieux/ambrosia", "lieux/mount-kalaga"],
      sources: SRC_MAP,
    },

    // ---------- RÉGIONS ----------
    {
      slug: "vice-city",
      name: "Vice City",
      subtitle: "Région · capitale du soleil et du fun",
      tags: ["Région"],
      statut: "officiel",
      color: ["#ff2d95", "#ff8a3d"],
      infobox: {
        Type: "Région / ville",
        "Situé dans": "[[lieux/comte-vice-dale|Comté de Vice-Dale]]",
        "Inspiré de": "Miami",
        Position: "Côte sud-est",
        "Déjà vue dans": "GTA (1997), GTA Vice City (2002), Vice City Stories (2006)",
      },
      summary:
        "Vice City est la grande ville de Leonida, la plus vaste et la plus détaillée du jeu. Néons, hôtels Art déco, plages de sable blanc, port de croisière et vie nocturne.",
      sections: [
        {
          title: "Présentation",
          body: [
            "Retour de la ville culte de GTA Vice City, cette fois modélisée sur le Miami contemporain. Rockstar la présente comme la face sombre de l'endroit le plus ensoleillé d'Amérique.",
            "C'est ici que se concentre la vie nocturne, la scène musicale (voir [[organisations/only-raw-records|Only Raw Records]]) et une bonne partie de l'intrigue.",
          ],
        },
        {
          title: "Quartiers",
          body: [
            "[[lieux/ocean-beach|Ocean Beach]], [[lieux/south-beach|South Beach]], [[lieux/downtown-vice-city|Downtown]], [[lieux/little-cuba|Little Cuba]], [[lieux/la-perle|La Perle]], [[lieux/stockyard|Stockyard]], [[lieux/vice-city-port|VC Port]], [[lieux/vice-beach|Vice Beach]], [[lieux/venetian-islands|Venetian Islands]], [[lieux/rockridge|Rockridge]], [[lieux/washington-beach|Washington Beach]] et l'[[lieux/vice-city-international-airport|aéroport international]].",
          ],
        },
        {
          title: "Lieux notables",
          body: [
            "[[lieux/ocean-view-hotel|Ocean View Hotel]], [[lieux/malibu-club|Malibu Club]], [[lieux/jack-of-hearts|Jack of Hearts]], [[lieux/sahara-arena|Sahara Arena]], [[lieux/vice-city-metro|métro de Vice City]].",
          ],
        },
      ],
      related: ["lieux/leonida", "lieux/comte-vice-dale", "lieux/ocean-beach", "lieux/vice-city-port"],
      sources: [...SRC_MAP, SRC_ALLTHINGS],
    },
    {
      slug: "leonida-keys",
      name: "Leonida Keys",
      subtitle: "Région · archipel tropical",
      tags: ["Région"],
      statut: "officiel",
      color: ["#00d4ff", "#3ddc97"],
      infobox: {
        Type: "Région / archipel",
        "Situé dans": "[[lieux/comte-mariana|Comté de Mariana]]",
        "Inspiré de": "Florida Keys",
        Position: "Sud de Vice City",
      },
      summary:
        "Chapelet d'îles reliées par des ponts au sud de Vice City : eaux turquoise, bateaux, bars de plage… et trafics en tout genre. C'est là que Jason vit et travaille.",
      sections: [
        {
          title: "Présentation",
          body: [
            "Les Keys évoquent les vacances, mais c'est aussi le terrain de jeu des contrebandiers comme [[personnages/brian-heder|Brian Heder]]. L'histoire y débuterait en partie.",
            "Lieux connus : [[lieux/vercetti-estate|Vercetti Estate]], One-Eyed Willie's, Electric Fang Tattoo, Stock 305, Key Lento, Watson Bay et Capri.",
          ],
        },
      ],
      related: ["personnages/jason-duval", "personnages/brian-heder", "lieux/comte-mariana", "lieux/grassrivers"],
      sources: [...SRC_MAP, SRC_ALLTHINGS],
    },
    {
      slug: "grassrivers",
      name: "Grassrivers",
      subtitle: "Région · marécages",
      tags: ["Région"],
      statut: "officiel",
      color: ["#3ddc97", "#1e5f3a"],
      infobox: {
        Type: "Région / zone humide",
        "Situé dans": "[[lieux/comte-mariana|Comté de Mariana]]",
        "Inspiré de": "Everglades",
        Position: "Sud-ouest",
      },
      summary:
        "Immense zone de marais et de mangroves où vivent les alligators — et des prédateurs bien plus dangereux. Loin des regards de la ville, tout y est permis.",
      sections: [
        {
          title: "Présentation",
          body: [
            "On s'y déplace en hydroglisseur ([[vehicules/airboat|airboat]]) ou en buggy des marais. La faune y est particulièrement riche (voir [[gameplay/faune|Faune]]) et la zone sert de refuge aux activités illégales.",
          ],
        },
      ],
      related: ["lieux/leonida-keys", "vehicules/airboat", "gameplay/faune"],
      sources: [...SRC_MAP, SRC_ALLTHINGS],
    },
    {
      slug: "port-gellhorn",
      name: "Port Gellhorn",
      subtitle: "Région · la côte oubliée",
      tags: ["Région"],
      statut: "officiel",
      color: ["#7b5cff", "#2b2d42"],
      infobox: {
        Type: "Région / ville portuaire",
        "Situé dans": "[[lieux/comte-kelly|Comté de Kelly]]",
        "Inspiré de": "Panama City Beach / Panhandle de Floride",
        Position: "Côte ouest",
      },
      summary:
        "Ancienne station balnéaire en déclin sur la côte ouest : motels bon marché, attractions fermées et centres commerciaux vides.",
      sections: [
        {
          title: "Présentation",
          body: [
            "Rockstar la surnomme « la côte oubliée de Leonida ». Là où [[lieux/vice-city|Vice City]] incarne le luxe, Port Gellhorn vit sur les souvenirs de ses années de gloire, autour d'un port industriel encore actif.",
          ],
        },
      ],
      related: ["lieux/ambrosia", "lieux/comte-kelly"],
      sources: [...SRC_MAP, SRC_ALLTHINGS],
    },
    {
      slug: "ambrosia",
      name: "Ambrosia",
      subtitle: "Région · cœur industriel",
      tags: ["Région"],
      statut: "officiel",
      color: ["#ffb400", "#8a5a00"],
      infobox: {
        Type: "Région / ville industrielle",
        "Situé dans": "[[lieux/comte-ambrosia|Comté d'Ambrosia]]",
        "Inspiré de": "Centre de la Floride (région du lac Okeechobee)",
        "Lieu phare": "[[lieux/allied-crystal|Raffinerie Allied Crystal]]",
      },
      summary:
        "Ville industrielle au bord du lac Leonida, dominée par une raffinerie de sucre et contrôlée par un gang de bikers.",
      sections: [
        {
          title: "Présentation",
          body: [
            "La [[lieux/allied-crystal|raffinerie Allied Crystal]] « garde Leonida sucrée », selon Rockstar — même si l'on soupçonne qu'elle ne produit pas que du sucre. Un gang de motards local fait la loi.",
            "C'est ici que commence, d'après Rockstar, « la bataille pour la santé et la richesse ».",
          ],
        },
      ],
      related: ["lieux/lake-leonida", "lieux/allied-crystal", "lieux/port-gellhorn"],
      sources: [...SRC_MAP, SRC_ALLTHINGS],
    },
    {
      slug: "mount-kalaga",
      name: "Parc national du Mont Kalaga",
      subtitle: "Région · nature sauvage",
      tags: ["Région"],
      statut: "officiel",
      color: ["#3ddc97", "#0b3d2e"],
      infobox: {
        Type: "Région / parc national",
        "Situé dans": "[[lieux/comte-lummox|Comté de Lummox]]",
        "Inspiré de": "Nord de la Floride, Providence Canyon (Géorgie)",
        Position: "Frontière nord",
        Activités: "Chasse, pêche, tout-terrain",
      },
      summary:
        "Forêts, canyons et rivières à la frontière nord de Leonida. Rockstar y promet chasse, pêche et pistes tout-terrain.",
      sections: [
        {
          title: "Présentation",
          body: [
            "Le Mont Kalaga est le grand espace sauvage du jeu, l'équivalent du Mont Chiliad de GTA V. Idéal pour la [[gameplay/activites|chasse et la pêche]] ou les virées en [[vehicules/canis-kamacho|4x4]].",
          ],
        },
      ],
      related: ["gameplay/activites", "gameplay/faune", "lieux/comte-lummox"],
      sources: [...SRC_MAP, SRC_ALLTHINGS],
    },

    // ---------- COMTÉS ----------
    lieu("comte-vice-dale", "Comté de Vice-Dale", "Comté", "[[lieux/leonida|Leonida]] (sud-est)", "Comté de Miami-Dade",
      "Comté du sud-est dont Vice City est le chef-lieu.",
      { related: ["lieux/vice-city"], sections: [{ title: "Localités", body: ["Outre [[lieux/vice-city|Vice City]], on y trouve notamment Hamlet, Belville, Catalan Key, Dalton Island, Ekanfinaka, Gloriana Key, Leaf Links, Tequesta Retreat et Starfish Island."] }] }),
    lieu("comte-leonard", "Comté de Leonard", "Comté", "[[lieux/leonida|Leonida]] (nord-est)", "Comté de Broward",
      "Comté du nord-est de Leonida, qui comprend la localité de Waning Sands.", { related: ["lieux/comte-vice-dale"] }),
    lieu("comte-ambrosia", "Comté d'Ambrosia", "Comté", "[[lieux/leonida|Leonida]] (centre)", "Comté de Hendry",
      "Comté central qui englobe la ville d'Ambrosia et le lac Leonida.", { related: ["lieux/ambrosia", "lieux/lake-leonida"] }),
    lieu("comte-kelly", "Comté de Kelly", "Comté", "[[lieux/leonida|Leonida]] (nord-ouest)", "Comtés de Collier / Lee",
      "Comté du nord-ouest où se trouve Port Gellhorn.", { related: ["lieux/port-gellhorn"] }),
    lieu("comte-mariana", "Comté de Mariana", "Comté", "[[lieux/leonida|Leonida]] (sud-ouest)", "Comté de Monroe",
      "Comté du sud-ouest qui couvre les Grassrivers et les Leonida Keys.", { related: ["lieux/grassrivers", "lieux/leonida-keys"] }),
    lieu("comte-lummox", "Comté de Lummox", "Comté", "[[lieux/leonida|Leonida]] (nord)", null,
      "Comté du nord qui contiendrait le parc national du Mont Kalaga. Son nom provient surtout de documents ayant fuité ; à confirmer.",
      { statut: "communaute", related: ["lieux/mount-kalaga"] }),

    // ---------- QUARTIERS DE VICE CITY ----------
    lieu("ocean-beach", "Ocean Beach", "Quartier", "[[lieux/vice-city|Vice City]]", "South Beach (Miami Beach)",
      "Hôtels Art déco et sable blanc le long de la côte. Le quartier emblématique du Vice City original, de retour.",
      { color: ["#ff8a3d", "#ff2d95"], related: ["lieux/ocean-view-hotel", "lieux/washington-beach"] }),
    lieu("south-beach", "South Beach", "Quartier", "[[lieux/vice-city|Vice City]]", null,
      "La grande artère de la vie nocturne, illuminée de néons.", { related: ["lieux/ocean-beach", "lieux/malibu-club"] }),
    lieu("downtown-vice-city", "Downtown Vice City", "Quartier", "[[lieux/vice-city|Vice City]]", "Brickell",
      "Le cœur financier de la ville, fait de tours de verre.", { color: ["#00d4ff", "#2b2d42"] }),
    lieu("little-cuba", "Little Cuba", "Quartier", "[[lieux/vice-city|Vice City]]", "Little Havana",
      "Quartier culturel cubano-américain, déjà présent dans le Vice City de 2002 (alias Little Havana).", { color: ["#ffb400", "#ff4d4d"] }),
    lieu("la-perle", "La Perle", "Quartier", "[[lieux/vice-city|Vice City]]", "Little Haiti",
      "Quartier d'inspiration haïtienne, connu pour ses fresques murales.", { color: ["#3ddc97", "#ffb400"] }),
    lieu("stockyard", "Stockyard", "Quartier", "[[lieux/vice-city|Vice City]]", "Wynwood",
      "Quartier artistique aux bâtiments industriels reconvertis et couverts de fresques.", { color: ["#b06bff", "#ff6ad5"] }),
    lieu("vice-city-port", "Port de Vice City (VC Port)", "Quartier", "[[lieux/vice-city|Vice City]]", "PortMiami",
      "Port de commerce et de croisière, avec conteneurs et entrepôts. Il se proclame « capitale mondiale des croisières ».",
      { color: ["#00a3ff", "#2b2d42"] }),
    lieu("vice-beach", "Vice Beach", "Quartier", "[[lieux/vice-city|Vice City]]", "Miami Beach",
      "Île-barrière reliée au continent par une chaussée.", { related: ["lieux/ocean-beach"] }),
    lieu("venetian-islands", "Venetian Islands", "Quartier", "[[lieux/vice-city|Vice City]]", "Venetian Islands (Miami)",
      "Petites îles résidentielles, reconnaissables à leur court de tennis."),
    lieu("rockridge", "Rockridge", "Quartier", "[[lieux/vice-city|Vice City]]", null,
      "Quartier situé près de La Perle et de Crosstown.", { related: ["lieux/la-perle"] }),
    lieu("washington-beach", "Washington Beach", "Quartier", "[[lieux/vice-city|Vice City]]", null,
      "Bande côtière sur la rive est, déjà présente dans le Vice City original.", { related: ["lieux/ocean-beach"] }),
    lieu("vice-city-international-airport", "Aéroport international de Vice City", "Quartier", "[[lieux/vice-city|Vice City]]", "Aéroport international de Miami",
      "Principal aéroport de Leonida, clin d'œil à celui du Vice City de 2002."),

    // ---------- LIEUX NOTABLES ----------
    lieu("leonida-penitentiary", "Pénitencier de Leonida", "Lieu notable", "[[lieux/leonida|Leonida]]", null,
      "La prison où Lucia est détenue au début du jeu.", { statut: "officiel", related: ["personnages/lucia-caminos"] }),
    lieu("lake-leonida", "Lac Leonida", "Lieu notable", "[[lieux/comte-ambrosia|Comté d'Ambrosia]]", "Lac Okeechobee",
      "Grand lac intérieur au bord duquel se trouve Ambrosia.", { related: ["lieux/ambrosia"] }),
    lieu("allied-crystal", "Raffinerie Allied Crystal", "Lieu notable", "[[lieux/ambrosia|Ambrosia]]", null,
      "Raffinerie de sucre qui domine l'horizon d'Ambrosia.", { related: ["lieux/ambrosia"] }),
    lieu("ocean-view-hotel", "Ocean View Hotel", "Lieu notable", "[[lieux/ocean-beach|Ocean Beach]]", null,
      "Hôtel de bord de mer, clin d'œil au premier refuge de Tommy Vercetti dans GTA Vice City.", { related: ["lieux/ocean-beach"] }),
    lieu("malibu-club", "Malibu Club", "Lieu notable", "[[lieux/vice-city|Vice City]]", null,
      "Boîte de nuit mythique du Vice City original, de retour dans GTA VI.", { related: ["lieux/south-beach"] }),
    lieu("jack-of-hearts", "Jack of Hearts", "Lieu notable", "[[lieux/vice-city|Vice City]]", null,
      "Club de strip-tease de Boobie Ike, où Dre'Quan programmait ses premiers artistes.",
      { related: ["personnages/boobie-ike", "personnages/dre-quan-priest"] }),
    lieu("vercetti-estate", "Vercetti Estate", "Lieu notable", "[[lieux/leonida-keys|Leonida Keys]]", null,
      "Propriété dont le nom rappelle Tommy Vercetti, le héros de GTA Vice City.", { related: ["lieux/leonida-keys"] }),
    lieu("sahara-arena", "Sahara Arena", "Lieu notable", "[[lieux/vice-city|Vice City]]", null, "Salle de spectacles et d'événements de Vice City."),
    lieu("vice-city-metro", "Métro de Vice City", "Lieu notable", "[[lieux/vice-city|Vice City]]", "Metrorail de Miami", "Réseau de transport en commun de la ville."),
    lieu("starlet-motel", "Starlet Motel", "Lieu notable", "[[lieux/leonida|Leonida]]", null, "Motel en bord de route aperçu dans les médias officiels."),
    lieu("tisha-wocka-flea-market", "Marché aux puces Tisha-Wocka", "Lieu notable", "[[lieux/leonida|Leonida]]", null, "Marché aux puces de Leonida."),
    lieu("rideout-customs", "Rideout Customs", "Lieu notable", "[[lieux/leonida|Leonida]]", null,
      "Garage de personnalisation automobile.", { related: ["gameplay/personnalisation-vehicules"] }),
  ],
};
