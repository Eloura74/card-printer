import React from 'react';
import { Cpu, Layers, Wrench, Sparkles, Box, CheckCircle } from 'lucide-react';

export default function ExpertisePillars({ setActiveTab }) {
  const pillars = [
    {
      id: 'concevoir',
      icon: <Box style={{ width: 22, height: 22, color: 'var(--accent-fjord)' }} />,
      tag: 'Conception CAO',
      title: 'CONCEVOIR',
      desc: 'Modélisation paramétrique sous Fusion 360, calcul de tolérances mécaniques, cinématique et prototypage fonctionnel sur-mesure.',
      points: ['Fusion 360', 'Modélisation paramétrique', 'Cinématique & assemblages']
    },
    {
      id: 'fabriquer',
      icon: <Layers style={{ width: 22, height: 22, color: 'var(--accent-terracotta)' }} />,
      tag: 'Fabrication Additive',
      title: 'FABRIQUER',
      desc: 'Superposition multicouches Hueforge au 0.08 mm, lithophanies, extrusion haut débit et maîtrise des polymères techniques.',
      points: ['Hueforge haute fidélité', 'PLA / PETG / ASA / TPU', 'Bambu AMS & VZBot High-Flow']
    },
    {
      id: 'assembler',
      icon: <Cpu style={{ width: 22, height: 22, color: 'var(--accent-sage)' }} />,
      tag: 'Mécatronique & Lab',
      title: 'ASSEMBLER',
      desc: 'Intégration d’électronique embarquée, servomoteurs asservis, microcontrôleurs Arduino/Raspberry Pi et mécanismes articulés.',
      points: ['Robotique & prothèses bioniques', 'Bus CAN & Klipper', 'Électronique embarquée']
    }
  ];

  return (
    <section className="expertise-section">
      <div className="section-header-compact">
        <span className="section-eyebrow">Studio & Savoir-faire</span>
        <h2 className="section-heading">L'Approche Atelier : De la CAO à l'Objet Réel</h2>
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
