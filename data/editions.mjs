const SRC_BASE = { title: "GTABase – Éditions et prix", url: "https://www.gtabase.com/grand-theft-auto-6/" };
const SRC_RS = { title: "Rockstar Games – Grand Theft Auto VI", url: "https://www.rockstargames.com/VI" };

export default {
  id: "editions",
  title: "Éditions",
  singular: "Édition",
  icon: "💿",
  intro: "Prix, éditions, bonus de précommande et produits dérivés officiels.",
  filters: ["Jeu", "Bonus", "Collector", "Musique"],
  entries: [
    {
      slug: "standard-edition", name: "Édition Standard", subtitle: "79,99 €", tags: ["Jeu"], statut: "officiel", color: ["#00d4ff", "#7b5cff"],
      infobox: { Prix: "79,99 $ / 79,99 €", Plateformes: "PS5, Xbox Series X|S", Sortie: "19 novembre 2026" },
      summary: "Le jeu de base, sur PlayStation 5 et Xbox Series X|S.",
      sections: [{ title: "Format", body: ["Selon GTABase, le jeu est distribué en numérique ; les boîtes physiques contiendraient un code de téléchargement plutôt qu'un disque. Aucune date n'est annoncée pour la version PC."] }],
      related: ["editions/ultimate-edition", "chronologie/sortie"], sources: [SRC_BASE, SRC_RS],
    },
    {
      slug: "ultimate-edition", name: "Ultimate Edition", subtitle: "99,99 €", tags: ["Jeu"], statut: "officiel", color: ["#ffd166", "#ff2d95"],
      infobox: { Prix: "99,99 $ / 99,99 €", Contenu: "Véhicules, armes et tenues premium" },
      summary: "Le jeu accompagné d'objets exclusifs liés à l'histoire de Jason et Lucia.",
      sections: [{ title: "Véhicules inclus", body: [
        "[[vehicules/grotti-cheetah-95|Grotti Cheetah '95]], [[vehicules/shitzu-squalo|Shitzu Squalo]], [[vehicules/vapid-dominator-buggy-67|Vapid Dominator Buggy '67]], et pour la planque de Jason : [[vehicules/vapid-ganado|Vapid Ganado]], [[vehicules/dinka-enduro|Dinka Enduro]] et [[vehicules/crest-kayak|Crest Kayak]].",
      ] }],
      related: ["editions/standard-edition"], sources: [SRC_BASE, SRC_RS],
    },
    {
      slug: "vintage-vice-city-pack", name: "Vintage Vice City Pack", subtitle: "Bonus de précommande", tags: ["Bonus"], statut: "officiel", color: ["#ffd166", "#ff8a3d"],
      infobox: { Prix: "Offert", Condition: "Précommande ou achat avant le 20 novembre 2026", Contenu: "[[vehicules/vapid-stanier-55|Vapid Stanier '55]] + garage" },
      summary: "Contenu numérique offert avec chaque précommande et chaque achat avant le 20 novembre 2026.",
      sections: [], related: ["vehicules/vapid-stanier-55"], sources: [SRC_BASE, SRC_RS],
    },
    {
      slug: "vice-city-collection", name: "The Vice City Collection", subtitle: "Coffret collector", tags: ["Collector"], statut: "officiel",
      infobox: { Type: "Coffret de collection" },
      summary: "Coffret collector présenté sur le site officiel de Rockstar. Le contenu détaillé est à compléter.",
      sections: [], related: [], sources: [SRC_RS],
    },
    {
      slug: "the-album", name: "Grand Theft Auto VI: The Album", subtitle: "Album (édition Deluxe)", tags: ["Musique"], statut: "officiel", color: ["#b06bff", "#00d4ff"],
      infobox: { Type: "Album musical", Date: "23 novembre 2026" },
      summary: "Album officiel tiré de la bande-son du jeu, sorti en édition Deluxe le 23 novembre 2026.",
      sections: [], related: ["musique/radio"], sources: [SRC_RS],
    },
  ],
};
