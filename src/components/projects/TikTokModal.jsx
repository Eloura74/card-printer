import React from 'react';
import { X, ExternalLink, PlayCircle } from 'lucide-react';

export default function TikTokModal({ project, onClose }) {
  if (!project || !project.tiktokUrl) return null;

  // Extraction de l'ID vidéo TikTok si disponible
  const match = project.tiktokUrl.match(/video\/(\d+)/);
  const videoId = match ? match[1] : null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card modal-tiktok" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} title="Fermer">
          <X style={{ width: 18, height: 18 }} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
          <PlayCircle style={{ width: 20, height: 20, color: 'var(--accent-terracotta)' }} />
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Vidéo TikTok officielle • @quentinfaber
            </p>
          </div>
        </div>

        {/* Lecteur / Embed ou Vue Directe */}
        <div className="tiktok-embed-container">
          {videoId ? (
            <iframe
              src={`https://www.tiktok.com/embed/v2/${videoId}`}
              title={project.title}
              className="tiktok-iframe"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Regardez la démonstration complète de cette création sur TikTok.
              </p>
              <a
                href={project.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-tiktok btn-lg"
              >
                <ExternalLink style={{ width: 16, height: 16 }} />
                <span>Ouvrir sur TikTok</span>
              </a>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-faint)' }}>
            FoxtrottQuebec 3D Design
          </span>
          <a
            href={project.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-tiktok"
            style={{ fontSize: '0.78rem', padding: '0.4rem 0.8rem' }}
          >
            <ExternalLink style={{ width: 13, height: 13 }} />
            <span>Ouvrir sur l'app TikTok</span>
          </a>
        </div>
      </div>
    </div>
  );
}
