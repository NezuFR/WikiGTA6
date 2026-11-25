const SRC = [{ title: "GTABase – Armes et combat", url: "https://www.gtabase.com/grand-theft-auto-6/" }];

function arme(slug, name, categorie, summary, extra = {}) {
  return { slug, name, subtitle: categorie, tags: [categorie], statut: extra.statut || "confirme", color: extra.color || ["#ff4d4d", "#2b2d42"], infobox: { Catégorie: categorie, ...(extra.infobox || {}) }, summary, sections: extra.sections || [], related: ["armes/regles-armes", ...(extra.related || [])], sources: SRC };
}

export default {
  id: "armes",
  title: "Armes",
  singular: "Arme",
  icon: "🔫",
  intro: "L'arsenal de Leonida : catégories, armes nommées et règles de port. La liste complète des modèles sera enrichie au fil des découvertes.",
  filters: ["Règles", "Pistolet", "Fusil", "Explosif", "Mêlée"],
  entries: [
    {
      slug: "regles-armes",
      name: "Règles des armes",
      subtitle: "Comment fonctionne l'arsenal",
      tags: ["Règles"],
      statut: "confirme",
      color: ["#ff8a3d", "#2b2d42"],
      infobox: { Port: "2 fusils + 2 pistolets", Stockage: "Coffre des véhicules", Vendeur: "[[organisations/ammu-nation|Ammu-Nation]]", Munitions: "Pistolet, fusil à pompe, lourde, roquette, harpon" },
      summary: "Comme dans Red Dead Redemption 2, on ne porte que deux fusils et deux pistolets ; le reste se range dans le coffre de la voiture.",
      sections: [
        { title: "Règles principales", body: [
          "Pas de double maniement (dual-wield), mais on peut changer l'arme de main.",
          "La roue des armes a été repensée : R1 / RB permet de basculer entre armes et objets.",
          "Les armes achetées par un protagoniste sont disponibles pour l'autre.",
          "La personnalisation des armes est plus poussée que dans GTA V.",
        ] },
        { title: "Combat", body: ["Voir [[gameplay/combat|Combat]] et [[gameplay/focus|Focus]]."] },
      ],
      related: ["organisations/ammu-nation", "gameplay/combat", "gameplay/focus"],
      sources: SRC,
    },
    arme("revolver-hawk", "Revolver Hawk", "Pistolet", "Revolver nommé dans les légendes de la galerie officielle.", { statut: "officiel" }),
    arme("revolver-little-morgan", "Revolver Little Morgan", "Pistolet", "Revolver compact nommé dans la galerie officielle.", { statut: "officiel" }),
    arme("pistolets", "Pistolets (catégorie)", "Pistolet", "Armes de poing : légères, discrètes, portables par deux."),
    arme("fusils", "Fusils (catégorie)", "Fusil", "Fusils d'assaut, fusils à pompe, fusils de précision. Deux maximum sur soi."),
    arme("explosifs", "Explosifs (catégorie)", "Explosif", "Lance-roquettes, grenades et autres explosifs (munitions « roquette »)."),
    arme("fusil-harpon", "Fusil-harpon", "Fusil", "Arme sous-marine utilisant des munitions « harpon », utile pour la plongée.", { related: ["gameplay/activites"] }),
    arme("armes-de-melee", "Armes de mêlée (catégorie)", "Mêlée", "Battes, couteaux et autres armes de corps à corps, en complément des combats à mains nues."),
  ],
};
