import React from 'react';
import { creatorProfile } from '../../data/projectsData';
import { vercelProfile } from '../../data/vercelProjectsData';
import { ExternalLink, Box, Mail, Phone } from 'lucide-react';

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
              FOXTROTTQUEBEC 3D & DEV
            </h3>
          </div>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', maxWidth: 450, lineHeight: 1.6 }}>
            {creatorProfile.bio}
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', marginTop: '0.85rem', flexWrap: 'wrap' }}>
            <a
              href={`mailto:${creatorProfile.email}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--accent-gold)', textDecoration: 'none' }}
            >
              <Mail style={{ width: 13, height: 13 }} />
              <span>{creatorProfile.email}</span>
            </a>
            <a
              href={`tel:${creatorProfile.phoneRaw}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--accent-sage)', textDecoration: 'none' }}
            >
              <Phone style={{ width: 13, height: 13 }} />
              <span>{creatorProfile.phone}</span>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Navigation</h4>
            <button onClick={() => setActiveTab('home')}>Accueil Studio</button>
            <button onClick={() => setActiveTab('gallery')}>Créations 3D ({creatorProfile.name})</button>
            <button onClick={() => setActiveTab('vercel')}>Projets Web & Vercel</button>
            <button onClick={() => setActiveTab('workshop')}>Stock d'Atelier</button>
            <button onClick={() => setActiveTab('contact')}>Contact Direct</button>
          </div>

          <div className="footer-col">
            <h4>Plateformes & Cloud</h4>
            <a href={vercelProfile.githubUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span>GitHub @Eloura74</span>
              <ExternalLink style={{ width: 12, height: 12 }} />
            </a>
            <a href={creatorProfile.tiktokUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span>TikTok {creatorProfile.tiktokHandle}</span>
              <ExternalLink style={{ width: 12, height: 12 }} />
            </a>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-faint)' }}>Bambu Lab • Voron • Fusion 360 • React</span>
          </div>
        </div>
      </div>

      <div className="app-container footer-bottom">
        <p>© {new Date().getFullYear()} Quentin Faber (FoxtrottQuebec 3D Design) — Tous droits réservés.</p>
        <p style={{ color: 'var(--text-faint)' }}>Création • Conception • Fabrication 3D & Développements Web</p>
      </div>
    </footer>
  );
}
