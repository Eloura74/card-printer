import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroStudio from './components/home/HeroStudio';
import AtelierMarqueeTicker from './components/home/AtelierMarqueeTicker';
import WorkshopHighlights from './components/home/WorkshopHighlights';
import ExpertisePillars from './components/home/ExpertisePillars';
import ProjectGallery from './components/projects/ProjectGallery';
import ProjectDetailsModal from './components/projects/ProjectDetailsModal';
import TikTokModal from './components/projects/TikTokModal';
import WorkshopStock from './components/workshop/WorkshopStock';
import VercelProjectsSection from './components/vercel/VercelProjectsSection';
import ContactSection from './components/contact/ContactSection';
import { projectsList } from './data/projectsData';
import { vercelProjectsList } from './data/vercelProjectsData';
import { 
  Palette, 
  Wrench, 
  Send, 
  Home, 
  Cloud,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'gallery', 'vercel', 'workshop', 'contact'
  const [selectedProject, setSelectedProject] = useState(null);
  const [tiktokModalProject, setTiktokModalProject] = useState(null);
  const [contactSubjectProject, setContactSubjectProject] = useState(null);
  const [reservedStockItem, setReservedStockItem] = useState(null);

  const handleSelectProjectById = (projectId) => {
    const proj = projectsList.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  const handleContactAboutProject = (project) => {
    setContactSubjectProject(project);
    setReservedStockItem(null);
    setSelectedProject(null);
    setActiveTab('contact');
  };

  const handleReserveStockItem = (item) => {
    setReservedStockItem(item);
    setContactSubjectProject(null);
    setActiveTab('contact');
  };

  return (
    <div className="app-root">
      {/* Header Global */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Barre de navigation principale (Desktop) */}
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
            <span>Créations 3D</span>
            <span className="nav-pill-badge">{projectsList.length}</span>
          </button>

          <button
            onClick={() => setActiveTab('vercel')}
            className={`nav-pill-btn ${activeTab === 'vercel' ? 'active' : ''}`}
          >
            <Cloud style={{ width: 16, height: 16, color: 'var(--accent-gold)' }} />
            <span>Projets Web & Vercel</span>
            <span className="nav-pill-badge" style={{ color: 'var(--accent-gold)', background: 'var(--accent-gold-subtle)' }}>
              {vercelProjectsList.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('workshop')}
            className={`nav-pill-btn ${activeTab === 'workshop' ? 'active' : ''}`}
          >
            <Wrench style={{ width: 16, height: 16 }} />
            <span>Stock Atelier</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`nav-pill-btn ${activeTab === 'contact' ? 'active' : ''}`}
          >
            <Send style={{ width: 16, height: 16 }} />
            <span>Contact & Idées</span>
          </button>
        </div>
      </nav>

      {/* Contenu Principal */}
      <main className="app-container main-content-wrapper">
        {/* VUE 1 : ACCUEIL STUDIO ULTRA DYNAMIQUE */}
        {activeTab === 'home' && (
          <div className="home-view-container">
            <HeroStudio
              setActiveTab={setActiveTab}
              onSelectFeaturedProject={handleSelectProjectById}
              onOpenTikTokModal={setTiktokModalProject}
            />

            {/* Ruban Ticker Défilant Continu */}
            <AtelierMarqueeTicker />

            {/* Univers Phares du Studio */}
            <WorkshopHighlights
              setActiveTab={setActiveTab}
              onSelectProject={handleSelectProjectById}
            />

            {/* Méthodes & Piliers d'Atelier */}
            <ExpertisePillars />

            {/* Sélection Réalisations Phares */}
            <section className="featured-creations-section">
              <div className="section-header-row">
                <div>
                  <span className="section-eyebrow">Dernières Créations</span>
                  <h2 className="section-heading">Pièces Récentes de l'Atelier</h2>
                </div>
                <button
                  onClick={() => setActiveTab('gallery')}
                  className="btn btn-secondary"
                  style={{ gap: '0.4rem' }}
                >
                  <span>Voir toute la galerie (15)</span>
                  <ArrowRight style={{ width: 15, height: 15 }} />
                </button>
              </div>

              <div className="portfolio-grid" style={{ marginBottom: '2.5rem' }}>
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
                        <span className="card-tag cyan">
                          {project.categoryLabel}
                        </span>
                      </div>
                    </div>

                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-desc">{project.description}</p>

                    <div className="card-footer">
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        Quentin Faber
                      </span>
                      <span className="card-action-link">
                        <span>Voir détails</span>
                        <ArrowRight style={{ width: 13, height: 13 }} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bannière Call To Action Accrocheuse */}
              <div className="card home-cta-banner">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: 640 }}>
                  <span className="card-tag cyan" style={{ width: 'fit-content' }}>
                    <Sparkles style={{ width: 12, height: 12 }} /> Échange & Projets
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                    Vous avez une idée de création 3D ou besoin d'une pièce technique ?
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    Discutons ensemble de la modélisation sous Fusion 360, des matériaux adaptés et des étapes de fabrication.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="btn btn-primary btn-lg"
                  >
                    <Send style={{ width: 16, height: 16 }} />
                    <span>Me contacter directement</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* VUE 2 : GALERIE DES 15 CRÉATIONS 3D */}
        {activeTab === 'gallery' && (
          <ProjectGallery
            projects={projectsList}
            onSelectProject={setSelectedProject}
            onOpenTikTokModal={setTiktokModalProject}
          />
        )}

        {/* VUE 3 : PROJETS WEB & VERCEL */}
        {activeTab === 'vercel' && (
          <VercelProjectsSection />
        )}

        {/* VUE 4 : ATELIER & STOCK DE PIÈCES */}
        {activeTab === 'workshop' && (
          <WorkshopStock onReserveItem={handleReserveStockItem} />
        )}

        {/* VUE 5 : CONTACT DIRECT */}
        {activeTab === 'contact' && (
          <ContactSection
            selectedProjectForContact={contactSubjectProject}
            reservedItem={reservedStockItem}
            onClearContext={() => {
              setContactSubjectProject(null);
              setReservedStockItem(null);
            }}
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
          onContactAboutProject={handleContactAboutProject}
          onOpenTikTokModal={(p) => {
            setSelectedProject(null);
            setTiktokModalProject(p);
          }}
        />
      )}

      {/* Modale Vidéo TikTok */}
      {tiktokModalProject && (
        <TikTokModal
          project={tiktokModalProject}
          onClose={() => setTiktokModalProject(null)}
        />
      )}
    </div>
  );
}
