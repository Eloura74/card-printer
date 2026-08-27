import React from 'react';
import { ArrowRight, Wrench, Sparkles } from 'lucide-react';
import { creatorProfile } from '../../data/projectsData';
import HeroShowcaseCarousel from './HeroShowcaseCarousel';

export default function HeroStudio({ setActiveTab, onSelectFeaturedProject, onOpenTikTokModal }) {
  return (
    <section className="hero-studio">
      <div className="hero-studio-content">
        <div className="hero-badge">
          <Sparkles style={{ width: 12, height: 12, color: 'var(--accent-gold)' }} />
          <span>Atelier 3D • Quentin Faber (@quentinfaber)</span>
        </div>

        <h1 className="hero-main-title">
          Conception & Fabrication <br />
          <span className="hero-title-highlight">Impression 3D Réelle</span>
        </h1>

        <p className="hero-main-desc">
          Bienvenue dans mon atelier 3D. Découvrez mes <strong>réalisations concrètes</strong> : tableaux d'art multicouches, modélisations sous Fusion 360, mécanique robotique et pièces d'atelier.
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
            <Wrench style={{ width: 15, height: 15, color: 'var(--accent-gold)' }} />
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

      {/* Carrousel Dynamique Showcase de l'Atelier */}
      <HeroShowcaseCarousel
        onSelectProject={(project) => onSelectFeaturedProject(project.id)}
        onOpenTikTokModal={onOpenTikTokModal}
      />
    </section>
  );
}
