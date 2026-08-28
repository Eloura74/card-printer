import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroStudio from './components/home/HeroStudio';
import AtelierMarqueeTicker from './components/home/AtelierMarqueeTicker';
import WorkshopHighlights from './components/home/WorkshopHighlights';
import ExpertisePillars from './components/home/ExpertisePillars';
import ProjectGallery from './components/projects/ProjectGallery';
import ProjectCard from './components/projects/ProjectCard';
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
  ArrowLeft,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTabState] = useState('home'); // 'home', 'gallery', 'vercel', 'workshop', 'contact'
  const [selectedProject, setSelectedProjectState] = useState(null);
  const [tiktokModalProject, setTiktokModalProjectState] = useState(null);
  const [contactSubjectProject, setContactSubjectProject] = useState(null);
  const [reservedStockItem, setReservedStockItem] = useState(null);

  // Synchronisation avec l'Historique du Navigateur (Gestion du Retour Arrière / PopState)
  const changeTab = useCallback((newTab, push = true) => {
    setActiveTabState(newTab);
    setSelectedProjectState(null);
    setTiktokModalProjectState(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (push && window.history) {
      window.history.pushState({ tab: newTab, projectId: null, tiktokId: null }, '', `#${newTab}`);
    }
  }, []);

  const openProjectModal = useCallback((project, push = true) => {
    setSelectedProjectState(project);
    setTiktokModalProjectState(null);
    if (push && window.history) {
      window.history.pushState({ tab: activeTab, projectId: project ? project.id : null, tiktokId: null }, '', `#project-${project.id}`);
    }
  }, [activeTab]);

  const closeProjectModal = useCallback((push = true) => {
    setSelectedProjectState(null);
    if (push && window.history) {
      window.history.pushState({ tab: activeTab, projectId: null, tiktokId: null }, '', `#${activeTab}`);
    }
  }, [activeTab]);

  const openTikTokModal = useCallback((project, push = true) => {
    setTiktokModalProjectState(project);
    if (push && window.history) {
      window.history.pushState({ tab: activeTab, projectId: null, tiktokId: project ? project.id : null }, '', `#tiktok-${project.id}`);
    }
  }, [activeTab]);

  const closeTikTokModal = useCallback((push = true) => {
    setTiktokModalProjectState(null);
    if (push && window.history) {
      window.history.pushState({ tab: activeTab, projectId: null, tiktokId: null }, '', `#${activeTab}`);
    }
  }, [activeTab]);

  // Écouteur Popstate pour gérer les clics sur les boutons Précédent / Suivant du navigateur et smartphone
  useEffect(() => {
    // Initialisation état
    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'gallery', 'vercel', 'workshop', 'contact'].includes(hash)) {
        setActiveTabState(hash);
      } else if (hash.startsWith('project-')) {
        const pId = hash.replace('project-', '');
        const found = projectsList.find(p => p.id === pId);
        if (found) {
          setActiveTabState('gallery');
          setSelectedProjectState(found);
        }
      }
    } else {
      window.history.replaceState({ tab: 'home', projectId: null, tiktokId: null }, '', '#home');
    }

    const handlePopState = (event) => {
      const state = event.state;
      if (state) {
        if (state.tab) setActiveTabState(state.tab);
        if (state.projectId) {
          const proj = projectsList.find(p => p.id === state.projectId);
          setSelectedProjectState(proj || null);
        } else {
          setSelectedProjectState(null);
        }

        if (state.tiktokId) {
          const proj = projectsList.find(p => p.id === state.tiktokId);
          setTiktokModalProjectState(proj || null);
        } else {
          setTiktokModalProjectState(null);
        }
      } else {
        // Fallback accueil
        setActiveTabState('home');
        setSelectedProjectState(null);
        setTiktokModalProjectState(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSelectProjectById = (projectId) => {
    const proj = projectsList.find((p) => p.id === projectId);
    if (proj) {
      openProjectModal(proj);
    }
  };

  const handleContactAboutProject = (project) => {
    setContactSubjectProject(project);
    setReservedStockItem(null);
    setSelectedProjectState(null);
    changeTab('contact');
  };

  const handleReserveStockItem = (item) => {
    setReservedStockItem(item);
    setContactSubjectProject(null);
    changeTab('contact');
  };

  return (
    <div className="app-root">
      {/* Header Global */}
      <Header activeTab={activeTab} setActiveTab={(tab) => changeTab(tab)} />

      {/* Barre de navigation principale (Desktop) */}
      <nav className="main-nav-bar">
        <div className="app-container main-nav-inner">
          <button
            onClick={() => changeTab('home')}
            className={`nav-pill-btn ${activeTab === 'home' ? 'active' : ''}`}
          >
            <Home style={{ width: 16, height: 16 }} />
            <span>Accueil Studio</span>
          </button>

          <button
            onClick={() => changeTab('gallery')}
            className={`nav-pill-btn ${activeTab === 'gallery' ? 'active' : ''}`}
          >
            <Palette style={{ width: 16, height: 16 }} />
            <span>Créations 3D</span>
            <span className="nav-pill-badge">{projectsList.length}</span>
          </button>

          <button
            onClick={() => changeTab('vercel')}
            className={`nav-pill-btn ${activeTab === 'vercel' ? 'active' : ''}`}
          >
            <Cloud style={{ width: 16, height: 16, color: 'var(--accent-gold)' }} />
            <span>Projets Web & Vercel</span>
            <span className="nav-pill-badge" style={{ color: 'var(--accent-gold)', background: 'var(--accent-gold-subtle)' }}>
              {vercelProjectsList.length}
            </span>
          </button>

          <button
            onClick={() => changeTab('workshop')}
            className={`nav-pill-btn ${activeTab === 'workshop' ? 'active' : ''}`}
          >
            <Wrench style={{ width: 16, height: 16 }} />
            <span>Stock Atelier</span>
          </button>

          <button
            onClick={() => changeTab('contact')}
            className={`nav-pill-btn ${activeTab === 'contact' ? 'active' : ''}`}
          >
            <Send style={{ width: 16, height: 16 }} />
            <span>Contact & Idées</span>
          </button>
        </div>
      </nav>

      {/* Contenu Principal */}
      <main className="app-container main-content-wrapper">
        {/* Barre de retour rapide si hors de la page d'accueil */}
        {activeTab !== 'home' && (
          <div style={{ marginBottom: '1.25rem' }}>
            <button
              onClick={() => changeTab('home')}
              className="btn-back-link"
            >
              <ArrowLeft style={{ width: 15, height: 15 }} />
              <span>Retour à l'Accueil Studio</span>
            </button>
          </div>
        )}

        {/* VUE 1 : ACCUEIL STUDIO ULTRA DYNAMIQUE */}
        {activeTab === 'home' && (
          <div className="home-view-container">
            <HeroStudio
              setActiveTab={(tab) => changeTab(tab)}
              onSelectFeaturedProject={handleSelectProjectById}
              onOpenTikTokModal={(p) => openTikTokModal(p)}
            />

            {/* Ruban Ticker Défilant Continu */}
            <AtelierMarqueeTicker />

            {/* Univers Phares du Studio */}
            <WorkshopHighlights
              setActiveTab={(tab) => changeTab(tab)}
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
                  onClick={() => changeTab('gallery')}
                  className="btn btn-secondary"
                  style={{ gap: '0.4rem' }}
                >
                  <span>Voir toute la galerie (15)</span>
                  <ArrowRight style={{ width: 15, height: 15 }} />
                </button>
              </div>

              <div className="portfolio-grid" style={{ marginBottom: '2.5rem' }}>
                {projectsList.slice(0, 6).map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelectProject={openProjectModal}
                    onOpenTikTokModal={openTikTokModal}
                  />
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
                    onClick={() => changeTab('contact')}
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
            onSelectProject={(p) => openProjectModal(p)}
            onOpenTikTokModal={(p) => openTikTokModal(p)}
          />
        )}

        {/* VUE 3 : PROJETS WEB & VERCEL */}
        {activeTab === 'vercel' && (
          <VercelProjectsSection
            onOpenContactWithApp={(appTitle) => {
              handleContactAboutProject({ title: `Application Web : ${appTitle}`, id: `vercel-${appTitle}` });
            }}
          />
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
      <Footer setActiveTab={(tab) => changeTab(tab)} />

      {/* Modale Détails Fiche Projet */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => closeProjectModal()}
          onContactAboutProject={handleContactAboutProject}
          onOpenTikTokModal={(p) => {
            closeProjectModal(false);
            openTikTokModal(p);
          }}
        />
      )}

      {/* Modale Vidéo TikTok */}
      {tiktokModalProject && (
        <TikTokModal
          project={tiktokModalProject}
          onClose={() => closeTikTokModal()}
        />
      )}
    </div>
  );
}
