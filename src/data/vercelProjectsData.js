/**
 * Données des projets Web & Déploiements Vercel de Quentin Faber
 */

export const vercelProfile = {
  accountName: "Quentin Faber (faberquentingmailcom)",
  vercelUrl: "https://vercel.com/faberquentingmailcoms-projects",
  githubUrl: "https://github.com/Eloura74",
  bio: "Déploiements d'applications web modernes, interfaces de monitoring, outils d'atelier et plateformes React / Vite hébergées sur l'infrastructure Vercel Edge Network."
};

export const vercelProjectsList = [
  {
    id: "card-printer",
    title: "FoxtrottQuebec 3D Design — Studio Web",
    framework: "React • Vite",
    status: "Production • En Ligne",
    domain: "card-printer.vercel.app",
    url: "https://card-printer.vercel.app",
    repoUrl: "https://github.com/Eloura74/card-printer",
    description: "Plateforme vitrine et catalogue d'atelier 3D en temps réel : galeries de réalisations haute définition, fiches techniques d'impression et gestionnaire de stock de pièces.",
    tags: ["React 18", "Vite", "Vercel", "CSS Modern Design", "Responsive"],
    iconColor: "cyan"
  },
  {
    id: "stock-manager-3d",
    title: "Gestionnaire d'Inventaire & Pièces Atelier 3D",
    framework: "React • JSON Database",
    status: "Déployé",
    domain: "stock-3d-app.vercel.app",
    url: "https://vercel.com/faberquentingmailcoms-projects",
    repoUrl: "https://github.com/Eloura74",
    description: "Application web d'organisation et de traçabilité des pièces d'impression 3D (buses Bambu Lab, sondes Klicky, modules CAN bus, quincaillerie technique).",
    tags: ["React", "Inventory System", "Vercel Edge", "Vite"],
    iconColor: "emerald"
  },
  {
    id: "jarvis-monitoring",
    title: "Interface de Contrôle & Domotique J.A.R.V.I.S.",
    framework: "Web Dashboard • IoT",
    status: "Projet Actif",
    domain: "jarvis-atelier.vercel.app",
    url: "https://vercel.com/faberquentingmailcoms-projects",
    repoUrl: "https://github.com/Eloura74",
    description: "Dashboard web interactif inspiré de J.A.R.V.I.S. pour la télémétrie d'atelier, le monitoring des impressions 3D et le contrôle d'équipements connectés.",
    tags: ["Dashboard", "IoT", "Telemetry", "WebSockets", "Dark UI"],
    iconColor: "indigo"
  }
];
