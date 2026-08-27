import React from 'react';
import { PlayCircle, ArrowRight, Sparkles, Box, Cpu } from 'lucide-react';
import { mediaService } from '../../services/mediaService';

export default function ProjectCard({ project, onSelectProject, onOpenTikTokModal }) {
  const imageUrl = mediaService.getProjectImage(project);

  const getCategoryBadgeClass = (cat) => {
    switch (cat) {
      case 'hueforge':
        return 'terracotta';
      case 'robotics':
        return 'sage';
      case 'cosplay':
        return 'nordic';
      default:
        return 'amber';
    }
  };

  return (
    <div 
      className="card project-card-modern"
      onClick={() => onSelectProject(project)}
      style={{ cursor: 'pointer' }}
    >
      <div>
        <div className="card-image-wrapper">
          <img
            src={imageUrl}
            alt={project.title}
            className="card-image"
            loading="lazy"
          />
          <div className="card-image-badge">
            <span className={`card-tag ${getCategoryBadgeClass(project.category)}`}>
              {project.categoryLabel || project.category}
            </span>
          </div>
          {project.featured && (
            <div style={{ position: 'absolute', top: '0.65rem', right: '0.65rem' }}>
              <span className="card-tag amber" style={{ fontSize: '0.68rem', gap: '0.25rem' }}>
                <Sparkles style={{ width: 10, height: 10 }} /> Pièce Phare
              </span>
            </div>
          )}
        </div>

        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.shortDescription || project.description}</p>

        {/* Détails techniques résumés */}
        <div className="card-specs-box">
          {project.technical?.technique && (
            <div className="spec-row">
              <span className="spec-key">Technique :</span>
              <span className="spec-val">{project.technical.technique}</span>
            </div>
          )}
          {project.technical?.layerHeight && (
            <div className="spec-row">
              <span className="spec-key">Précision :</span>
              <span className="spec-val">{project.technical.layerHeight}</span>
            </div>
          )}
          {project.technical?.materials && project.technical.materials.length > 0 && (
            <div className="spec-row">
              <span className="spec-key">Matière :</span>
              <span className="spec-val">{project.technical.materials[0]}</span>
            </div>
          )}
        </div>
      </div>

      <div className="card-footer">
        {project.tiktokUrl ? (
          <button
            type="button"
            className="btn-tiktok-compact"
            onClick={(e) => {
              e.stopPropagation();
              onOpenTikTokModal(project);
            }}
            title="Voir la vidéo TikTok intégrée"
          >
            <PlayCircle style={{ width: 14, height: 14, color: 'var(--accent-terracotta)' }} />
            <span>Vidéo TikTok</span>
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
            {project.tags.slice(0, 2).map((tag, idx) => (
              <span key={idx} style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                #{tag}
              </span>
            ))}
          </div>
        )}

        <span className="card-action-link">
          <span>Détails</span>
          <ArrowRight style={{ width: 13, height: 13 }} />
        </span>
      </div>
    </div>
  );
}
