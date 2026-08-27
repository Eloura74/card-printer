import React from 'react';
import { Box, Layers, Wrench, CheckCircle } from 'lucide-react';

export default function ExpertisePillars() {
  const pillars = [
    {
      id: 'cao',
      icon: <Box style={{ width: 22, height: 22, color: 'var(--accent-fjord)' }} />,
      tag: 'Conception',
      title: 'MODÉLISATION CAO',
      desc: 'Création de pièces et mécanismes sous Fusion 360 : pièces fonctionnelles, tolérances d\'emboîtement et assemblages articulés.',
      points: ['Modélisation sous Fusion 360', 'Pièces mécaniques & structures', 'Adaptations sur-mesure']
    },
    {
      id: 'impression',
      icon: <Layers style={{ width: 22, height: 22, color: 'var(--accent-terracotta)' }} />,
      tag: 'Fabrication',
      title: 'IMPRESSION 3D FDM',
      desc: 'Superposition fine de couches pour tableaux d\'art, impression multi-filaments (Bambu Lab AMS) et pièces grand format.',
      points: ['Tableaux multicouches', 'Multi-matériaux (PLA, PETG, ASA, TPU)', 'Impression haute précision']
    },
    {
      id: 'meca',
      icon: <Wrench style={{ width: 22, height: 22, color: 'var(--accent-sage)' }} />,
      tag: 'Atelier & Robotique',
      title: 'MÉCANIQUE & ROBOTIQUE',
      desc: 'Assemblage de prototypes articulés (bras robotique, main bionique) et gestion d\'un stock de pièces techniques pour l\'atelier.',
      points: ['Systèmes articulés & tendons', 'Composants & pièces disponibles', 'Maintenance de machines 3D']
    }
  ];

  return (
    <section className="expertise-section">
      <div className="section-header-compact">
        <span className="section-eyebrow">Méthodes de travail</span>
        <h2 className="section-heading">Comment je conçois et fabrique à l'Atelier</h2>
      </div>

      <div className="expertise-grid">
        {pillars.map((p) => (
          <div key={p.id} className="expertise-card">
            <div className="expertise-icon-box">
              {p.icon}
            </div>
            <span className="expertise-tag">{p.tag}</span>
            <h3 className="expertise-title">{p.title}</h3>
            <p className="expertise-desc">{p.desc}</p>
            <ul className="expertise-points">
              {p.points.map((pt, i) => (
                <li key={i}>
                  <CheckCircle style={{ width: 13, height: 13, color: 'var(--accent-terracotta)' }} />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
