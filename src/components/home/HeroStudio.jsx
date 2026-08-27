import React from 'react';
import { ArrowRight, Wrench, MessageSquare } from 'lucide-react';
import { creatorProfile } from '../../data/projectsData';

export default function HeroStudio({ setActiveTab, onSelectFeaturedProject }) {
  return (
    <section className="hero-studio">
      <div className="hero-studio-content">
        <div className="hero-badge">
          <span>Atelier 3D • Quentin Faber (@quentinfaber)</span>
        </div>

        <h1 className="hero-main-title">
          Conception & Fabrication <br />
          <span className="hero-title-highlight">Impression 3D Réelle</span>
        </h1>

        <p className="hero-main-desc">
          Bienvenue dans mon atelier 3D. Découvrez mes <strong>réalisations concrètes</strong> : tableaux d'art multicouches, projets de modélisation sous Fusion 360, mécanique robotique et pièces d'atelier.
        </p>

        <div className="hero-cta-group">
          <button
            onClick={() => setActiveTab('gallery')}
            className="btn btn-primary btn-lg"
          >
            <span>Voir mes 15 créations</span>
            <ArrowRight style={{ width: 16, height: 16 }} />
          </button>

          <button
            onClick={() => setActiveTab('workshop')}
            className="btn btn-secondary btn-lg"
          >
            <Wrench style={{ width: 15, height: 15, color: 'var(--accent-terracotta)' }} />
            <span>Stock de pièces d'atelier</span>
          </button>
        </div>

        <div className="hero-tags-strip">
          {creatorProfile.workshop.map((item, idx) => (
            <span key={idx} className="hero-pill">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Mosaïque Visuelle Directe avec vos vraies photos */}
      <div className="hero-visual-mosaic">
        <div 
          className="mosaic-card mosaic-main"
          onClick={() => onSelectFeaturedProject('sauron')}
          title="Voir le tableau Sauron"
        >
          <img src="/images/projects/sauron.png" alt="Tableau Sauron" />
          <div className="mosaic-overlay">
            <span className="mosaic-tag">Tableau 3D</span>
            <h4>Tableau Sauron</h4>
          </div>
        </div>

        <div 
          className="mosaic-card mosaic-secondary-1"
          onClick={() => onSelectFeaturedProject('bras-robotique')}
          title="Voir le bras robotique"
        >
          <img src="/images/projects/bras-robotique.png" alt="Bras robotique" />
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
            <span className="mosaic-tag">Art 3D</span>
            <h4>Deadpool</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
