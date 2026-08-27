import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import { Layers, Palette, Bot, Box, Search, X } from 'lucide-react';

export default function ProjectGallery({ projects, onSelectProject, onOpenTikTokModal }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const counts = useMemo(() => {
    return {
      all: projects.length,
      art: projects.filter((p) => p.category === 'art').length,
      robotics: projects.filter((p) => p.category === 'robotics').length,
      cosplay: projects.filter((p) => p.category === 'cosplay').length
    };
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
      const matchSearch =
        searchTerm.trim() === '' ||
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [projects, selectedCategory, searchTerm]);

  return (
    <section className="gallery-section">
      <div className="section-header-compact">
        <span className="section-eyebrow">Mes Réalisations</span>
        <h2 className="section-heading">Créations d'Atelier & Projets Réels</h2>
        <p className="section-subtext">
          Chaque pièce a été modélisée ou imprimée dans mon atelier. Cliquez sur un projet pour voir les détails et la vidéo TikTok.
        </p>
      </div>

      {/* Filtres & Recherche */}
      <div className="filter-bar">
        <div className="search-input-wrapper">
          <Search className="search-icon-pos" style={{ width: 16, height: 16 }} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher parmi les réalisations (Sauron, Deadpool, Luffy, Bras robotique, Gandalf...)"
            className="search-input"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              style={{
                position: 'absolute',
                right: '0.85rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: 'var(--text-faint)',
                cursor: 'pointer'
              }}
            >
              <X style={{ width: 16, height: 16 }} />
            </button>
          )}
        </div>

        <div className="filter-pills">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`pill-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          >
            <Layers style={{ width: 14, height: 14 }} />
            <span>Toutes les réalisations ({counts.all})</span>
          </button>

          <button
            onClick={() => setSelectedCategory('art')}
            className={`pill-btn ${selectedCategory === 'art' ? 'active' : ''}`}
          >
            <Palette style={{ width: 14, height: 14 }} />
            <span>Tableaux & Art 3D ({counts.art})</span>
          </button>

          <button
            onClick={() => setSelectedCategory('robotics')}
            className={`pill-btn ${selectedCategory === 'robotics' ? 'active' : ''}`}
          >
            <Bot style={{ width: 14, height: 14 }} />
            <span>Robotique & Mécatronique ({counts.robotics})</span>
          </button>

          <button
            onClick={() => setSelectedCategory('cosplay')}
            className={`pill-btn ${selectedCategory === 'cosplay' ? 'active' : ''}`}
          >
            <Box style={{ width: 14, height: 14 }} />
            <span>Cosplay & Sculptures ({counts.cosplay})</span>
          </button>
        </div>
      </div>

      {/* Grille */}
      {filteredProjects.length === 0 ? (
        <div className="empty-results-box" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>Aucun projet ne correspond à "{searchTerm}".</p>
          <button 
            onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }} 
            className="btn btn-secondary" 
            style={{ marginTop: '0.85rem' }}
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
              onOpenTikTokModal={onOpenTikTokModal}
            />
          ))}
        </div>
      )}
    </section>
  );
}
