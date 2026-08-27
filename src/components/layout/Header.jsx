import React, { useState } from 'react';
import { 
  Box, 
  ExternalLink, 
  MessageSquare, 
  Menu, 
  X, 
  Home, 
  Palette, 
  Cloud, 
  Wrench, 
  Send, 
  GitBranch 
} from 'lucide-react';
import { creatorProfile, projectsList } from '../../data/projectsData';
import { vercelProjectsList, vercelProfile } from '../../data/vercelProjectsData';

export default function Header({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="app-header">
        <div className="app-container header-content">
          <div className="brand-section" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
            <div className="brand-logo-hex">
              <Box style={{ width: 22, height: 22 }} />
            </div>
            <div className="brand-info">
              <h1>
                <span>FOXTROTTQUEBEC</span>
                <span className="brand-badge-desktop" style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600, padding: '0.15rem 0.5rem', background: 'var(--accent-cyan-subtle)', borderRadius: 999 }}>
                  3D & DEV
                </span>
              </h1>
              <p>
                <span>{creatorProfile.subtitle}</span>
              </p>
            </div>
          </div>

          <div className="header-actions">
            {/* Actions visibles sur Desktop */}
            <div className="header-desktop-actions">
              <a
                href={creatorProfile.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-tiktok"
                title="Voir mon profil TikTok"
              >
                <ExternalLink style={{ width: 14, height: 14 }} />
                <span>Mon TikTok</span>
              </a>

              <button
                onClick={() => handleNavClick('contact')}
                className="btn btn-primary"
              >
                <MessageSquare style={{ width: 14, height: 14 }} />
                <span>Contact & Idées</span>
              </button>
            </div>

            {/* Bouton Hamburger Mobile */}
            <button
              className="mobile-burger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? (
                <X style={{ width: 22, height: 22, color: '#ffffff' }} />
              ) : (
                <Menu style={{ width: 22, height: 22, color: 'var(--accent-cyan)' }} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Tiroir Mobile (Drawer) */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-card" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div className="brand-logo-hex" style={{ width: 34, height: 34 }}>
                  <Box style={{ width: 18, height: 18 }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>
                    Menu du Studio
                  </h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    FoxtrottQuebec 3D & Dev
                  </p>
                </div>
              </div>

              <button 
                className="close-btn" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ position: 'static' }}
              >
                <X style={{ width: 18, height: 18 }} />
              </button>
            </div>

            {/* Liste des Liens de Navigation Mobile */}
            <div className="mobile-nav-list">
              <button
                onClick={() => handleNavClick('home')}
                className={`mobile-nav-item ${activeTab === 'home' ? 'active' : ''}`}
              >
                <div className="mobile-nav-icon">
                  <Home style={{ width: 18, height: 18 }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <strong>Accueil Studio</strong>
                  <small>Présentation & Mosaïque d'Atelier</small>
                </div>
              </button>

              <button
                onClick={() => handleNavClick('gallery')}
                className={`mobile-nav-item ${activeTab === 'gallery' ? 'active' : ''}`}
              >
                <div className="mobile-nav-icon">
                  <Palette style={{ width: 18, height: 18 }} />
                </div>
                <div style={{ textAlign: 'left', flex: 1 }}>
                  <strong>Créations & Modèles 3D</strong>
                  <small>Tableaux, Robotique & Cosplay</small>
                </div>
                <span className="nav-pill-badge">{projectsList.length}</span>
              </button>

              <button
                onClick={() => handleNavClick('vercel')}
                className={`mobile-nav-item ${activeTab === 'vercel' ? 'active' : ''}`}
              >
                <div className="mobile-nav-icon" style={{ color: 'var(--accent-indigo)', background: 'rgba(129, 140, 248, 0.15)' }}>
                  <Cloud style={{ width: 18, height: 18 }} />
                </div>
                <div style={{ textAlign: 'left', flex: 1 }}>
                  <strong>Projets Web & Vercel</strong>
                  <small>Applications & Déploiements Cloud</small>
                </div>
                <span className="nav-pill-badge" style={{ color: 'var(--accent-indigo)', background: 'rgba(129, 140, 248, 0.15)' }}>
                  {vercelProjectsList.length}
                </span>
              </button>

              <button
                onClick={() => handleNavClick('workshop')}
                className={`mobile-nav-item ${activeTab === 'workshop' ? 'active' : ''}`}
              >
                <div className="mobile-nav-icon" style={{ color: 'var(--accent-sage)', background: 'rgba(52, 211, 153, 0.15)' }}>
                  <Wrench style={{ width: 18, height: 18 }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <strong>Stock de Pièces Atelier</strong>
                  <small>Buses, Quincaillerie & CAN Bus</small>
                </div>
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`mobile-nav-item ${activeTab === 'contact' ? 'active' : ''}`}
              >
                <div className="mobile-nav-icon" style={{ color: 'var(--accent-cyan)', background: 'rgba(56, 189, 248, 0.15)' }}>
                  <Send style={{ width: 18, height: 18 }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <strong>Contact Direct</strong>
                  <small>Échanger sur une idée de projet</small>
                </div>
              </button>
            </div>

            {/* Liens Réseaux Externes dans le Menu Mobile */}
            <div className="mobile-drawer-footer">
              <a
                href={creatorProfile.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-tiktok"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <ExternalLink style={{ width: 15, height: 15 }} />
                <span>Mon Profil TikTok ({creatorProfile.tiktokHandle})</span>
              </a>

              <a
                href={vercelProfile.vercelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
              >
                <Cloud style={{ width: 15, height: 15, color: 'var(--accent-cyan)' }} />
                <span>Mes Déploiements Vercel</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
