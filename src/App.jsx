import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroStudio from './components/home/HeroStudio';
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
  ArrowRight
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

      {/* Barre de navigation principale avec Vercel */}
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
            <Cloud style={{ width: 16, height: 16, color: 'var(--accent-cyan)' }} />
            <span>Projets Web & Vercel</span>
            <span className="nav-pill-badge" style={{ color: 'var(--accent-indigo)', background: 'rgba(129, 140, 248, 0.15)' }}>
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
        {/* VUE 1 : ACCUEIL STUDIO */}
        {activeTab === 'home' && (
          <div className="home-view-container">
            <HeroStudio
              setActiveTab={setActiveTab}
              onSelectFeaturedProject={handleSelectProjectById}
            />

            <ExpertisePillars />

            {/* Aperçu des Réalisations Réelles */}
            <section className="featured-creations-section">
              <div className="section-header-row">
                <div>
                  <span className="section-eyebrow">Atelier 3D</span>
                  <h2 className="section-heading">Aperçu de mes Réalisations 3D</h2>
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
