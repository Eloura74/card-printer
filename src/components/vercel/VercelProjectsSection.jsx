import React, { useState, useMemo } from 'react';
import { 
  Printer,
  Boxes,
  Lightbulb,
  Zap,
  Camera,
  Target,
  CloudSun,
  Utensils,
  BookOpen,
  Wine,
  Beer,
  Terminal,
  Layout,
  Compass,
  Flower2,
  CheckSquare,
  Palette,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Sparkles,
  Layers,
  GitBranch,
  Search,
  X,
  Eye,
  Send,
  CheckCircle2,
  ArrowRight,
  Server,
  Cloud,
  Cpu,
  Globe,
  Code
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
        p.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Rendu de l'icône contextuelle explicite
  const renderProjectIcon = (iconType) => {
    const iconProps = { style: { width: 18, height: 18 } };
    switch (iconType) {
      case 'printer':
        return <Printer {...iconProps} />;
      case 'boxes':
        return <Boxes {...iconProps} />;
      case 'lamp':
        return <Lightbulb {...iconProps} />;
      case 'zap':
        return <Zap {...iconProps} />;
      case 'camera':
        return <Camera {...iconProps} />;
      case 'target':
        return <Target {...iconProps} />;
      case 'cloud-sun':
        return <CloudSun {...iconProps} />;
      case 'utensils':
        return <Utensils {...iconProps} />;
      case 'book-open':
        return <BookOpen {...iconProps} />;
      case 'sparkles':
        return <Sparkles {...iconProps} />;
      case 'wine':
        return <Wine {...iconProps} />;
      case 'beer':
        return <Beer {...iconProps} />;
      case 'terminal':
        return <Terminal {...iconProps} />;
      case 'layout':
        return <Layout {...iconProps} />;
      case 'compass':
        return <Compass {...iconProps} />;
      case 'flower':
        return <Flower2 {...iconProps} />;
      case 'check-square':
        return <CheckSquare {...iconProps} />;
      case 'palette':
        return <Palette {...iconProps} />;
      case 'shield-check':
        return <ShieldCheck {...iconProps} />;
      default:
        return <Code {...iconProps} />;
    }
  };

  return (
    <section className="vercel-section">
      <div className="section-header-compact">
        <span className="section-eyebrow">Ingénierie Web & Cloud</span>
        <h2 className="section-heading">Vitrine des 19 Applications Vercel</h2>
        <p className="section-subtext">
          Présentation explicite des applications, architectures logicielles et outils développés par Quentin Faber.
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
                <Cloud style={{ width: 12, height: 12 }} /> 19 Déploiements Cloud
              </span>
              <span className="card-tag amber" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Lock style={{ width: 11, height: 11 }} /> Mode Vitrine Sécurisée (Lecture Seule)
              </span>
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '0.45rem', maxWidth: 760, lineHeight: 1.6 }}>
              {vercelProfile.bio} <strong>Les bases de données de production et modules d'administration réels restent protégés</strong> : 
              chaque carte détaille le rôle de l'application, ses modules clés et son architecture technique.
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
            placeholder="Rechercher une application (StockFlow, LumiStock, StockElec, Let's Cook, Météo Maps, TaskFlow...)"
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
            <span>Outils & Logistique ({counts.tools})</span>
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
            <span>Portfolios & Vitrines ({counts.portfolio})</span>
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

      {/* Grille des 19 Cartes Vercel Explicites */}
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
            >
              {/* 1. Barre de fenêtre d'application (Browser Mockup Bar) */}
              <div className="browser-mockup-bar">
                <div className="browser-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="browser-domain-pill" title={`Domaine : ${project.domain}`}>
                  <Lock style={{ width: 10, height: 10, color: 'var(--accent-gold)', flexShrink: 0 }} />
                  <span className="browser-domain-text">{project.domain}</span>
                </div>
                <span className="browser-framework-badge">
                  {project.framework}
                </span>
              </div>

              {/* 2. Corps de la carte */}
              <div className="vercel-card-body">
                <div className="vercel-title-row">
                  <div className="vercel-icon-circle">
                    {renderProjectIcon(project.iconType)}
                  </div>
                  <div>
                    <span className="vercel-category-eyebrow">{project.categoryLabel}</span>
                    <h3 className="vercel-card-title">{project.title}</h3>
                  </div>
                </div>

                {/* Encadré Objectif & Rôle Principal */}
                <div className="vercel-purpose-box">
                  <span className="purpose-label">🎯 Rôle :</span>
                  <span className="purpose-text">{project.purpose}</span>
                </div>

                <p className="vercel-card-desc">
                  {project.description}
                </p>

                {/* Liste explicite des fonctionnalités concrètes */}
                <div className="vercel-highlights-list">
                  <span className="highlights-header">Fonctionnalités & Modules clés :</span>
                  {project.highlights.map((h, i) => (
                    <div key={i} className="highlight-item">
                      <CheckCircle2 style={{ width: 13, height: 13, color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.15rem' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tags Technologiques */}
                <div className="vercel-tags-row">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="tag-pill">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3. Pied de carte & Boutons */}
              <div className="vercel-card-footer">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedModalProject(project);
                  }}
                  className="btn btn-primary btn-sm"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <Eye style={{ width: 13, height: 13 }} />
                  <span>Fiche & Architecture</span>
                  <ArrowRight style={{ width: 12, height: 12 }} />
                </button>

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="btn btn-secondary btn-sm"
                    title="Voir le dépôt GitHub"
                  >
                    <GitBranch style={{ width: 13, height: 13 }} />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modale Fiche Technique Détaillée de l'Application */}
      {selectedModalProject && (
        <div className="modal-overlay" onClick={() => setSelectedModalProject(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 620 }}>
            <button 
              className="close-btn" 
              onClick={() => setSelectedModalProject(null)} 
              style={{ position: 'absolute', top: '1rem', right: '1rem' }}
              title="Fermer"
            >
              <X style={{ width: 18, height: 18 }} />
            </button>

            {/* En-tête de la Fiche */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div style={{ 
                width: 48, 
                height: 48, 
                borderRadius: 'var(--radius-sm)', 
                background: 'rgba(201, 169, 110, 0.15)', 
                border: '1px solid rgba(201, 169, 110, 0.4)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--accent-gold)', 
                flexShrink: 0 
              }}>
                {renderProjectIcon(selectedModalProject.iconType)}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                    {selectedModalProject.categoryLabel}
                  </span>
                  <span className="card-tag amber" style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem' }}>
                    <Lock style={{ width: 9, height: 9 }} /> Données Protégées (Admin)
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>
                  {selectedModalProject.title}
                </h3>
              </div>
            </div>

            {/* Encadré Objectif & Protection */}
            <div style={{ 
              background: 'rgba(251, 191, 36, 0.07)', 
              border: '1px solid rgba(251, 191, 36, 0.25)', 
              borderRadius: 'var(--radius-sm)', 
              padding: '0.85rem 1rem', 
              marginBottom: '1.35rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem'
            }}>
              <ShieldAlert style={{ width: 20, height: 20, color: '#fbbf24', flexShrink: 0, marginTop: '0.1rem' }} />
              <div>
                <p style={{ fontSize: '0.84rem', color: '#ffffff', fontWeight: 600, margin: '0 0 0.25rem 0' }}>
                  {selectedModalProject.purpose}
                </p>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Application connectée à des bases de données réelles. Pour préserver l'intégrité des inventaires et des données atelier, 
                  l'application est documentée en <strong>mode vitrine technique</strong> (les droits d'écriture sont réservés à Quentin Faber).
                </p>
              </div>
            </div>

            {/* Description Complète */}
            <div style={{ marginBottom: '1.35rem' }}>
              <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent-gold)', fontWeight: 700, marginBottom: '0.45rem' }}>
                Description & Fonctionnement
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {selectedModalProject.description}
              </p>
            </div>

            {/* Fonctionnalités Clés Développées */}
            <div style={{ marginBottom: '1.35rem', background: 'var(--bg-surface-elevated)', padding: '0.9rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#ffffff', fontWeight: 700, marginBottom: '0.65rem' }}>
                Modules & Réalisations Développés :
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedModalProject.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 style={{ width: 14, height: 14, color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.15rem' }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Spécifications & Architecture */}
            <div className="card-specs-box" style={{ marginBottom: '1.4rem' }}>
              <div className="spec-row">
                <span className="spec-key">Stack & Framework :</span>
                <span className="spec-val" style={{ color: '#ffffff', fontWeight: 600 }}>{selectedModalProject.architecture?.stack || selectedModalProject.framework}</span>
              </div>
              <div className="spec-row">
                <span className="spec-key">Gestion d'État & Données :</span>
                <span className="spec-val" style={{ color: 'var(--accent-gold)' }}>{selectedModalProject.architecture?.state || 'React Hooks & Local Storage'}</span>
              </div>
              <div className="spec-row">
                <span className="spec-key">Hébergement Cloud :</span>
                <span className="spec-val" style={{ color: 'var(--accent-gold)' }}>Vercel Cloud Edge Network</span>
              </div>
              <div className="spec-row">
                <span className="spec-key">Domaine de déploiement :</span>
                <span className="spec-val" style={{ fontFamily: 'monospace', color: '#38bdf8' }}>{selectedModalProject.domain}</span>
              </div>
              <div className="spec-row">
                <span className="spec-key">Droits d'administration :</span>
                <span className="spec-val" style={{ color: '#fbbf24' }}>Quentin Faber (@Eloura74)</span>
              </div>
            </div>

            {/* Tags & Technologies */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {selectedModalProject.tags.map((tag, idx) => (
                  <span key={idx} className="tag-pill" style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem' }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions du Modal */}
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
