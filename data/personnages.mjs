// Personnages de Grand Theft Auto VI
// Syntaxe des liens internes : [[categorie/slug]] ou [[categorie/slug|texte affiché]]
// statut : "officiel" (présenté par Rockstar), "confirme" (vu en jeu / largement rapporté), "communaute" (à vérifier)

export default {
  id: "personnages",
  title: "Personnages",
  singular: "Personnage",
  icon: "👤",
  intro:
    "Les protagonistes, alliés, rivaux et figures de Leonida. Jason et Lucia sont les deux personnages jouables ; les autres gravitent autour de leur histoire.",
  filters: ["Protagoniste", "Allié", "Musique", "Crime", "Famille"],
  entries: [
    {
      slug: "lucia-caminos",
      name: "Lucia Caminos",
      subtitle: "Protagoniste jouable",
      tags: ["Protagoniste", "Crime"],
      statut: "officiel",
      color: ["#ff2d95", "#ff8a3d"],
      infobox: {
        "Rôle": "Protagoniste jouable",
        "Partenaire": "[[personnages/jason-duval|Jason Duval]]",
        "Lieu de départ": "[[lieux/leonida-penitentiary|Pénitencier de Leonida]]",
        "Ville": "[[lieux/vice-city|Vice City]]",
        "Première apparition": "Trailer 1 (décembre 2023)",
      },
      summary:
        "Lucia est l'une des deux héroïnes jouables de GTA VI et la première protagoniste féminine de la série depuis l'ère 2D. Elle commence l'histoire derrière les barreaux du pénitencier de Leonida.",
      sections: [
        {
          title: "Biographie",
          body: [
            "Selon Rockstar, le père de Lucia lui a appris à se battre dès son plus jeune âge, et la vie ne l'a jamais épargnée depuis. C'est en voulant protéger sa famille qu'elle s'est retrouvée enfermée au [[lieux/leonida-penitentiary|pénitencier de Leonida]].",
            "Sortie de prison un peu par chance, elle est bien décidée à ne pas y retourner — et à saisir la moindre occasion de s'offrir une vie meilleure. C'est dans ce contexte qu'elle fait équipe avec [[personnages/jason-duval|Jason Duval]].",
          ],
        },
        {
          title: "Relation avec Jason",
          body: [
            "Le duo est au cœur du récit, souvent comparé à une histoire à la Bonnie & Clyde. Le jeu intègre un système de relation à plusieurs niveaux qui évolue selon les choix du joueur et le temps passé ensemble (voir [[gameplay/relation|Système de relation]]).",
          ],
        },
        {
          title: "En jeu",
          body: [
            "Lucia est jouable en monde ouvert et en mission ; on peut basculer entre elle et Jason à tout moment (voir [[gameplay/changement-de-personnage|Changement de personnage]]). Elle possède son propre [[gameplay/profil-criminel|profil criminel]].",
          ],
        },
      ],
      related: ["personnages/jason-duval", "lieux/leonida-penitentiary", "lieux/vice-city", "gameplay/relation"],
      sources: [
        { title: "Rockstar Games – Grand Theft Auto VI", url: "https://www.rockstargames.com/VI" },
        { title: "GTABase – Personnages de GTA 6", url: "https://gtabase.com/gta-6/characters" },
      ],
    },
    {
      slug: "jason-duval",
      name: "Jason Duval",
      subtitle: "Protagoniste jouable",
      tags: ["Protagoniste", "Crime"],
      statut: "officiel",
      color: ["#00d4ff", "#7b5cff"],
      infobox: {
        "Rôle": "Protagoniste jouable",
        "Partenaire": "[[personnages/lucia-caminos|Lucia Caminos]]",
        "Passé": "Ancien militaire (US Army)",
        "Employeur": "[[personnages/brian-heder|Brian Heder]]",
        "Région": "[[lieux/leonida-keys|Leonida Keys]]",
        "Première apparition": "Trailer 1 (décembre 2023)",
      },
      summary:
        "Jason rêve d'une vie tranquille, mais tout se complique toujours. Ancien soldat, il gagne sa vie dans les Keys en travaillant pour des trafiquants locaux.",
      sections: [
        {
          title: "Biographie",
          body: [
            "Jason a grandi entouré d'escrocs et d'arnaqueurs. Il s'est engagé dans l'armée pour tourner la page d'une adolescence agitée, mais a fini par retomber dans ce qu'il connaît le mieux : les petits boulots pour les trafiquants des [[lieux/leonida-keys|Leonida Keys]].",
            "Il est logé gratuitement par [[personnages/brian-heder|Brian Heder]] dans l'une de ses propriétés, en échange de « services » — notamment des opérations d'intimidation — et de quelques passages pour boire la sangria de [[personnages/lori-heder|Lori]].",
          ],
        },
        {
          title: "Entourage",
          body: [
            "Son meilleur ami est [[personnages/cal-hampton|Cal Hampton]], lui aussi associé de Brian. Sa rencontre avec [[personnages/lucia-caminos|Lucia]] change la donne : un coup facile qui tourne mal les entraîne dans une conspiration criminelle qui s'étend à tout l'État de [[lieux/leonida|Leonida]].",
          ],
        },
      ],
      related: ["personnages/lucia-caminos", "personnages/cal-hampton", "personnages/brian-heder", "lieux/leonida-keys"],
      sources: [
        { title: "Rockstar Games – Grand Theft Auto VI", url: "https://www.rockstargames.com/VI" },
        { title: "Insider Gaming – Personnages confirmés", url: "https://insider-gaming.com/all-confirmed-characters-in-gta-6/" },
      ],
    },
    {
      slug: "cal-hampton",
      name: "Cal Hampton",
      subtitle: "Meilleur ami de Jason",
      tags: ["Allié"],
      statut: "officiel",
      color: ["#3ddc97", "#00a3ff"],
      infobox: {
        "Rôle": "Personnage secondaire",
        "Ami de": "[[personnages/jason-duval|Jason Duval]]",
        "Travaille pour": "[[personnages/brian-heder|Brian Heder]]",
        "Hobby": "Écouter les fréquences des garde-côtes",
      },
      summary:
        "Ami de Jason et associé de Brian Heder, Cal est un paranoïaque tranquille qui préfère rester chez lui, bière à la main, à espionner les communications des garde-côtes.",
      sections: [
        {
          title: "Profil",
          body: [
            "Rockstar le présente comme quelqu'un d'heureux « tout en bas » de l'échelle sociale américaine. Méfiant envers à peu près tout, il passe ses soirées à écouter les radios des garde-côtes avec plusieurs onglets de navigation privée ouverts.",
            "Il apporte une touche comique au récit, un rôle souvent comparé à celui de Roman Bellic dans GTA IV, tandis que [[personnages/jason-duval|Jason]] nourrit des ambitions bien plus grandes.",
          ],
        },
      ],
      related: ["personnages/jason-duval", "personnages/brian-heder"],
      sources: [
        { title: "GTABase – Personnages", url: "https://gtabase.com/gta-6/characters" },
        { title: "Sportskeeda – Liste des personnages", url: "https://widgets.sportskeeda.com/gta/list-gta-6-characters-confirmed-rockstar-games-so-far" },
      ],
    },
    {
      slug: "boobie-ike",
      name: "Boobie Ike",
      subtitle: "Légende de Vice City, homme d'affaires",
      tags: ["Musique", "Crime"],
      statut: "officiel",
      color: ["#ffb400", "#ff4d4d"],
      infobox: {
        "Rôle": "Personnage secondaire",
        "Activités": "Immobilier, club de strip-tease, studio d'enregistrement",
        "Label": "[[organisations/only-raw-records|Only Raw Records]]",
        "Associé": "[[personnages/dre-quan-priest|Dre'Quan Priest]]",
        "Club": "[[lieux/jack-of-hearts|Jack of Hearts]]",
      },
      summary:
        "Boobie est une figure locale de Vice City : l'un des rares à avoir bâti un empire « légitime » dans l'immobilier, la nuit et la musique.",
      sections: [
        {
          title: "Profil",
          body: [
            "Parti de la rue, Boobie possède aujourd'hui des biens immobiliers, un club de strip-tease et un studio d'enregistrement. Plusieurs sources notent que ces affaires seraient en partie financées par le trafic.",
            "On pourrait croire qu'il ne pense qu'à lui, mais son vrai projet est son partenariat avec le jeune [[personnages/dre-quan-priest|Dre'Quan Priest]] autour du label [[organisations/only-raw-records|Only Raw Records]] : il ne leur manque plus qu'un tube.",
            "Le personnage était déjà mentionné dans les fuites de septembre 2022 (voir [[chronologie/fuite-2022|Fuite de 2022]]).",
          ],
        },
      ],
      related: ["personnages/dre-quan-priest", "organisations/only-raw-records", "organisations/real-dimez", "lieux/jack-of-hearts"],
      sources: [
        { title: "Insider Gaming – Personnages", url: "https://insider-gaming.com/all-confirmed-characters-in-gta-6/" },
        { title: "GamesRadar – Personnages de GTA 6", url: "https://www.gamesradar.com/games/grand-theft-auto/gta-6-characters" },
      ],
    },
    {
      slug: "dre-quan-priest",
      name: "Dre'Quan Priest",
      subtitle: "Producteur et patron de label",
      tags: ["Musique"],
      statut: "officiel",
      color: ["#b06bff", "#ff2d95"],
      infobox: {
        "Rôle": "Personnage secondaire",
        "Label": "[[organisations/only-raw-records|Only Raw Records]]",
        "Associé": "[[personnages/boobie-ike|Boobie Ike]]",
        "Artistes": "[[organisations/real-dimez|Real Dimez]]",
      },
      summary:
        "Ancien gamin de la rue, Dre'Quan n'a jamais voulu faire carrière dans le crime : son objectif a toujours été la musique.",
      sections: [
        {
          title: "Profil",
          body: [
            "Dre'Quan a commencé en programmant des artistes dans le club de strip-tease de [[personnages/boobie-ike|Boobie]]. Depuis qu'il a signé le duo [[organisations/real-dimez|Real Dimez]], il vise beaucoup plus haut : salles combles et hits viraux sur la scène de [[lieux/vice-city|Vice City]].",
            "Son parcours n'a jamais été très propre, mais il regarde enfin vers l'avant.",
          ],
        },
      ],
      related: ["personnages/boobie-ike", "organisations/only-raw-records", "organisations/real-dimez"],
      sources: [
        { title: "Red Bull – Les personnages de GTA 6", url: "https://www.redbull.com/ca-en/gta-6-characters-cast" },
        { title: "VideoGamer – Personnages", url: "https://www.videogamer.com/?p=1162353" },
      ],
    },
    {
      slug: "bae-luxe",
      name: "Bae-Luxe",
      subtitle: "Moitié du duo Real Dimez",
      tags: ["Musique"],
      statut: "officiel",
      color: ["#ff6ad5", "#ffd166"],
      infobox: {
        "Rôle": "Personnage secondaire",
        "Groupe": "[[organisations/real-dimez|Real Dimez]]",
        "Partenaire": "[[personnages/roxy|Roxy]]",
        "Label": "[[organisations/only-raw-records|Only Raw Records]]",
      },
      summary:
        "Rappeuse et star des réseaux sociaux, Bae-Luxe forme avec son amie d'enfance Roxy le duo Real Dimez.",
      sections: [
        {
          title: "Profil",
          body: [
            "Bae-Luxe et [[personnages/roxy|Roxy]] sont amies depuis l'enfance. Leur premier succès, un single avec le rappeur local DWNPLY, les a propulsées sur le devant de la scène. Cinq ans et pas mal d'ennuis plus tard, elles ont signé chez [[organisations/only-raw-records|Only Raw Records]] en espérant retrouver la gloire.",
          ],
        },
      ],
      related: ["personnages/roxy", "organisations/real-dimez", "personnages/dre-quan-priest"],
      sources: [{ title: "GTABase – Personnages", url: "https://www.gtabase.com/de/gta-6/characters/" }],
    },
    {
      slug: "roxy",
      name: "Roxy",
      subtitle: "Moitié du duo Real Dimez",
      tags: ["Musique"],
      statut: "officiel",
      color: ["#ffd166", "#ff6ad5"],
      infobox: {
        "Rôle": "Personnage secondaire",
        "Groupe": "[[organisations/real-dimez|Real Dimez]]",
        "Partenaire": "[[personnages/bae-luxe|Bae-Luxe]]",
        "Label": "[[organisations/only-raw-records|Only Raw Records]]",
      },
      summary: "Rappeuse et influenceuse, Roxy forme le duo Real Dimez avec Bae-Luxe.",
      sections: [
        {
          title: "Profil",
          body: [
            "Amie d'enfance de [[personnages/bae-luxe|Bae-Luxe]], Roxy partage avec elle la renommée — et les galères — de [[organisations/real-dimez|Real Dimez]]. Le duo est aujourd'hui l'atout principal du label de [[personnages/dre-quan-priest|Dre'Quan Priest]].",
          ],
        },
      ],
      related: ["personnages/bae-luxe", "organisations/real-dimez"],
      sources: [{ title: "GFinity – Guide des personnages", url: "https://www.gfinityesports.com/article/gta-6-character-guide-all-confirmed-protagonists-and-faces-of-leonida" }],
    },
    {
      slug: "raul-bautista",
      name: "Raul Bautista",
      subtitle: "Braqueur de banques chevronné",
      tags: ["Crime"],
      statut: "officiel",
      color: ["#ff4d4d", "#7b1e3a"],
      infobox: {
        "Rôle": "Personnage secondaire",
        "Spécialité": "Braquages de banques",
        "Trait": "Charisme, expérience, goût du risque",
      },
      summary:
        "Raul est un braqueur expérimenté qui transforme chaque casse en œuvre d'art — et qui recrute toujours de nouveaux talents.",
      sections: [
        {
          title: "Profil",
          body: [
            "Sûr de lui et charmeur, Raul a de l'expérience à revendre. Toujours à la recherche de nouvelles recrues, il est prêt à prendre des risques de plus en plus gros pour des gains plus importants, ce qui risque d'entraîner [[personnages/jason-duval|Jason]] et [[personnages/lucia-caminos|Lucia]] dans des situations délicates.",
          ],
        },
      ],
      related: ["personnages/jason-duval", "personnages/lucia-caminos"],
      sources: [
        { title: "Insider Gaming – Personnages", url: "https://insider-gaming.com/all-confirmed-characters-in-gta-6/" },
        { title: "GamesRadar – Personnages", url: "https://www.gamesradar.com/games/grand-theft-auto/gta-6-characters" },
      ],
    },
    {
      slug: "brian-heder",
      name: "Brian Heder",
      subtitle: "Contrebandier vétéran et propriétaire",
      tags: ["Crime", "Allié"],
      statut: "officiel",
      color: ["#ff8a3d", "#ffd166"],
      infobox: {
        "Rôle": "Personnage secondaire",
        "Activité": "Contrebande de drogue",
        "Épouse": "[[personnages/lori-heder|Lori Heder]] (troisième épouse)",
        "Employés": "[[personnages/jason-duval|Jason Duval]], [[personnages/cal-hampton|Cal Hampton]]",
        "Région": "[[lieux/leonida-keys|Leonida Keys]]",
      },
      summary:
        "Brian est un trafiquant à l'ancienne des Keys. Il délègue désormais le sale boulot à des plus jeunes — dont Jason, à qui il loue un logement.",
      sections: [
        {
          title: "Profil",
          body: [
            "Contrebandier depuis l'âge d'or du trafic en Floride… pardon, à Leonida, Brian a levé le pied et fait travailler des hommes plus jeunes pendant qu'il profite de la vie avec [[personnages/lori-heder|Lori]], sa troisième épouse.",
            "Il héberge [[personnages/jason-duval|Jason]] gratuitement à condition qu'il l'aide pour des opérations d'intimidation locales. [[personnages/cal-hampton|Cal Hampton]] fait aussi partie de ses associés.",
          ],
        },
      ],
      related: ["personnages/lori-heder", "personnages/jason-duval", "personnages/cal-hampton", "lieux/leonida-keys"],
      sources: [
        { title: "PC Gamer – Personnages de GTA 6", url: "https://pcgamer.com/games/action/grand-theft-auto/gta6-characters" },
        { title: "GTABase – Personnages", url: "https://www.gtabase.com/de/gta-6/characters/" },
      ],
    },
    {
      slug: "lori-heder",
      name: "Lori Heder",
      subtitle: "Épouse de Brian",
      tags: ["Famille"],
      statut: "officiel",
      color: ["#ffd166", "#3ddc97"],
      infobox: {
        "Rôle": "Personnage secondaire",
        "Époux": "[[personnages/brian-heder|Brian Heder]]",
        "Spécialité": "Sa sangria",
      },
      summary: "Troisième épouse de Brian Heder, connue pour la sangria qu'elle sert à Jason.",
      sections: [
        {
          title: "Profil",
          body: [
            "Lori apparaît aux côtés de [[personnages/brian-heder|Brian]] dans le deuxième trailer, lors d'un repas avec [[personnages/jason-duval|Jason]] et [[personnages/lucia-caminos|Lucia]]. Passer boire sa sangria fait partie de l'« accord » de logement de Jason.",
          ],
        },
      ],
      related: ["personnages/brian-heder", "personnages/jason-duval"],
      sources: [{ title: "Insider Gaming – Personnages", url: "https://insider-gaming.com/all-confirmed-characters-in-gta-6/" }],
    },
  ],
};
