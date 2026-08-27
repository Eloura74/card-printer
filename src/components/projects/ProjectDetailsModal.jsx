import React, { useState, useRef } from 'react';
import { 
  X, 
  PlayCircle, 
  ExternalLink, 
  Sparkles, 
  Camera, 
  Upload, 
  RotateCcw, 
  Image as ImageIcon,
  CheckCircle2,
  Wrench,
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';
import { mediaService } from '../../services/mediaService';

export default function ProjectDetailsModal({ 
  project, 
  onClose, 
  onOpenCustomizerWithProject, 
  onOpenTikTokModal 
}) {
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [currentImage, setCurrentImage] = useState(() => mediaService.getProjectImage(project));
  const fileInputRef = useRef(null);

  if (!project) return null;

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target.result;
      mediaService.saveCustomImage(project.id, dataUrl);
      setCurrentImage(dataUrl);
      setIsEditingImage(false);
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSave = () => {
    if (customUrlInput.trim()) {
      mediaService.saveCustomImage(project.id, customUrlInput.trim());
      setCurrentImage(customUrlInput.trim());
      setIsEditingImage(false);
      setCustomUrlInput('');
    }
  };

  const handleResetImage = () => {
    mediaService.resetCustomImage(project.id);
    setCurrentImage(project.image || '/images/projects/sauron.png');
    setIsEditingImage(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card modal-project-details" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} title="Fermer">
          <X style={{ width: 18, height: 18 }} />
        </button>

        {/* Média principal */}
        <div className="project-detail-hero">
          <img
            src={currentImage}
            alt={project.title}
            className="project-detail-img"
          />
          <button
            onClick={() => setIsEditingImage(!isEditingImage)}
            className="card-image-replace-btn"
            title="Modifier ou remplacer cette photo"
          >
            <Camera style={{ width: 13, height: 13 }} />
            <span>Modifier photo</span>
          </button>
        </div>

        {/* Panneau d'upload rapide */}
        {isEditingImage && (
          <div className="image-upload-box">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Upload style={{ width: 14, height: 14 }} /> Personnaliser l'image de ce projet
              </h4>
              <button
                onClick={handleResetImage}
                className="btn btn-secondary"
                style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
              >
                <RotateCcw style={{ width: 12, height: 12 }} /> Restaurer l'originale
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileUpload}
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="btn btn-secondary"
                style={{ width: '100%', padding: '0.55rem' }}
              >
                <ImageIcon style={{ width: 14, height: 14 }} /> Importer une photo locale
              </button>

              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <input
                  type="url"
                  value={customUrlInput}
                  onChange={(e) => setCustomUrlInput(e.target.value)}
                  placeholder="Ou coller un lien direct d'image (https://...)"
                  className="search-input"
                  style={{ padding: '0.45rem 0.75rem', fontSize: '0.78rem' }}
                />
                <button
                  onClick={handleUrlSave}
                  className="btn btn-primary"
                  style={{ padding: '0.45rem 0.75rem', fontSize: '0.78rem', whiteSpace: 'nowrap' }}
                >
                  Appliquer
                </button>
              </div>
            </div>
          </div>
        )}

        {/* En-tête de la fiche */}
        <div style={{ display: 'flex', gap: '0.5rem', margin: '1rem 0 0.4rem 0', flexWrap: 'wrap' }}>
          <span className="card-tag terracotta">
            {project.categoryLabel || project.category}
          </span>
          {project.technical?.printers && project.technical.printers.length > 0 && (
            <span className="card-tag nordic">
              Machine : {project.technical.printers.join(', ')}
            </span>
          )}
        </div>

        <h2 className="project-detail-title">{project.title}</h2>

        <p className="project-detail-description">
          {project.description}
        </p>

        {/* Spécifications techniques complètes */}
        <div className="card-specs-box" style={{ margin: '1.25rem 0' }}>
          {project.technical?.technique && (
            <div className="spec-row">
              <span className="spec-key">Technologie :</span>
              <span className="spec-val">{project.technical.technique}</span>
            </div>
          )}
          {project.technical?.layerHeight && (
            <div className="spec-row">
              <span className="spec-key">Hauteur de couche :</span>
              <span className="spec-val">{project.technical.layerHeight}</span>
            </div>
          )}
          {project.technical?.materials && project.technical.materials.length > 0 && (
            <div className="spec-row">
              <span className="spec-key">Matériaux & Filaments :</span>
              <span className="spec-val">{project.technical.materials.join(' • ')}</span>
            </div>
          )}
          {project.technical?.software && project.technical.software.length > 0 && (
            <div className="spec-row">
              <span className="spec-key">Logiciels CAO / Slicer :</span>
              <span className="spec-val">{project.technical.software.join(' • ')}</span>
            </div>
          )}
          {project.technical?.electronics && project.technical.electronics.length > 0 && (
            <div className="spec-row">
              <span className="spec-key">Électronique & Contrôle :</span>
              <span className="spec-val" style={{ color: 'var(--accent-sage)' }}>
                {project.technical.electronics.join(' • ')}
              </span>
            </div>
          )}
        </div>

        {/* Processus de création (Timeline) si disponible */}
        {Array.isArray(project.process) && project.process.length > 0 && (
          <div className="project-timeline-box">
            <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Layers style={{ width: 15, height: 15, color: 'var(--accent-terracotta)' }} />
              Étapes de Conception & Fabrication
            </h4>
            <div className="timeline-steps">
              {project.process.map((step, idx) => (
                <div key={idx} className="timeline-step-item">
                  <div className="timeline-step-bullet">{idx + 1}</div>
                  <div>
                    <span className="timeline-step-phase">{step.step}</span>
                    <h5 className="timeline-step-title">{step.title}</h5>
                    <p className="timeline-step-text">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', margin: '1rem 0' }}>
          {project.tags.map((t, idx) => (
            <span key={idx} className="tag-pill">
              #{t}
            </span>
          ))}
        </div>

        {/* Actions du modal */}
        <div className="modal-actions-bar">
          {project.tiktokUrl && (
            <button
              onClick={() => onOpenTikTokModal(project)}
              className="btn btn-tiktok"
            >
              <PlayCircle style={{ width: 16, height: 16, color: 'var(--accent-terracotta)' }} />
              <span>Voir la vidéo TikTok</span>
            </button>
          )}

          <button
            onClick={() => onOpenCustomizerWithProject(project)}
            className="btn btn-primary"
          >
            <Sparkles style={{ width: 15, height: 15 }} />
            <span>Demander une création similaire</span>
          </button>
        </div>
      </div>
    </div>
  );
}
