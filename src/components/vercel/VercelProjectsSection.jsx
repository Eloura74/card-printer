import React from 'react';
import { ExternalLink, Globe, Terminal, CheckCircle2, Cloud, Sparkles, Layers, Code, GitBranch } from 'lucide-react';
import { vercelProfile, vercelProjectsList } from '../../data/vercelProjectsData';

export default function VercelProjectsSection() {
  return (
    <section className="vercel-section">
      <div className="section-header-compact">
        <span className="section-eyebrow">Cloud & Déploiements Web</span>
        <h2 className="section-heading">Projets Web & Développements Vercel</h2>
        <p className="section-subtext">
          Découvrez mes applications web, dashboards et outils interactifs déployés sur l'infrastructure Vercel.
        </p>
      </div>

      {/* Profil Vercel Card */}
      <div className="vercel-banner-card card">
        <div className="vercel-banner-info">
          <div className="vercel-logo-box">
            <svg viewBox="0 0 1155 1000" fill="currentColor" style={{ width: 22, height: 22 }}>
              <path d="m577.3 0 577.4 1000H0z" />
            </svg>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                {vercelProfile.accountName}
              </h3>
              <span className="card-tag cyan">
                <Cloud style={{ width: 12, height: 12 }} /> Vercel Edge
              </span>
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '0.35rem', maxWidth: 680 }}>
              {vercelProfile.bio}
            </p>
          </div>
        </div>

        <div className="vercel-banner-actions">
          <a
            href={vercelProfile.vercelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-vercel"
          >
            <ExternalLink style={{ width: 14, height: 14 }} />
            <span>Voir mon compte Vercel</span>
          </a>
          <a
            href={vercelProfile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <GitBranch style={{ width: 14, height: 14 }} />
            <span>GitHub @Eloura74</span>
          </a>
        </div>
      </div>

      {/* Grille des Projets Vercel */}
      <div className="vercel-grid">
        {vercelProjectsList.map((project) => (
          <div key={project.id} className="card vercel-project-card">
            <div className="vercel-card-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div className={`vercel-icon-badge ${project.iconColor}`}>
                  <Terminal style={{ width: 16, height: 16 }} />
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                    {project.framework}
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.08rem', fontWeight: 700, color: '#ffffff' }}>
                    {project.title}
                  </h4>
                </div>
              </div>

              <span className="card-tag sage" style={{ fontSize: '0.7rem' }}>
                <CheckCircle2 style={{ width: 11, height: 11 }} /> {project.status}
              </span>
            </div>

            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '1rem 0' }}>
              {project.description}
            </p>

            <div className="card-specs-box" style={{ marginBottom: '1rem' }}>
              <div className="spec-row">
                <span className="spec-key">Domaine Vercel :</span>
                <span className="spec-val" style={{ color: 'var(--accent-cyan)' }}>{project.domain}</span>
              </div>
              <div className="spec-row">
                <span className="spec-key">Infrastructure :</span>
                <span className="spec-val">Vercel Global CDN</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
              {project.tags.map((t, idx) => (
                <span key={idx} className="tag-pill">
                  {t}
                </span>
              ))}
            </div>

            <div className="card-footer">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '0.78rem', padding: '0.45rem 0.85rem' }}
              >
                <Globe style={{ width: 13, height: 13, color: 'var(--accent-cyan)' }} />
                <span>Ouvrir l'application</span>
              </a>

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-action-link"
                >
                  <Code style={{ width: 13, height: 13 }} />
                  <span>Code source</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
