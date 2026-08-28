/**
 * Données réelles des déploiements Vercel de Quentin Faber (@Eloura74)
 * Enrichies avec les fonctionnalités clés, l'architecture et les spécifications techniques.
 */

export const vercelProfile = {
  accountName: "Quentin Faber (faberquentingmailcom)",
  vercelUrl: "https://vercel.com/faberquentingmailcoms-projects",
  githubUrl: "https://github.com/Eloura74",
  bio: "Développements d'applications web modernes, outils d'atelier, gestionnaires de stock et plateformes interactives déployées sur Vercel Cloud."
};

export const vercelProjectsList = [
  {
    id: "card-printer",
    title: "FoxtrottQuebec 3D Design",
    category: "tools",
    categoryLabel: "Atelier 3D & Vitrine",
    iconType: "printer",
    framework: "React 18 • Vite",
    accessType: "public",
    domain: "card-printer-one.vercel.app",
    url: "https://card-printer-one.vercel.app",
    repoUrl: "https://github.com/Eloura74/card-printer",
    purpose: "Portfolio interactif & catalogue d'atelier 3D en temps réel",
    description: "Site vitrine et catalogue d'atelier 3D complet : exposition des 15 réalisations artistiques, fiches techniques de fabrication, modale TikTok et inventaire de pièces détachées.",
    highlights: [
      "Showcase interactif avec carrousel dynamique & filtres multi-catégories",
      "Fiches techniques d'impression FDM (vitesses, couches, filaments)",
      "Gestionnaire de stock atelier avec système de réservation direct"
    ],
    architecture: {
      stack: "React 18, Vite, Vanilla CSS Design System, Lucide Icons",
      state: "React Hooks, URL Hash State Sync (Navigation historique)",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["React", "Vite", "3D Studio", "Catalogue", "Responsive"]
  },
  {
    id: "inventory",
    title: "StockFlow Inventory App",
    category: "tools",
    categoryLabel: "Outils & Logistique",
    iconType: "boxes",
    framework: "React • Location Engine",
    accessType: "auth_required",
    domain: "inventory-sand-iota.vercel.app",
    url: "https://inventory-sand-iota.vercel.app",
    repoUrl: "https://github.com/Eloura74/Inventory",
    purpose: "Gestion et traçabilité de stock matériel par emplacements et racks",
    description: "Application professionnelle de gestion logistique d'atelier : suivi des niveaux de stock, seuils d'alerte critiques, attribution des zones de stockage et gestion des mouvements.",
    highlights: [
      "Suivi des articles par catégories (Audio, Éclairage, Vidéo, Câbles, Flight Cases)",
      "Indicateurs de niveaux de stock min/max avec alertes visuelles d'indisponibilité",
      "Module d'export de catalogue en CSV et génération de fiches PDF"
    ],
    architecture: {
      stack: "React, LocalStorage/State, Modular UI, Export Engines",
      state: "Admin Context & Local Records Management",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["Inventory", "Logistics", "Export CSV", "Location Tracking", "Admin"]
  },
  {
    id: "lumi-stock",
    title: "LumiStock Événementiel",
    category: "tools",
    categoryLabel: "Outils & Logistique",
    iconType: "lamp",
    framework: "React • Modal Buy Engine",
    accessType: "auth_required",
    domain: "lumi-stock.vercel.app",
    url: "https://lumi-stock.vercel.app",
    repoUrl: "https://github.com/Eloura74/LumiStock",
    purpose: "Gestion de parc de projecteurs, éclairages de scène et consommables",
    description: "Interface spécialisée pour la gestion de matériel d'éclairage et projecteurs de scène avec modales de réservation rapide et calculs de disponibilité.",
    highlights: [
      "Organisation par familles de matériel scénique et d'éclairage",
      "Système de modales d'achat et réservation d'équipements",
      "Contrôle des stocks restants et suivi des sorties de parc"
    ],
    architecture: {
      stack: "React, CSS Modules, State Reducers",
      state: "Local State & Protected Mutations",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["Lighting", "Stock", "Modal UX", "Equipment Manager"]
  },
  {
    id: "stock-elec",
    title: "StockElec Composants Beta",
    category: "tools",
    categoryLabel: "Outils & Électronique",
    iconType: "zap",
    framework: "Next.js / React",
    accessType: "auth_required",
    domain: "stock-elec-beta.vercel.app",
    url: "https://stock-elec-beta.vercel.app",
    repoUrl: "https://github.com/Eloura74/StockElec",
    purpose: "Comptabilité et gestion de composants électroniques & domotiques",
    description: "Application de gestion d'inventaire électronique avec valorisation financière des composants (modules, relais, câbles, borniers) et dashboard de suivi atelier.",
    highlights: [
      "Tableau de bord de valorisation financière du stock de composants",
      "Fiches techniques par référence de fabricant et tolérance électrique",
      "Calcul des coûts de revient par sous-ensemble de projet"
    ],
    architecture: {
      stack: "Next.js / React, Serverless API Routes, CSS Components",
      state: "Admin Dashboard State",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["Electronics", "Components", "Dashboard", "Cost Calculator"]
  },
  {
    id: "planning-photo",
    title: "Planning Photo Studio",
    category: "tools",
    categoryLabel: "Outils & Organisation",
    iconType: "camera",
    framework: "React • Dashboard Calendar",
    accessType: "auth_required",
    domain: "planning-photo.vercel.app",
    url: "https://planning-photo.vercel.app",
    repoUrl: "https://github.com/Eloura74/planningPhoto",
    purpose: "Planification et suivi d'agenda de séances de prises de vue",
    description: "Plateforme d'organisation pour photographes et studios : gestion du calendrier des séances, fiches clients, créneaux horaires et affectation du matériel.",
    highlights: [
      "Calendrier interactif avec vue par jour, semaine et type de shooting",
      "Fiches de préparation de séances et checklist de matériel photo",
      "Espace administrateur protégé pour la gestion des disponibilités"
    ],
    architecture: {
      stack: "React, Calendar Hooks, Modern UI Layouts",
      state: "Calendar State & Protected Booking Data",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["Photography", "Calendar", "Planning", "Admin Portal"]
  },
  {
    id: "traker-dart",
    title: "Traker Dart Master",
    category: "tools",
    categoryLabel: "Outils & Jeux",
    iconType: "target",
    framework: "React • Real-time Scoring",
    accessType: "public",
    domain: "traker-dart.vercel.app",
    url: "https://traker-dart.vercel.app",
    repoUrl: "https://github.com/Eloura74/TrakerDart",
    purpose: "Calculateur de scores et statistiques de volées pour jeu de fléchettes",
    description: "Application interactive et responsive pour arbitrer et suivre les parties de fléchettes (301, 501, Cricket) avec calcul automatique des moyennes et suggestions de finish.",
    highlights: [
      "Calcul instantané des points restants et historique des volées par joueur",
      "Suggestions intelligentes de fermetures (Checkouts / Doubles)",
      "Statistiques de moyennes par tour (PPD / MPR) et graphiques d'évolution"
    ],
    architecture: {
      stack: "React, Local Storage, Dynamic Game Engine",
      state: "Game Loop & Multi-player Score State",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["Game Tracker", "Darts", "Realtime Calculation", "Interactive UI"]
  },
  {
    id: "meteo-maps",
    title: "Météo Maps Interactive",
    category: "data",
    categoryLabel: "Données & Météo",
    iconType: "cloud-sun",
    framework: "React • Leaflet & Open-Meteo",
    accessType: "public",
    domain: "meteo-maps.vercel.app",
    url: "https://meteo-maps.vercel.app",
    repoUrl: "https://github.com/Eloura74/MeteoMaps",
    purpose: "Cartographie interactive des prévisions météorologiques en temps réel",
    description: "Application cartographique combinant l'API Leaflet et des flux de données météo en direct pour explorer températures, vents, précipitations et prévisions à 7 jours.",
    highlights: [
      "Carte géographique interactive avec tuiles dynamiques et marqueurs météo",
      "Géolocalisation automatique et recherche de villes mondiales",
      "Affichage des prévisions horaires, indices UV, humidité et vitesse du vent"
    ],
    architecture: {
      stack: "React, Leaflet Map Engine, Open-Meteo API, Geocoding Service",
      state: "Map Coordinates & Live Weather Fetching",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["Maps", "Leaflet", "Weather API", "Geolocation", "Data Viz"]
  },
  {
    id: "let-s-cook",
    title: "Let's Cook (Gold Edition)",
    category: "food",
    categoryLabel: "Culinaire & Recettes",
    iconType: "utensils",
    framework: "React • Culinary Engine",
    accessType: "public",
    domain: "let-s-cook-gold.vercel.app",
    url: "https://let-s-cook-gold.vercel.app",
    repoUrl: "https://github.com/Eloura74/Let-s-cook",
    purpose: "Plateforme culinaire guidée avec recherche intelligente d'ingrédients",
    description: "Application de cuisine moderne offrant une expérience fluide pour découvrir des recettes, ajuster les portions dynamiquement et suivre les étapes de cuisson pas-à-pas.",
    highlights: [
      "Moteur de recherche par ingrédients disponibles dans le frigo",
      "Calculateur dynamique des quantités en fonction du nombre de convives",
      "Mode de lecture étape par étape optimisé pour tablette en cuisine"
    ],
    architecture: {
      stack: "React, Modern CSS, Responsive Kitchen View",
      state: "Recipe Filters & Dynamic Portions Calculator",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["Cooking", "Recipes", "Dynamic Portions", "Food Hub"]
  },
  {
    id: "lets-cook-recipes",
    title: "Let's Cook Recipes Hub",
    category: "food",
    categoryLabel: "Culinaire & Recettes",
    iconType: "book-open",
    framework: "React • Responsive Catalog",
    accessType: "public",
    domain: "lets-cook-recipes.vercel.app",
    url: "https://lets-cook-recipes.vercel.app",
    repoUrl: "https://github.com/Eloura74/Lets-s_Cook_Recipes",
    purpose: "Catalogue thématique de recettes avec filtres de préparation",
    description: "Bibliothèque gourmande organisée par thématiques (entrées, plats, desserts, végétarien) avec temps de cuisson, indices de difficulté et astuces du chef.",
    highlights: [
      "Filtrage multicritères (temps de préparation, niveau de difficulté, régime)",
      "Fiches recettes complètes avec liste des ingrédients à cocher",
      "Interface réactive pensée pour smartphone et ordinateur"
    ],
    architecture: {
      stack: "React, Grid Layout, Custom Checklists",
      state: "Recipe Catalog & Category State",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["Recipes", "Filters", "Cooking Steps", "Responsive UI"]
  },
  {
    id: "lets_cook_react_end",
    title: "Let's Cook React V5 Final",
    category: "food",
    categoryLabel: "Culinaire & Recettes",
    iconType: "sparkles",
    framework: "React 18 • Vite Architecture",
    accessType: "public",
    domain: "letscookreactend.vercel.app",
    url: "https://letscookreactend.vercel.app",
    repoUrl: "https://github.com/Eloura74/lets-cook-v5",
    purpose: "Version finale ultra-rapide avec state management optimisé",
    description: "Évolution majeure de la suite culinaire développée sous Vite et React 18 : chargement instantané, transitions fluides et gestion des favoris persistants.",
    highlights: [
      "Performance maximale avec bundle Vite allégé et rendu optimisé",
      "Système de favoris sauvegardé localement sans rechargement de page",
      "Design épuré en mode sombre/lumineux avec contrastes soignés"
    ],
    architecture: {
      stack: "React 18, Vite Bundler, Custom Hooks, Local Storage Cache",
      state: "Fast React Hooks & Memoized Filters",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["React 18", "Vite", "High Performance", "Favorites"]
  },
  {
    id: "wine-site",
    title: "Wine Site Collection",
    category: "food",
    categoryLabel: "Culinaire & Terroir",
    iconType: "wine",
    framework: "Web App • Burger Nav",
    accessType: "public",
    domain: "wine-site-plum.vercel.app",
    url: "https://wine-site-plum.vercel.app",
    repoUrl: "https://github.com/Eloura74/WineSite",
    purpose: "Vitrine caviste et guide de dégustation de cépages d'exception",
    description: "Site vitrine élégant dédié à l'œnologie : présentation des domaines, notes de dégustation, accords mets & vins et accords de garde.",
    highlights: [
      "Fiches de dégustation détaillées par région viticole et millésime",
      "Guide des accords mets & vins interactif",
      "Navigation mobile intuitive avec menu burger fluide"
    ],
    architecture: {
      stack: "HTML5, CSS3 Glassmorphism, Vanilla JS / Web Components",
      state: "Responsive UI State",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["Wine", "Oenology", "Gastronomy", "Design Vitrine"]
  },
  {
    id: "beer-craft-ecf",
    title: "Beer Craft ECF Brasserie",
    category: "food",
    categoryLabel: "Culinaire & Terroir",
    iconType: "beer",
    framework: "React • Bières & Brassage",
    accessType: "public",
    domain: "beer-craft-ecf.vercel.app",
    url: "https://beer-craft-ecf.vercel.app",
    repoUrl: "https://github.com/Eloura74/BeerCraftEcf",
    purpose: "Catalogue de bières artisanales et fiches de styles brassicoles",
    description: "Application dédiée à l'artisanat brassicole : analyse des styles de bières (IPA, Stout, Sour, Blonde), degrés d'amertume IBU, types de houblons et profils aromatiques.",
    highlights: [
      "Classification par styles de fermentation, couleur EBC et amertume IBU",
      "Fiches produits détaillées avec notes aromatiques et température de service",
      "Base de données de brassage accessible avec filtres dynamiques"
    ],
    architecture: {
      stack: "React, Styled Components, Brewing Metrics Data Model",
      state: "Brewery Catalog State",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["Craft Beer", "Brewing", "IBU / EBC Metrics", "Catalog"]
  },
  {
    id: "portfolio-informatique",
    title: "Portfolio Informatique & Linux",
    category: "portfolio",
    categoryLabel: "Portfolios & Stacks",
    iconType: "terminal",
    framework: "Web • Docker & DevOps",
    accessType: "public",
    domain: "portfolio-informatique.vercel.app",
    url: "https://portfolio-informatique.vercel.app",
    repoUrl: "https://github.com/Eloura74/Portfolio_Informatique",
    purpose: "CV et vitrine des compétences informatiques, serveurs et code",
    description: "Portfolio technique de Quentin Faber présentant l'ensemble de ses compétences en programmation, administration système Linux, conteneurisation Docker et projets logiciels.",
    highlights: [
      "Matrice complète des compétences (Frontend, Backend, DevOps, Hardware)",
      "Section dédiée à l'environnement d'atelier et serveurs locaux",
      "Architecture de navigation moderne avec thème tech"
    ],
    architecture: {
      stack: "React, Web Architecture, Docker Integration Specs",
      state: "Static / Optimized SPA",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["Portfolio", "DevOps", "Docker", "Linux", "FullStack"]
  },
  {
    id: "portfolio-general",
    title: "Portfolio Topaz 3D & Web",
    category: "portfolio",
    categoryLabel: "Portfolios & Stacks",
    iconType: "layout",
    framework: "React • 3D Showcase",
    accessType: "public",
    domain: "portfolio-topaz-zeta-53.vercel.app",
    url: "https://portfolio-topaz-zeta-53.vercel.app",
    repoUrl: "https://github.com/Eloura74/portfolio",
    purpose: "Galerie visuelle de conceptions 3D et réalisations graphiques",
    description: "Vitrine graphique interactive axée sur la mise en valeur de créations visuelles, rendus 3D et interfaces numériques avec effets de transitions soignés.",
    highlights: [
      "Galerie d'images et rendus 3D avec zoom et affichage modal",
      "Animations de défilement et mise en page responsive fluide",
      "Structure modulaire de composants React réutilisables"
    ],
    architecture: {
      stack: "React, CSS Transitions, Responsive Image Showcase",
      state: "Gallery Selection State",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["3D Visuals", "Design Showcase", "React", "Portfolio"]
  },
  {
    id: "city-fun",
    title: "City Fun Guide Urbain",
    category: "portfolio",
    categoryLabel: "Loisirs & Tourisme",
    iconType: "compass",
    framework: "Web App • Exploration",
    accessType: "public",
    domain: "city-fun.vercel.app",
    url: "https://city-fun.vercel.app",
    repoUrl: "https://github.com/Eloura74/CityFun",
    purpose: "Guide interactif d'activités, sorties et découvertes urbaines",
    description: "Plateforme interactive pour explorer les points d'intérêt, parcs, restaurants, loisirs et événements d'une métropole avec filtres par ambiance.",
    highlights: [
      "Fiches détaillées par type d'activité (culture, détente, gastronomie)",
      "Interface visuelle attrayante avec galerie de photos de lieux",
      "Filtres rapides selon la météo et le moment de la journée"
    ],
    architecture: {
      stack: "React, Modern CSS3 Grid, Exploration Data Layer",
      state: "City Filter State",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["City Guide", "Tourism", "Interactive Map", "Leisure"]
  },
  {
    id: "au-jardin-de-la-princesse",
    title: "Au Jardin de la Princesse",
    category: "portfolio",
    categoryLabel: "Boutique & Artisanat",
    iconType: "flower",
    framework: "React • Admin Sarah",
    accessType: "auth_required",
    domain: "au-jardin-de-la-princesse.vercel.app",
    url: "https://au-jardin-de-la-princesse.vercel.app",
    repoUrl: "https://github.com/Eloura74/Au_Jardin_De_La_Princesse",
    purpose: "Vitrine artisanale et panel d'administration pour compositions florales",
    description: "Site vitrine poétique et interface d'administration dédiée aux créations florales, décorations artisanales et commandes personnalisées.",
    highlights: [
      "Galerie de présentations des compositions florales et bouquets",
      "Espace administrateur sécurisé pour la mise à jour des collections",
      "Formulaire de demande de devis et contact événementiel"
    ],
    architecture: {
      stack: "React, Secured Admin Panel, Romantic Glass Theme",
      state: "Admin Protected State & Public Showcase",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["Floral Shop", "Artisanat", "Admin Panel", "E-Vitrine"]
  },
  {
    id: "to-do-list",
    title: "TaskFlow To-Do List",
    category: "tools",
    categoryLabel: "Outils & Productivité",
    iconType: "check-square",
    framework: "CSS v3 • Task Manager",
    accessType: "public",
    domain: "to-do-list-roan-mu.vercel.app",
    url: "https://to-do-list-roan-mu.vercel.app",
    repoUrl: "https://github.com/Eloura74/To-Do-List",
    purpose: "Gestionnaire de tâches rapide avec persistance locale et filtres",
    description: "Outil de productivité léger et immédiat permettant d'ajouter, classer par priorité, cocher et filtrer les tâches quotidiennes avec persistance automatique.",
    highlights: [
      "Persistance automatique des tâches dans le LocalStorage sans serveur",
      "Filtres rapides : Toutes, En cours, Terminées, Priorité haute",
      "Suppression et édition instantanée avec animations de validation"
    ],
    architecture: {
      stack: "Vanilla JS / React, HTML5 LocalStorage, CSS3 Transitions",
      state: "Local Storage Task Collection",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["Productivity", "Tasks", "LocalStorage", "Instant UI"]
  },
  {
    id: "to-do-list-2",
    title: "To-Do List Theme Edition",
    category: "tools",
    categoryLabel: "Outils & Productivité",
    iconType: "palette",
    framework: "CSS v3 • Theming System",
    accessType: "public",
    domain: "to-do-list-2-pink.vercel.app",
    url: "https://to-do-list-2-pink.vercel.app",
    repoUrl: "https://github.com/Eloura74/To-Do-List",
    purpose: "Gestionnaire de tâches avec moteur de thèmes visuels dynamiques",
    description: "Variante stylisée du gestionnaire de tâches intégrant un sélecteur de palettes de couleurs dynamiques et une ergonomie personnalisable.",
    highlights: [
      "Moteur de thèmes visuels avec changement instantané des variables CSS",
      "Comptage dynamique des tâches restantes et pourcentage de complétion",
      "Ergonomie ultra-accessible pour mobile et tablette"
    ],
    architecture: {
      stack: "CSS Variables Engine, JavaScript Task Engine",
      state: "Theme State & Local Storage Sync",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["Theming", "CSS Variables", "Productivity", "Custom UI"]
  },
  {
    id: "nfc-15-100",
    title: "Guide Norme NFC 15-100",
    category: "data",
    categoryLabel: "Données & Normes",
    iconType: "shield-check",
    framework: "Web App • Mémo Élec",
    accessType: "public",
    domain: "nfc-15-100.vercel.app",
    url: "https://nfc-15-100.vercel.app",
    repoUrl: "https://github.com/Eloura74/NFC15-100",
    purpose: "Aide-mémoire interactif des règles et sections de câblage électrique",
    description: "Outil technique de référence pour les électriciens et techniciens d'atelier : calcul des sections de câbles, calibres de disjoncteurs, volumes de salle de bain et règles NFC 15-100.",
    highlights: [
      "Tableau interactif des calibres de disjoncteurs (10A, 16A, 20A, 32A) par usage",
      "Règles d'implantation des prises et circuits spécialisés (four, plaques, prises)",
      "Guide des volumes de sécurité électrique (Volume 0, 1, 2) pour pièces d'eau"
    ],
    architecture: {
      stack: "Interactive Tech Tables, Quick Reference Search, Responsive UI",
      state: "Standards Lookup Layer",
      hosting: "Vercel Cloud Edge"
    },
    tags: ["Electrical Standards", "NFC 15-100", "Tech Reference", "Workshop Tool"]
  }
];
