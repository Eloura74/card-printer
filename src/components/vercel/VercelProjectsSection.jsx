import React, { useState, useMemo } from 'react';
import { 
  ExternalLink, 
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
  Key,
  Eye
} from 'lucide-react';
import { vercelProfile, vercelProjectsList } from '../../data/vercelProjectsData';

export default function VercelProjectsSection({ onOpenContactWithApp }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [securityModalProject, setSecurityModalProject] = useState(null);

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

  const handleProjectClick = (project, e) => {
    if (project.accessType === 'auth_required') {
      e.preventDefault();
      setSecurityModalProject(project);
    }
  };

  return (
    <section className="vercel-section">
      <div className="section-header-compact">
        <span className="section-eyebrow">Cloud & Déploiements Web</span>
        <h2 className="section-heading">Mes Développements & Projets Vercel</h2>
        <p className="section-subtext">
          Consultez mes applications web déployées. Les outils de gestion atelier intègrent une protection en écriture.
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
                <Cloud style={{ width: 12, height: 12 }} /> {vercelProjectsList.length} Déploiements
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
            <span>Mon Dashboard Vercel</span>
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

      {/* Grille des Projets Vercel */}
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
            <div key={project.id} className="card vercel-project-card">
              <div>
                <div className="vercel-card-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div className="vercel-icon-badge cyan">
                      <Terminal style={{ width: 16, height: 16 }} />
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

                  {project.accessType === 'auth_required' ? (
                    <span className="card-tag amber" title="Consultation libre • Modifications réservées aux utilisateurs enregistrés">
                      <Lock style={{ width: 11, height: 11 }} /> Données Protégées
                    </span>
                  ) : (
                    <span className="card-tag sage">
                      <CheckCircle2 style={{ width: 11, height: 11 }} /> Accès Public
                    </span>
                  )}
                </div>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '1rem 0' }}>
                  {project.description}
                </p>

                <div className="card-specs-box" style={{ marginBottom: '1rem' }}>
                  <div className="spec-row">
                    <span className="spec-key">Domaine Vercel :</span>
                    <span className="spec-val" style={{ color: 'var(--accent-gold)' }}>{project.domain}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">Contrôle d'accès :</span>
                    <span className="spec-val" style={{ color: project.accessType === 'auth_required' ? '#fbbf24' : 'var(--accent-sage)' }}>
                      {project.accessType === 'auth_required' ? 'Lecture Seule / Login requis' : 'Accès libre complet'}
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
                {project.accessType === 'auth_required' ? (
                  <button
                    onClick={(e) => handleProjectClick(project, e)}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.78rem', padding: '0.45rem 0.85rem' }}
                  >
                    <Eye style={{ width: 13, height: 13, color: '#fbbf24' }} />
                    <span>Ouvrir l'application (Protégée)</span>
                  </button>
                ) : (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ fontSize: '0.78rem', padding: '0.45rem 0.85rem' }}
                  >
                    <Globe style={{ width: 13, height: 13, color: 'var(--accent-gold)' }} />
                    <span>Visiter le site</span>
                  </a>
                )}

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-action-link"
                  >
                    <GitBranch style={{ width: 13, height: 13 }} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal de Sécurité & Avertissement pour les Sites Sensibles */}
      {securityModalProject && (
        <div className="modal-overlay" onClick={() => setSecurityModalProject(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 520 }}>
            <button className="close-btn" onClick={() => setSecurityModalProject(null)} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <X style={{ width: 18, height: 18 }} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.15rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'rgba(251, 191, 36, 0.15)', border: '1px solid rgba(251, 191, 36, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24', flexShrink: 0 }}>
                <ShieldAlert style={{ width: 24, height: 24 }} />
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                  Espace d'Atelier Sécurisé
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                  {securityModalProject.title}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              Cette application gère des <strong>données d'atelier, de stock ou des fonctions d'administration réelles</strong>.  
              La consultation publique est autorisée, mais les actions d'écriture, de modification ou de suppression nécessitent un <strong>compte utilisateur enregistré et authentifié</strong>.
            </p>

            <div className="card-specs-box" style={{ marginBottom: '1.5rem' }}>
              <div className="spec-row">
                <span className="spec-key">Domaine sécurisé :</span>
                <span className="spec-val" style={{ color: 'var(--accent-gold)' }}>{securityModalProject.domain}</span>
              </div>
              <div className="spec-row">
                <span className="spec-key">Mode d'accès :</span>
                <span className="spec-val" style={{ color: '#fbbf24' }}>Lecture Seule / Connexion Admin requise</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <button
                onClick={() => setSecurityModalProject(null)}
                className="btn btn-secondary"
              >
                Annuler
              </button>

              <a
                href={securityModalProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                onClick={() => setSecurityModalProject(null)}
              >
                <Globe style={{ width: 14, height: 14 }} />
                <span>Accéder à l'application</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
