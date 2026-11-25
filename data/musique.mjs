export default {
  id: "musique",
  title: "Musique & Radio",
  singular: "Musique",
  icon: "📻",
  intro: "Les radios de Leonida, les podcasts et la bande-son du jeu.",
  filters: ["Radio", "Album"],
  entries: [
    {
      slug: "radio",
      name: "Radios de Leonida",
      subtitle: "Plus de 20 stations",
      tags: ["Radio"],
      statut: "confirme",
      color: ["#b06bff", "#00d4ff"],
      infobox: { Stations: "Plus de 20 (dont 1 à débloquer)", Titres: "Plus de 800", "À pied": "Oui, avec écouteurs", Commande: "Maintenir la croix directionnelle" },
      summary: "Une vingtaine de stations musicales et de talk-shows, plus de 800 morceaux, et pour la première fois la radio écoutable à pied grâce aux écouteurs.",
      sections: [
        { title: "Nouveautés", body: [
          "Pour la première fois dans la série, Jason et Lucia peuvent écouter la radio et des podcasts hors des véhicules, via leur [[gameplay/telephone|téléphone]] et des écouteurs vendus en magasin d'électronique.",
          "Une station supplémentaire se débloque en jeu. Des podcasts « à la demande » proposent des épisodes de 15 à 30 minutes.",
        ] },
        { title: "Liste des stations", body: ["La liste détaillée des stations et animateurs est en cours de vérification. Vous pouvez contribuer via GitHub (voir la page « À propos »)."] },
      ],
      related: ["editions/the-album", "gameplay/telephone"],
      sources: [
        { title: "NPR – La radio de GTA VI", url: "https://www.npr.org/2026/11/24/nx-s1-6052997/gta-vi-radio-music-discovery" },
        { title: "Wiki GTA (Fandom) – Radios de GTA VI", url: "https://gta.fandom.com/wiki/Radio_Stations_in_GTA_VI" },
      ],
    },
  ],
};
