import React from 'react';
import { ArrowRight, Wrench, Sparkles, Box, CheckCircle2, PlayCircle, Eye } from 'lucide-react';
import { creatorProfile, projectsList } from '../../data/projectsData';
import { vercelProjectsList } from '../../data/vercelProjectsData';
import HeroShowcaseCarousel from './HeroShowcaseCarousel';

export default function HeroStudio({ setActiveTab, onSelectFeaturedProject, onOpenTikTokModal }) {
  return (
    <section className="hero-studio">
      <div className="hero-studio-content">
        {/* Statut Live d'Atelier */}
        <div className="hero-status-pill">
          <span className="pulse-dot" />
          <span>Atelier de Conception & Impression 3D • Quentin Faber</span>
        </div>

        <h1 className="hero-main-title">
          De l'idée numérique <br />
          <span className="hero-title-highlight">à l'objet réel.</span>
        </h1>

        <p className="hero-main-desc">
          Studio personnel de modélisation CAO, tableaux d'art multicouches haute précision, mécanismes robotiques et pièces d'atelier.
        </p>

        {/* Chiffres clés accrocheurs en un coup d'œil */}
        <div className="hero-quick-metrics">
          <div className="quick-metric-item">
            <strong>{projectsList.length}</strong>
            <span>Créations 3D</span>
          </div>
          <div className="quick-metric-divider" />
          <div className="quick-metric-item">
            <strong>{vercelProjectsList.length}</strong>
            <span>Apps Déployées</span>
          </div>
          <div className="quick-metric-divider" />
          <div className="quick-metric-item">
            <strong style={{ color: 'var(--accent-gold)' }}>0.08mm</strong>
            <span>Précision Optique</span>
          </div>
        </div>

        <div className="hero-cta-group">
          <button
            onClick={() => setActiveTab('gallery')}
            className="btn btn-primary btn-lg"
          >
            <span>Explorer les créations 3D</span>
            <ArrowRight style={{ width: 16, height: 16 }} />
          </button>

          <button
            onClick={() => setActiveTab('vercel')}
            className="btn btn-secondary btn-lg"
          >
            <Eye style={{ width: 15, height: 15, color: 'var(--accent-gold)' }} />
            <span>Voir mes 19 projets Web</span>
          </button>
        </div>

        <div className="hero-tags-strip">
          <span className="hero-pill">Fusion 360 CAO</span>
          <span className="hero-pill">Bambu Lab AMS Multicouleur</span>
          <span className="hero-pill">VZBot High-Speed</span>
          <span className="hero-pill">Robotique & Mécatronique</span>
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
