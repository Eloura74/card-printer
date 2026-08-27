import React from 'react';
import { Box, ExternalLink, MessageSquare } from 'lucide-react';
import { creatorProfile } from '../../data/projectsData';

export default function Header({ activeTab, setActiveTab }) {
  return (
    <header className="app-header">
      <div className="app-container header-content">
        <div className="brand-section" onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }}>
          <div className="brand-logo-hex">
            <Box style={{ width: 22, height: 22 }} />
          </div>
          <div className="brand-info">
            <h1>
              <span>FOXTROTTQUEBEC</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--accent-terracotta)', fontWeight: 600, padding: '0.15rem 0.5rem', background: 'var(--accent-terracotta-subtle)', borderRadius: 999 }}>
                3D DESIGN
              </span>
            </h1>
            <p>
              <span>{creatorProfile.subtitle}</span>
              <span style={{ color: 'var(--border-subtle)' }}>•</span>
              <a
                href={creatorProfile.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{ color: 'var(--accent-terracotta)', fontWeight: 600, textDecoration: 'none' }}
              >
                {creatorProfile.tiktokHandle}
              </a>
            </p>
          </div>
        </div>

        <div className="header-actions">
          <a
            href={creatorProfile.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-tiktok"
            title="Voir mon profil complet sur TikTok"
          >
            <ExternalLink style={{ width: 14, height: 14 }} />
            <span>Mon TikTok</span>
          </a>

          <button
            onClick={() => setActiveTab('contact')}
            className="btn btn-primary"
          >
            <MessageSquare style={{ width: 14, height: 14 }} />
            <span>Contact & Idées</span>
          </button>
        </div>
      </div>
    </header>
  );
}
