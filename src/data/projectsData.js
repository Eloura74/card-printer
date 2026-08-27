/**
 * Modèle de données extensible pour les projets FoxtrottQuebec 3D Design
 * Source de vérité pour l'ensemble des 15 créations réelles d'atelier.
 */

export const creatorProfile = {
  name: "FoxtrottQuebec 3D Design",
  subtitle: "Création • Conception • Fabrication 3D",
  bio: "Je transforme des idées numériques en objets réels : tableaux d'art Hueforge haute précision, prototypes mécatroniques, robotique et pièces techniques d'atelier.",
  tiktokHandle: "@quentinfaber",
  tiktokUrl: "https://www.tiktok.com/@quentinfaber",
  specialties: [
    "Tableaux Hueforge Multicouches",
    "Projets Robotiques & Mécatronique",
    "Modélisation Paramétrique & Conception CAO",
    "Cosplay, Sculptures & Pièces d'Exposition"
  ],
  workshopMachines: [
    "Bambu Lab X1-Carbon / AMS",
    "VZBot Haute Vitesse & Extrusion Goliath",
    "Custom Voron / Klipper"
  ]
};

export const projectsList = [
  {
    id: "sauron",
    slug: "tableau-sauron",
    title: "Tableau Sauron — Le Seigneur des Anneaux",
    category: "hueforge",
    categoryLabel: "Hueforge & Art 3D",
    featured: true,
    shortDescription: "Tableau d'art multicouche Hueforge représentant Sauron et l'Œil du Mordor.",
    description: "Tableau d'art multicouche représentant le Seigneur des Ténèbres Sauron émergeant des braises du Mordor. Impression réalisée par superposition de couches ultrafines exploitant la transmission lumineuse optique des filaments.",
    image: "/images/projects/sauron.png",
    images: ["/images/projects/sauron.png"],
    tiktokUrl: "https://www.tiktok.com/@quentinfaber/video/7426326611181522209",
    tags: ["Seigneur des Anneaux", "Sauron", "Hueforge", "Art 3D", "Cinéma"],
    technical: {
      printers: ["Bambu Lab AMS"],
      materials: ["PLA Noir", "PLA Rouge", "PLA Orange", "PLA Jaune"],
      software: ["Hueforge", "Bambu Studio"],
      electronics: [],
      layerHeight: "0.08 mm",
      technique: "Hueforge Multicouche",
      printTime: null,
      partsCount: 1,
      weight: null
    },
    process: [
      {
        step: "Préparation Optique",
        title: "Spectrométrie des filaments & transmission lumineuse",
        description: "Calcul précis du Transmission Distance (TD) pour fondre les nuances sans à-coups."
      },
      {
        step: "Impression",
        title: "Gestion des permutations de couleurs automatiques",
        description: "Superposition micrométrique des couches pour révéler le contraste profond."
      }
    ],
    status: "completed",
    model3d: null
  },
  {
    id: "deadpool",
    slug: "tableau-deadpool",
    title: "Tableau Deadpool — Marvel",
    category: "hueforge",
    categoryLabel: "Hueforge & Art 3D",
    featured: true,
    shortDescription: "Création multicouche ultra-dynamique aux couleurs vives représentant Deadpool.",
    description: "Tableau d'art mettant en scène Deadpool dans une pose iconique et explosive. Optimisé pour un rendu éclatant des contrastes entre le rouge vif, le blanc pur et le noir profond.",
    image: "/images/projects/dead-pool.png",
    images: ["/images/projects/dead-pool.png"],
    tiktokUrl: "https://www.tiktok.com/@quentinfaber/video/7475031624250461462",
    tags: ["Deadpool", "Marvel", "Hueforge", "Pop-Culture", "Comics"],
    technical: {
      printers: ["Bambu Lab AMS"],
      materials: ["PLA Rouge Vif", "PLA Noir Profond", "PLA Blanc Pur"],
      software: ["Hueforge", "Bambu Studio"],
      electronics: [],
      layerHeight: "0.08 mm",
      technique: "Hueforge Multicouche",
      printTime: null,
      partsCount: 1,
      weight: null
    },
    status: "completed",
    model3d: null
  },
  {
    id: "bras-robotique",
    slug: "bras-robotique-atelier",
    title: "Bras Robotique Articulé d'Atelier",
    category: "robotics",
    categoryLabel: "Robotique & Mécatronique",
    featured: true,
    shortDescription: "Bras robotique mécatronique multi-axes conçu et assemblé à l'atelier.",
    description: "Structure robotique multi-axes articulée entièrement conçue sous Fusion 360 et assemblée à l'atelier. Intègre des réducteurs cycloïdaux imprimés en 3D, servomoteurs de précision et routage interne des câbles d'asservissement.",
    image: "/images/projects/bras-robotique.png",
    images: ["/images/projects/bras-robotique.png"],
    tiktokUrl: "https://www.tiktok.com/@quentinfaber/video/7489128923163266326",
    tags: ["Robotique", "Mécatronique", "Conception CAD", "Arduino", "Prototypage"],
    technical: {
      printers: ["VZBot", "Bambu Lab"],
      materials: ["PETG Carbone", "ASA Technique", "PLA Pro"],
      software: ["Fusion 360", "Arduino IDE"],
      electronics: ["Servomoteurs de puissance", "Microcontrôleur", "Driver de puissance"],
      technique: "Pièces mécaniques structurelles fonctionnelles",
      layerHeight: "0.20 mm",
      partsCount: null,
      printTime: null,
      weight: null
    },
    process: [
      {
        step: "Conception CAO",
        title: "Modélisation cinématique sous Fusion 360",
        description: "Calcul des couples de serrage et tolérances d'emboîtement des roulements."
      },
      {
        step: "Fabrication",
        title: "Impression en matériaux haute résistance thermique et mécanique",
        description: "Orientation des fibres d'impression pour maximiser la rigidité axiale."
      },
      {
        step: "Assemblage & Câblage",
        title: "Intégration mécatronique",
        description: "Montage des axes rotatifs et étalonnage des plages angulaires."
      }
    ],
    status: "completed",
    model3d: null
  },
  {
    id: "main-robotique",
    slug: "main-robotique-bionique",
    title: "Main Robotique Articulée Bionique",
    category: "robotics",
    categoryLabel: "Robotique & Mécatronique",
    featured: true,
    shortDescription: "Main bionique articulée avec phalanges dynamiques et cinématique fluide.",
    description: "Prothèse / préhenseur robotisé articulé reproduisant la cinématique naturelle des doigts humains. Chaque phalange est commandée par un réseau de tendons guidés dans des canaux imprimés avec une friction minimale.",
    image: "/images/projects/hand-robotique.png",
    images: ["/images/projects/hand-robotique.png"],
    tiktokUrl: "https://www.tiktok.com/@quentinfaber/video/7581938975473011990",
    tags: ["Main Bionique", "Robotique", "Mécanique", "Tendons", "Biomimétisme"],
    technical: {
      printers: ["Bambu Lab"],
      materials: ["PLA Tough", "PETG Haute Résistance"],
      software: ["Fusion 360", "PrusaSlicer / Bambu Studio"],
      electronics: ["Servomoteurs asservis"],
      technique: "Mécanismes articulés & ajustements micrométriques",
      layerHeight: "0.12 mm",
      partsCount: null,
      printTime: null,
      weight: null
    },
    status: "completed",
    model3d: null
  },
  {
    id: "luffy",
    slug: "tableau-luffy",
    title: "Tableau Monkey D. Luffy — One Piece",
    category: "hueforge",
    categoryLabel: "Hueforge & Art 3D",
    featured: false,
    shortDescription: "Tableau d'art multicouche représentant Luffy en pleine pose emblématique.",
    description: "Portrait dynamique du futur roi des pirates Monkey D. Luffy avec son chapeau de paille texturé. Impression en couches fines offrant une profondeur d'ombrage saisissante.",
    image: "/images/projects/luffy.png",
    images: ["/images/projects/luffy.png"],
    tiktokUrl: "https://www.tiktok.com/@quentinfaber/video/7443575660028710177",
    tags: ["One Piece", "Luffy", "Manga", "Hueforge", "Anime"],
    technical: {
      printers: ["Bambu Lab AMS"],
      materials: ["PLA Noir", "PLA Rouge", "PLA Blanc"],
      software: ["Hueforge", "Bambu Studio"],
      electronics: [],
      layerHeight: "0.08 mm",
      technique: "Hueforge Multicouche",
      partsCount: 1
    },
    status: "completed",
    model3d: null
  },
  {
    id: "onepiece",
    slug: "ecusson-mugiwara",
    title: "Panneau Écusson Mugiwara Vintage",
    category: "hueforge",
    categoryLabel: "Hueforge & Art 3D",
    featured: false,
    shortDescription: "Plaque murale décorative One Piece avec crâne en relief texturé.",
    description: "Plaque murale iconique mettant en valeur le crâne des Mugiwara avec effet rétro patiné et relief texturé prononcé.",
    image: "/images/projects/onepiece.png",
    images: ["/images/projects/onepiece.png"],
    tiktokUrl: "https://www.tiktok.com/@quentinfaber/video/7490588166550916354",
    tags: ["One Piece", "Mugiwara", "Décoration Murale", "Pop-Culture"],
    technical: {
      printers: ["Bambu Lab"],
      materials: ["PLA Matte", "PLA Silk"],
      software: ["Fusion 360", "Bambu Studio"],
      electronics: [],
      layerHeight: "0.16 mm",
      technique: "Impression Relief multi-parties",
      partsCount: 1
    },
    status: "completed",
    model3d: null
  },
  {
    id: "gandalf",
    slug: "portrait-gandalf",
    title: "Portrait Gandalf le Gris — Le Seigneur des Anneaux",
    category: "hueforge",
    categoryLabel: "Hueforge & Art 3D",
    featured: false,
    shortDescription: "Gravure 3D haute fidélité capturant les détails du visage de Gandalf.",
    description: "Portrait monochrome hyper-détaillé de Gandalf le Gris tenant Glamdring. Le dégradé subtil entre noir charbon, gris pierre et blanc neige confère une dimension presque photographique.",
    image: "/images/projects/gandalf.png",
    images: ["/images/projects/gandalf.png"],
    tiktokUrl: "https://www.tiktok.com/@quentinfaber/video/7443772075640245526",
    tags: ["Seigneur des Anneaux", "Gandalf", "Hueforge", "Cinéma", "Tolkien"],
    technical: {
      printers: ["Bambu Lab"],
      materials: ["PLA Noir Profond", "PLA Gris Minéral", "PLA Blanc Pur"],
      software: ["Hueforge", "Bambu Studio"],
      electronics: [],
      layerHeight: "0.08 mm",
      technique: "Hueforge Monochrome",
      partsCount: 1
    },
    status: "completed",
    model3d: null
  },
  {
    id: "pikatchu",
    slug: "tableau-pikachu-halloween",
    title: "Tableau Pikachu Halloween — Citrouille Sorcière",
    category: "hueforge",
    categoryLabel: "Hueforge & Art 3D",
    featured: false,
    shortDescription: "Tableau festif vibrant représentant Pikachu en chapeau de sorcière.",
    description: "Création festive et chaleureuse associant des teintes jaunes, orangées et rouges éclatantes. Pikachu sous la pleine lune au milieu de citrouilles lumineuses.",
    image: "/images/projects/pikatchu.png",
    images: ["/images/projects/pikatchu.png"],
    tiktokUrl: "https://www.tiktok.com/@quentinfaber/video/7426114334075407649",
    tags: ["Pokémon", "Pikachu", "Halloween", "Hueforge", "Couleurs Vives"],
    technical: {
      printers: ["Bambu Lab AMS"],
      materials: ["PLA Jaune Vif", "PLA Orange Citrouille", "PLA Rouge", "PLA Noir"],
      software: ["Hueforge", "Bambu Studio"],
      electronics: [],
      layerHeight: "0.08 mm",
      technique: "Hueforge Multicolore",
      partsCount: 1
    },
    status: "completed",
    model3d: null
  },
  {
    id: "pirate",
    slug: "portrait-femme-pirate",
    title: "Portrait Femme Pirate & Corsaire",
    category: "hueforge",
    categoryLabel: "Hueforge & Art 3D",
    featured: false,
    shortDescription: "Portrait d'art texturé d'une femme pirate avec bandana.",
    description: "Gravure d'art subtile jouant sur les tons sépia et chauds. La texture du regard et du tissu est restituée avec une finesse optique remarquable.",
    image: "/images/projects/pirate.png",
    images: ["/images/projects/pirate.png"],
    tiktokUrl: "https://www.tiktok.com/@quentinfaber/video/7440898419238997281",
    tags: ["Portrait", "Pirate", "Art 3D", "Hueforge", "Sépia"],
    technical: {
      printers: ["Bambu Lab"],
      materials: ["PLA Nuances Chaudes", "PLA Noir"],
      software: ["Hueforge", "Bambu Studio"],
      electronics: [],
      layerHeight: "0.08 mm",
      technique: "Hueforge Sépia / Monochrome",
      partsCount: 1
    },
    status: "completed",
    model3d: null
  },
  {
    id: "inca",
    slug: "portrait-guerriere-inca",
    title: "Portrait Guerrière Inca & Maya",
    category: "hueforge",
    categoryLabel: "Hueforge & Art 3D",
    featured: false,
    shortDescription: "Gravure 3D captivante d'une guerrière inca avec coiffe ornementale.",
    description: "Œuvre mettant en valeur la richesse ornementale d'une coiffe traditionnelle et la délicatesse des traits du visage via la superposition micrométrique de filaments.",
    image: "/images/projects/inca.png",
    images: ["/images/projects/inca.png"],
    tiktokUrl: "https://www.tiktok.com/@quentinfaber/video/7440451162706300193",
    tags: ["Inca", "Maya", "Portrait", "Hueforge", "Ornemental"],
    technical: {
      printers: ["Bambu Lab"],
      materials: ["PLA Nuances Minérales", "PLA Noir"],
      software: ["Hueforge", "Bambu Studio"],
      electronics: [],
      layerHeight: "0.08 mm",
      technique: "Hueforge Haute Densité",
      partsCount: 1
    },
    status: "completed",
    model3d: null
  },
  {
    id: "femme",
    slug: "portrait-artistique-feminin",
    title: "Portrait Artistique Féminin",
    category: "hueforge",
    categoryLabel: "Hueforge & Art 3D",
    featured: false,
    shortDescription: "Portrait artistique haute définition avec dégradés subtils de couches.",
    description: "Étude de portrait démontrant la capacité de l'impression 3D FDM à égaler le rendu d'une lithographie fine grâce à la modélisation optique des couches.",
    image: "/images/projects/femme.png",
    images: ["/images/projects/femme.png"],
    tiktokUrl: "https://www.tiktok.com/@quentinfaber/video/7453479188444482838",
    tags: ["Portrait", "Art", "Hueforge", "Finesse", "Décoration"],
    technical: {
      printers: ["Bambu Lab"],
      materials: ["PLA Nuances Artistiques"],
      software: ["Hueforge", "Bambu Studio"],
      electronics: [],
      layerHeight: "0.08 mm",
      technique: "Hueforge Dégradé",
      partsCount: 1
    },
    status: "completed",
    model3d: null
  },
  {
    id: "sauron-helmet",
    slug: "casque-masque-sauron",
    title: "Casque & Masque de Sauron — Grandeur Réelle",
    category: "cosplay",
    categoryLabel: "Cosplay & Sculptures",
    featured: false,
    shortDescription: "Casque d'armure imposant de Sauron avec texture d'acier forgé noir.",
    description: "Casque d'exposition taille réelle aux pointes effilées et aux reliefs ciselés. Assemblage et finition soignée pour reproduire l'armure forgée du Seigneur des Anneaux.",
    image: "/images/projects/sauron-helmet.png",
    images: ["/images/projects/sauron-helmet.png"],
    tiktokUrl: "https://www.tiktok.com/@quentinfaber",
    tags: ["Sauron", "Seigneur des Anneaux", "Cosplay", "Armure", "Grand Format"],
    technical: {
      printers: ["Bambu Lab"],
      materials: ["PLA+", "Peinture & Patine Vieillie"],
      software: ["Bambu Studio"],
      electronics: [],
      layerHeight: "0.16 mm",
      technique: "Impression grand volume & post-traitement",
      partsCount: null
    },
    status: "completed",
    model3d: null
  },
  {
    id: "spider",
    slug: "tableau-araignee-relief-3d",
    title: "Tableau Araignée 3D en Relief",
    category: "hueforge",
    categoryLabel: "Hueforge & Art 3D",
    featured: false,
    shortDescription: "Sculpture en relief 3D d'une mygale émergeant du cadre.",
    description: "Création sculpturale sombre et texturée combinant le rendu de surface Hueforge avec un relief tactile prononcé où les pattes de l'araignée se détachent du fond.",
    image: "/images/projects/spider.png",
    images: ["/images/projects/spider.png"],
    tiktokUrl: "https://www.tiktok.com/@quentinfaber/video/7443681659670613280",
    tags: ["Sculpture", "Relief 3D", "Dark Art", "Hueforge", "Nature"],
    technical: {
      printers: ["Bambu Lab"],
      materials: ["PLA Matte", "PLA Silk Bronze & Charcoal"],
      software: ["Fusion 360", "Hueforge", "Bambu Studio"],
      electronics: [],
      layerHeight: "0.10 mm",
      technique: "Relief 3D / Hueforge",
      partsCount: 1
    },
    status: "completed",
    model3d: null
  },
  {
    id: "pistol",
    slug: "coffret-replique-pistolet-vintage",
    title: "Coffret Réplique Pistolet Vintage & Munitions",
    category: "cosplay",
    categoryLabel: "Cosplay & Sculptures",
    featured: false,
    shortDescription: "Coffret d'exposition avec réplique d'arme rétro et cartouches dorées.",
    description: "Présentoir de collection sur-mesure combinant un écrin usiné et thermoformé avec des pièces mécaniques imprimées en PLA Silk Or et Noir Mat.",
    image: "/images/projects/pistol.png",
    images: ["/images/projects/pistol.png"],
    tiktokUrl: "https://www.tiktok.com/@quentinfaber/video/7295399894670429472",
    tags: ["Réplique", "Vintage", "Coffret", "Collection", "Cosplay"],
    technical: {
      printers: ["Bambu Lab"],
      materials: ["PLA Silk Gold", "PLA Matte Black"],
      software: ["Fusion 360", "Bambu Studio"],
      electronics: [],
      technique: "Impression multi-pièces & finitions de collection",
      partsCount: null
    },
    status: "completed",
    model3d: null
  },
  {
    id: "panthere",
    slug: "sculpture-panthere-noire",
    title: "Sculpture Panthère Noire Grandeur Nature",
    category: "cosplay",
    categoryLabel: "Cosplay & Sculptures",
    featured: false,
    shortDescription: "Impression monumentale en plusieurs sections pour ornement extérieur.",
    description: "Projet de grande envergure réalisé par assemblage de multiples blocs d'impression. Utilisation de matériaux résistants aux intempéries (UV & humidité) pour une installation extérieure.",
    image: "/images/projects/panthere.png",
    images: ["/images/projects/panthere.png"],
    tiktokUrl: "https://www.tiktok.com/@quentinfaber/video/7277241339773865249",
    tags: ["Panthère", "Grand Format", "Extérieur", "Sculpture", "Assemblage"],
    technical: {
      printers: ["VZBot", "Bambu Lab"],
      materials: ["PETG / ASA Résistant UV"],
      software: ["Fusion 360", "Bambu Studio"],
      electronics: [],
      technique: "Impression grand volume multi-pièces & soudure plastique",
      partsCount: null
    },
    status: "completed",
    model3d: null
  }
];
