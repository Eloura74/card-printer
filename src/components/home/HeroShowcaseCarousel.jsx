import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, PlayCircle, Sparkles, ArrowRight, Layers } from 'lucide-react';
import { projectsList } from '../../data/projectsData';

export default function HeroShowcaseCarousel({ onSelectProject, onOpenTikTokModal }) {
  // Sélection des 6 créations phares les plus emblématiques
  const showcaseProjects = projectsList.filter(p => 
    ['sauron', 'bras-robotique', 'deadpool', 'main-robotique', 'luffy', 'sauron-helmet'].includes(p.id)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play fluide toutes les 4.5 secondes (avec pause au survol de la souris)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseProjects.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, showcaseProjects.length]);

  const currentProject = showcaseProjects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseProjects.length) % showcaseProjects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseProjects.length);
  };

  return (
    <div 
      className="hero-carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carte Principale du Carrousel avec Effet de Verre & Éclairage Spotlight */}
      <div 
        className="hero-carousel-slide"
        onClick={() => onSelectProject(currentProject)}
        style={{ cursor: 'pointer' }}
      >
        <img
          key={currentProject.id}
          src={currentProject.image}
          alt={currentProject.title}
          className="hero-carousel-img"
        />

        {/* Halo d'Ombre et Informations en Surimpression */}
        <div className="hero-carousel-overlay">
          <div className="hero-carousel-badge-row">
            <span className="card-tag cyan">
              <Sparkles style={{ width: 11, height: 11 }} /> {currentProject.categoryLabel}
            </span>
            <span className="hero-carousel-counter">
              {currentIndex + 1} / {showcaseProjects.length}
            </span>
          </div>

          <h3 className="hero-carousel-title">{currentProject.title}</h3>
          <p className="hero-carousel-desc">{currentProject.description}</p>

          <div className="hero-carousel-actions">
            {currentProject.tiktokUrl && (
              <button
                type="button"
                className="btn-tiktok-compact"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenTikTokModal(currentProject);
                }}
              >
                <PlayCircle style={{ width: 14, height: 14, color: 'var(--accent-gold)' }} />
                <span>Voir vidéo TikTok</span>
              </button>
            )}

            <span className="card-action-link" style={{ fontSize: '0.8rem' }}>
              <span>Détails & Specs</span>
              <ArrowRight style={{ width: 13, height: 13 }} />
            </span>
          </div>
        </div>

        {/* Flèches de Navigation Latérales */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="hero-carousel-nav-btn prev"
          aria-label="Projet précédent"
        >
          <ChevronLeft style={{ width: 18, height: 18 }} />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="hero-carousel-nav-btn next"
          aria-label="Projet suivant"
        >
          <ChevronRight style={{ width: 18, height: 18 }} />
        </button>
      </div>

      {/* Miniatures Interactives & Barre de Défilement */}
      <div className="hero-carousel-thumbnails">
        {showcaseProjects.map((p, idx) => (
          <div
            key={p.id}
            onClick={() => setCurrentIndex(idx)}
            className={`hero-thumb-card ${idx === currentIndex ? 'active' : ''}`}
            title={p.title}
          >
            <img src={p.image} alt={p.title} />
            <div className="hero-thumb-progress">
              {idx === currentIndex && (
                <div 
                  className={`hero-thumb-progress-bar ${isPaused ? 'paused' : 'running'}`} 
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
