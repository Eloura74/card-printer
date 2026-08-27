import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroStudio from './components/home/HeroStudio';
import ExpertisePillars from './components/home/ExpertisePillars';
import ProjectGallery from './components/projects/ProjectGallery';
import ProjectDetailsModal from './components/projects/ProjectDetailsModal';
import TikTokModal from './components/projects/TikTokModal';
import CustomProjectWizard from './components/customizer/CustomProjectWizard';
import WorkshopStock from './components/workshop/WorkshopStock';
import ContactSection from './components/contact/ContactSection';
import { projectsList, creatorProfile } from './data/projectsData';
import { 
  Palette, 
  Sparkles, 
  Wrench, 
  Send, 
  Home, 
  Layers, 
  Bot, 
  Box, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'gallery', 'customizer', 'workshop', 'contact'
  const [selectedProject, setSelectedProject] = useState(null);
  const [tiktokModalProject, setTiktokModalProject] = useState(null);
  const [reservedStockItem, setReservedStockItem] = useState(null);
  const [customizerPreselectedProject, setCustomizerPreselectedProject] = useState(null);

  // Sélection d'un projet depuis le Hero ou la galerie
  const handleSelectProjectById = (projectId) => {
    const proj = projectsList.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  // Passage vers le configurateur avec un projet en modèle
  const handleOpenCustomizerWithProject = (project) => {
    setCustomizerPreselectedProject(project);
    setSelectedProject(null);
    setActiveTab('customizer');
  };

  // Réservation d'une pièce d'atelier
  const handleReserveStockItem = (item) => {
    setReservedStockItem(item);
    setActiveTab('contact');
  };

  return (
    <div className="app-root">
      {/* Header Global */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Barre de navigation principale sous le header */}
      <nav className="main-nav-bar">
        <div className="app-container main-nav-inner">
          <button
            onClick={() => setActiveTab('home')}
            className={`nav-pill-btn ${activeTab === 'home' ? 'active' : ''}`}
          >
            <Home style={{ width: 16, height: 16 }} />
            <span>Accueil Studio</span>
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`nav-pill-btn ${activeTab === 'gallery' ? 'active' : ''}`}
          >
            <Palette style={{ width: 16, height: 16 }} />
            <span>Créations & Projets</span>
            <span className="nav-pill-badge">{projectsList.length}</span>
          </button>

          <button
            onClick={() => setActiveTab('customizer')}
            className={`nav-pill-btn ${activeTab === 'customizer' ? 'active' : ''}`}
          >
            <Sparkles style={{ width: 16, height: 16, color: 'var(--accent-terracotta)' }} />
            <span>Sur-Mesure & Hueforge</span>
          </button>

          <button
            onClick={() => setActiveTab('workshop')}
            className={`nav-pill-btn ${activeTab === 'workshop' ? 'active' : ''}`}
          >
            <Wrench style={{ width: 16, height: 16 }} />
            <span>Atelier & Pièces</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`nav-pill-btn ${activeTab === 'contact' ? 'active' : ''}`}
          >
            <Send style={{ width: 16, height: 16 }} />
            <span>Contact</span>
          </button>
        </div>
      </nav>

      {/* Contenu Principal */}
      <main className="app-container main-content-wrapper">
        {/* VUE 1 : ACCUEIL STUDIO */}
        {activeTab === 'home' && (
          <div className="home-view-container">
            {/* Hero Studio */}
            <HeroStudio
              setActiveTab={setActiveTab}
              onSelectFeaturedProject={handleSelectProjectById}
            />

            {/* Piliers d'expertise */}
            <ExpertisePillars setActiveTab={setActiveTab} />

            {/* Aperçu des Créations Phares */}
            <section className="featured-creations-section">
              <div className="section-header-row">
                <div>
                  <span className="section-eyebrow">Dernières Réalisations</span>
                  <h2 className="section-heading">Sélection de l'Atelier</h2>
                </div>
                <button
                  onClick={() => setActiveTab('gallery')}
                  className="btn btn-secondary"
                  style={{ gap: '0.4rem' }}
                >
                  <span>Voir les 15 créations</span>
                  <ArrowRight style={{ width: 15, height: 15 }} />
                </button>
              </div>

              <div className="portfolio-grid" style={{ marginBottom: '2rem' }}>
                {projectsList.slice(0, 6).map((project) => (
                  <div
                    key={project.id}
                    className="card project-card-modern"
                    onClick={() => setSelectedProject(project)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="card-image-wrapper">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="card-image"
                        loading="lazy"
                      />
                      <div className="card-image-badge">
                        <span className="card-tag terracotta">
                          {project.categoryLabel}
                        </span>
                      </div>
                    </div>

                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-desc">{project.shortDescription}</p>

                    <div className="card-footer">
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {project.technical?.technique || 'Impression 3D'}
                      </span>
                      <span className="card-action-link">
                        <span>Voir la fiche</span>
                        <ArrowRight style={{ width: 13, height: 13 }} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bannière Call To Action Sur-mesure */}
              <div className="custom-cta-banner card">
                <div className="custom-cta-content">
                  <span className="card-tag terracotta" style={{ marginBottom: '0.6rem' }}>
                    <Sparkles style={{ width: 12, height: 12 }} /> Sur-Mesure
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                    Vous souhaitez un tableau Hueforge ou une pièce 3D personnalisée ?
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: 620, margin: '0.5rem 0 1.25rem 0' }}>
                    Importez votre propre photo ou décrivez votre besoin technique. Nous calibrons les couches et nuances de filaments ensemble.
                  </p>
                  <button
                    onClick={() => setActiveTab('customizer')}
                    className="btn btn-primary btn-lg"
                  >
                    <Sparkles style={{ width: 16, height: 16 }} />
                    <span>Lancer le configurateur de projet</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* VUE 2 : GALERIE DES 15 CRÉATIONS */}
        {activeTab === 'gallery' && (
          <ProjectGallery
            projects={projectsList}
            onSelectProject={setSelectedProject}
            onOpenTikTokModal={setTiktokModalProject}
          />
        )}

        {/* VUE 3 : SUR-MESURE & CONFIGURATEUR */}
        {activeTab === 'customizer' && (
          <CustomProjectWizard
            preselectedProject={customizerPreselectedProject}
            onComplete={() => setActiveTab('gallery')}
          />
        )}

        {/* VUE 4 : ATELIER & STOCK */}
        {activeTab === 'workshop' && (
          <WorkshopStock onReserveItem={handleReserveStockItem} />
        )}

        {/* VUE 5 : CONTACT DIRECT */}
        {activeTab === 'contact' && (
          <ContactSection
            reservedItem={reservedStockItem}
            onClearReservedItem={() => setReservedStockItem(null)}
          />
        )}
      </main>

      {/* Footer Global */}
      <Footer setActiveTab={setActiveTab} />

      {/* Modale Détails Fiche Projet */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenCustomizerWithProject={handleOpenCustomizerWithProject}
          onOpenTikTokModal={(p) => {
            setSelectedProject(null);
            setTiktokModalProject(p);
          }}
        />
      )}

      {/* Modale Vidéo TikTok Intégrée */}
      {tiktokModalProject && (
        <TikTokModal
          project={tiktokModalProject}
          onClose={() => setTiktokModalProject(null)}
        />
      )}
    </div>
  );
}
