import React from 'react';
import { Sparkles, ArrowRight, Bot, Palette, Cpu, Layers } from 'lucide-react';
import { creatorProfile } from '../../data/projectsData';

export default function HeroStudio({ setActiveTab, onSelectFeaturedProject }) {
  return (
    <section className="hero-studio">
      <div className="hero-studio-content">
        <div className="hero-badge">
          <Sparkles style={{ width: 13, height: 13, color: 'var(--accent-terracotta)' }} />
          <span>Atelier & Studio de Création 3D • Quentin Faber</span>
        </div>

        <h1 className="hero-main-title">
          Des idées numériques. <br />
          <span className="hero-title-highlight">Des objets réels.</span>
        </h1>

        <p className="hero-main-desc">
          Conception CAO paramétrique, tableaux d'art multicouches <strong>Hueforge</strong> haute définition, prototypes mécatroniques et fabrication additive de précision.
        </p>

        <div className="hero-cta-group">
          <button
            onClick={() => setActiveTab('gallery')}
            className="btn btn-primary btn-lg"
          >
            <span>Explorer les créations</span>
            <ArrowRight style={{ width: 16, height: 16 }} />
          </button>

          <button
            onClick={() => setActiveTab('customizer')}
            className="btn btn-secondary btn-lg"
          >
            <Sparkles style={{ width: 15, height: 15, color: 'var(--accent-terracotta)' }} />
            <span>Créer un projet sur-mesure</span>
          </button>
        </div>

        <div className="hero-tags-strip">
          {creatorProfile.specialties.map((spec, idx) => (
            <span key={idx} className="hero-pill">
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Mosaïque Visuelle de Réalisations Réelles */}
      <div className="hero-visual-mosaic">
        <div 
          className="mosaic-card mosaic-main"
          onClick={() => onSelectFeaturedProject('sauron')}
          title="Voir le tableau Sauron"
        >
          <img src="/images/projects/sauron.png" alt="Tableau Sauron Hueforge" />
          <div className="mosaic-overlay">
            <span className="mosaic-tag">Hueforge Art</span>
            <h4>Tableau Sauron</h4>
          </div>
        </div>

        <div 
          className="mosaic-card mosaic-secondary-1"
          onClick={() => onSelectFeaturedProject('bras-robotique')}
          title="Voir le bras robotique"
        >
          <img src="/images/projects/bras-robotique.png" alt="Bras robotique articulé" />
          <div className="mosaic-overlay">
            <span className="mosaic-tag" style={{ background: 'var(--accent-sage-subtle)', color: 'var(--accent-sage)' }}>Mécatronique</span>
            <h4>Bras Robotique</h4>
          </div>
        </div>

        <div 
          className="mosaic-card mosaic-secondary-2"
          onClick={() => onSelectFeaturedProject('deadpool')}
          title="Voir le tableau Deadpool"
        >
          <img src="/images/projects/dead-pool.png" alt="Tableau Deadpool" />
          <div className="mosaic-overlay">
            <span className="mosaic-tag">Art Multicouche</span>
            <h4>Deadpool</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
