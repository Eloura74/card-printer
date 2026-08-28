import React, { useState, useMemo } from 'react';
import { 
  Globe, 
  Terminal, 
  CheckCircle2, 
  Cloud, 
  Sparkles, 
  Layers, 
  Code, 
  GitBranch, 
  Search, 
  X, 
  Lock, 
  ShieldCheck, 
  ShieldAlert, 
  ExternalLink,
  Cpu,
  Server,
  FileCode,
  Send,
  Eye,
  Info
} from 'lucide-react';
import { vercelProfile, vercelProjectsList } from '../../data/vercelProjectsData';

export default function VercelProjectsSection({ onOpenContactWithApp }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModalProject, setSelectedModalProject] = useState(null);

  const counts = useMemo(() => {
    return {
      all: vercelProjectsList.length,
      tools: vercelProjectsList.filter((p) => p.category === 'tools').length,
      food: vercelProjectsList.filter((p) => p.category === 'food').length,
      portfolio: vercelProjectsList.filter((p) => p.category === 'portfolio').length,
      data: vercelProjectsList.filter((p) => p.category === 'data').length
    };
  }, []);

  const filteredProjects = useMemo(() => {
    return vercelProjectsList.filter((p) => {
      const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
      const matchSearch =
        searchTerm.trim() === '' ||
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section className="vercel-section">
      <div className="section-header-compact">
        <span className="section-eyebrow">Ingénierie Web & Cloud</span>
        <h2 className="section-heading">Vitrine des 19 Applications Vercel</h2>
        <p className="section-subtext">
          Présentation technique des architectures web et outils d'atelier développés par Quentin Faber. 
          Les applications sont présentées en mode vitrine sécurisée (écriture et administration réservées).
        </p>
      </div>

      {/* Bannière de Sécurité & Profil Vercel */}
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
                <Cloud style={{ width: 12, height: 12 }} /> {vercelProjectsList.length} Déploiements Cloud
              </span>
              <span className="card-tag amber" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Lock style={{ width: 11, height: 11 }} /> Mode Vitrine Sécurisée
              </span>
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '0.45rem', maxWidth: 740, lineHeight: 1.6 }}>
              {vercelProfile.bio} <strong>Les bases de données de production et modules d'administration restent strictement protégés</strong> : 
              cliquez sur une application pour consulter sa fiche technique détaillée, ses fonctionnalités et sa pile logicielle.
            </p>
          </div>
        </div>

        <div className="vercel-banner-actions">
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

      {/* Barre de Recherche et Filtres */}
      <div className="filter-bar">
        <div className="search-input-wrapper">
          <Search className="search-icon-pos" style={{ width: 16, height: 16 }} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher un projet (Inventory, LumiStock, StockElec, Let's Cook, Météo, To-Do...)"
            className="search-input"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              style={{
                position: 'absolute',
                right: '0.85rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: 'var(--text-faint)',
                cursor: 'pointer'
              }}
            >
              <X style={{ width: 16, height: 16 }} />
            </button>
          )}
        </div>

        <div className="filter-pills">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`pill-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          >
            <Layers style={{ width: 14, height: 14 }} />
            <span>Tous les projets ({counts.all})</span>
          </button>

          <button
            onClick={() => setSelectedCategory('tools')}
            className={`pill-btn ${selectedCategory === 'tools' ? 'active' : ''}`}
          >
            <Terminal style={{ width: 14, height: 14 }} />
            <span>Outils & Gestion ({counts.tools})</span>
          </button>

          <button
            onClick={() => setSelectedCategory('food')}
            className={`pill-btn ${selectedCategory === 'food' ? 'active' : ''}`}
          >
            <Sparkles style={{ width: 14, height: 14 }} />
            <span>Culinaire & Terroir ({counts.food})</span>
          </button>

          <button
            onClick={() => setSelectedCategory('portfolio')}
            className={`pill-btn ${selectedCategory === 'portfolio' ? 'active' : ''}`}
          >
            <Globe style={{ width: 14, height: 14 }} />
            <span>Portfolios & Découvertes ({counts.portfolio})</span>
          </button>

          <button
            onClick={() => setSelectedCategory('data')}
            className={`pill-btn ${selectedCategory === 'data' ? 'active' : ''}`}
          >
            <Code style={{ width: 14, height: 14 }} />
            <span>Données & Météo ({counts.data})</span>
          </button>
        </div>
      </div>

      {/* Grille des 19 Projets Vercel (Mode Vitrine Technique) */}
      {filteredProjects.length === 0 ? (
        <div className="empty-results-box" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>Aucun projet Vercel ne correspond à "{searchTerm}".</p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
            className="btn btn-secondary"
            style={{ marginTop: '0.85rem' }}
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="vercel-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="card vercel-project-card"
              onClick={() => setSelectedModalProject(project)}
              style={{ cursor: 'pointer' }}
            >
              <div>
                <div className="vercel-card-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div className="vercel-icon-badge cyan">
                      <FileCode style={{ width: 16, height: 16 }} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.72rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                        {project.framework}
                      </span>
                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.08rem', fontWeight: 700, color: '#ffffff' }}>
                        {project.title}
                      </h4>
                    </div>
                  </div>

                  <span className="card-tag amber" title="Données protégées • Consultation seule">
                    <Lock style={{ width: 10, height: 10 }} /> Données Protégées
                  </span>
                </div>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '1rem 0' }}>
                  {project.description}
                </p>

                <div className="card-specs-box" style={{ marginBottom: '1rem' }}>
                  <div className="spec-row">
                    <span className="spec-key">Domaine de déploiement :</span>
                    <span className="spec-val" style={{ color: 'var(--accent-gold)', fontFamily: 'monospace', fontSize: '0.78rem' }}>
                      {project.domain}
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">Niveau d'accès :</span>
                    <span className="spec-val" style={{ color: '#fbbf24' }}>
                      Vitrine Technique / Admin Verrouillé
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="tag-pill">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-footer">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedModalProject(project);
                  }}
                  className="btn btn-secondary"
                  style={{ fontSize: '0.78rem', padding: '0.45rem 0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Eye style={{ width: 13, height: 13, color: 'var(--accent-gold)' }} />
                  <span>Fiche Technique & Specs</span>
                </button>

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="card-action-link"
                    title="Voir le dépôt GitHub"
                  >
                    <GitBranch style={{ width: 13, height: 13 }} />
                    <span>Code Source</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modale Fiche Technique & Présentation de Projet Développé */}
      {selectedModalProject && (
        <div className="modal-overlay" onClick={() => setSelectedModalProject(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 580 }}>
            <button 
              className="close-btn" 
              onClick={() => setSelectedModalProject(null)} 
              style={{ position: 'absolute', top: '1rem', right: '1rem' }}
              title="Fermer"
            >
              <X style={{ width: 18, height: 18 }} />
            </button>

            {/* En-tête de la Fiche Projet */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div style={{ 
                width: 48, 
                height: 48, 
                borderRadius: 'var(--radius-sm)', 
                background: 'rgba(201, 169, 110, 0.12)', 
                border: '1px solid rgba(201, 169, 110, 0.35)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--accent-gold)', 
                flexShrink: 0 
              }}>
                <Server style={{ width: 24, height: 24 }} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                    {selectedModalProject.categoryLabel}
                  </span>
                  <span className="card-tag amber" style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem' }}>
                    <Lock style={{ width: 9, height: 9 }} /> Données Protégées
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>
                  {selectedModalProject.title}
                </h3>
              </div>
            </div>

            {/* Avertissement de Protection des Données d'Administration */}
            <div style={{ 
              background: 'rgba(251, 191, 36, 0.08)', 
              border: '1px solid rgba(251, 191, 36, 0.25)', 
              borderRadius: 'var(--radius-sm)', 
              padding: '0.75rem 0.95rem', 
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.65rem'
            }}>
              <ShieldAlert style={{ width: 18, height: 18, color: '#fbbf24', flexShrink: 0, marginTop: '0.1rem' }} />
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                <strong>Protection de production :</strong> Cette application est connectée à des bases de données réelles d'atelier ou de gestion. 
                Afin d'éviter toute altération ou modification accidentelle, la vitrine est configurée en <strong>mode présentation lecture seule</strong>.
              </p>
            </div>

            {/* Description Détaillée */}
            <div style={{ marginBottom: '1.35rem' }}>
              <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-gold)', fontWeight: 700, marginBottom: '0.45rem' }}>
                Description du Projet
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {selectedModalProject.description}
              </p>
            </div>

            {/* Fiche des Spécifications Techniques */}
            <div className="card-specs-box" style={{ marginBottom: '1.4rem' }}>
              <div className="spec-row">
                <span className="spec-key">Framework & Architecture :</span>
                <span className="spec-val" style={{ color: '#ffffff', fontWeight: 600 }}>{selectedModalProject.framework}</span>
              </div>
              <div className="spec-row">
                <span className="spec-key">Hébergement Cloud :</span>
                <span className="spec-val" style={{ color: 'var(--accent-gold)' }}>Vercel Cloud Edge Network</span>
              </div>
              <div className="spec-row">
                <span className="spec-key">Domaine de production :</span>
                <span className="spec-val" style={{ fontFamily: 'monospace', color: '#38bdf8' }}>{selectedModalProject.domain}</span>
              </div>
              <div className="spec-row">
                <span className="spec-key">Droits d'administration :</span>
                <span className="spec-val" style={{ color: '#fbbf24' }}>Quentin Faber (@Eloura74)</span>
              </div>
            </div>

            {/* Tags & Technologies */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.45rem' }}>
                Technologies & Modules
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {selectedModalProject.tags.map((tag, idx) => (
                  <span key={idx} className="tag-pill" style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem' }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Boutons d'Action Sécurisés */}
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', flexWrap: 'wrap', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.15rem' }}>
              {selectedModalProject.repoUrl && (
                <a
                  href={selectedModalProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: '0.82rem' }}
                >
                  <GitBranch style={{ width: 14, height: 14 }} />
                  <span>Dépôt GitHub</span>
                </a>
              )}

              {onOpenContactWithApp && (
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedModalProject.title;
                    setSelectedModalProject(null);
                    onOpenContactWithApp(title);
                  }}
                  className="btn btn-primary"
                  style={{ fontSize: '0.82rem' }}
                >
                  <Send style={{ width: 14, height: 14 }} />
                  <span>Échanger sur ce projet</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => setSelectedModalProject(null)}
                className="btn btn-secondary"
                style={{ fontSize: '0.82rem' }}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
