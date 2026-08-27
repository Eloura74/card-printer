import React from 'react';
import { creatorProfile } from '../../data/projectsData';
import { ExternalLink, Box } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="app-footer">
      <div className="app-container footer-content">
        <div className="footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
            <div className="brand-logo-hex" style={{ width: 32, height: 32 }}>
              <Box style={{ width: 16, height: 16 }} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>
              FOXTROTTQUEBEC 3D DESIGN
            </h3>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', maxWidth: 450, lineHeight: 1.6 }}>
            {creatorProfile.bio}
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Navigation</h4>
            <button onClick={() => setActiveTab('home')}>Accueil Studio</button>
            <button onClick={() => setActiveTab('gallery')}>Mes Réalisations (15)</button>
            <button onClick={() => setActiveTab('workshop')}>Stock d'Atelier</button>
            <button onClick={() => setActiveTab('contact')}>Contact Direct</button>
          </div>

          <div className="footer-col">
            <h4>Réseaux</h4>
            <a href={creatorProfile.tiktokUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span>TikTok {creatorProfile.tiktokHandle}</span>
              <ExternalLink style={{ width: 12, height: 12 }} />
            </a>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-faint)' }}>Bambu Lab • Voron • Fusion 360</span>
          </div>
        </div>
      </div>

      <div className="app-container footer-bottom">
        <p>© {new Date().getFullYear()} Quentin Faber (FoxtrottQuebec 3D Design) — Tous droits réservés.</p>
        <p style={{ color: 'var(--text-faint)' }}>Création • Conception • Fabrication 3D</p>
      </div>
    </footer>
  );
}
