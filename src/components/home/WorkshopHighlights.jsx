import React from 'react';
import { Palette, Bot, Box, Cloud, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { projectsList } from '../../data/projectsData';
import { vercelProjectsList } from '../../data/vercelProjectsData';

export default function WorkshopHighlights({ setActiveTab, onSelectProject }) {
  const universes = [
    {
      id: 'art',
      title: "Tableaux d'Art Multicouches",
      subtitle: "Superposition optique au 0.08 mm",
      desc: "Portraits et scènes cultes (Sauron, Luffy, Deadpool, Gandalf, Pikachu) réalisés par fusion de nuances de filaments sans peinture.",
      image: "/images/projects/sauron.png",
      tag: "Hueforge Art",
      count: `${projectsList.filter(p => p.category === 'art').length} Créations`,
      actionTab: 'gallery'
    },
    {
      id: 'robotics',
      title: "Mécatronique & Robotique",
      subtitle: "Cinématique & Modélisation CAO",
      desc: "Bras robotisé articulé multi-axes et main bionique à tendons imprimés sous Fusion 360 et assemblés à l'atelier.",
      image: "/images/projects/bras-robotique.png",
      tag: "Ingénierie & Lab",
      count: `${projectsList.filter(p => p.category === 'robotics').length} Prototypes`,
      actionTab: 'gallery'
    },
    {
      id: 'cosplay',
      title: "Cosplay & Sculptures Monumentales",
      subtitle: "Grand volume & Résistance",
      desc: "Casque grandeur nature de Sauron, sculpture de Panthère Noire extérieure et répliques d'exposition soignées.",
      image: "/images/projects/sauron-helmet.png",
      tag: "Cosplay & Déco",
      count: `${projectsList.filter(p => p.category === 'cosplay').length} Pièces`,
      actionTab: 'gallery'
    },
    {
      id: 'vercel',
      title: "Développements Web & Cloud",
      subtitle: "19 Applications Vercel",
      desc: "Applications interactives, gestionnaires d'inventaire, dashboards domotiques et plateformes React hébergées sur le Cloud.",
      image: "/images/projects/dead-pool.png",
      tag: "Cloud & Dev",
      count: `${vercelProjectsList.length} Déploiements`,
      actionTab: 'vercel'
    }
  ];

  return (
    <section className="highlights-universe-section">
      <div className="section-header-compact">
        <span className="section-eyebrow">Les 4 Univers du Studio</span>
        <h2 className="section-heading">Ce que je conçois & fabrique</h2>
        <p className="section-subtext">
          Chaque projet est conçu de zéro à l'Atelier : de la modélisation 3D à l'impression FDM haute précision et au code.
        </p>
      </div>

      <div className="universe-grid">
        {universes.map((univ) => (
          <div
            key={univ.id}
            className="universe-card card"
            onClick={() => setActiveTab(univ.actionTab)}
            style={{ cursor: 'pointer' }}
          >
            <div className="universe-image-wrapper">
              <img src={univ.image} alt={univ.title} className="universe-img" />
              <div className="universe-overlay">
                <span className="card-tag cyan">{univ.tag}</span>
                <span className="universe-count-badge">{univ.count}</span>
              </div>
            </div>

            <div className="universe-body">
              <span style={{ fontSize: '0.74rem', color: 'var(--accent-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {univ.subtitle}
              </span>
              <h3 className="universe-title">{univ.title}</h3>
              <p className="universe-desc">{univ.desc}</p>
            </div>

            <div className="universe-footer">
              <span className="card-action-link">
                <span>Explorer cet univers</span>
                <ArrowRight style={{ width: 14, height: 14 }} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
