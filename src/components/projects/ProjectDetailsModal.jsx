import React, { useState, useRef } from 'react';
import { 
  X, 
  PlayCircle, 
  ExternalLink, 
  Camera, 
  Upload, 
  RotateCcw, 
  Image as ImageIcon,
  MessageSquare
} from 'lucide-react';
import { mediaService } from '../../services/mediaService';

export default function ProjectDetailsModal({ 
  project, 
  onClose, 
  onContactAboutProject, 
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
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} title="Fermer">
          <X style={{ width: 18, height: 18 }} />
        </button>

        {/* Photo principale */}
        <div className="project-detail-hero">
          <img
            src={currentImage}
            alt={project.title}
            className="project-detail-img"
          />
          <button
            onClick={() => setIsEditingImage(!isEditingImage)}
            className="card-image-replace-btn"
            title="Remplacer cette photo"
          >
            <Camera style={{ width: 13, height: 13 }} />
            <span>Changer photo</span>
          </button>
        </div>

        {/* Panneau d'upload rapide */}
        {isEditingImage && (
          <div className="image-upload-box">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Upload style={{ width: 14, height: 14 }} /> Remplacer l'image
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
                <ImageIcon style={{ width: 14, height: 14 }} /> Importer un fichier depuis l'ordinateur
              </button>

              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <input
                  type="url"
                  value={customUrlInput}
                  onChange={(e) => setCustomUrlInput(e.target.value)}
                  placeholder="Ou coller une URL d'image"
                  className="search-input"
                  style={{ padding: '0.45rem 0.75rem', fontSize: '0.78rem' }}
                />
                <button
                  onClick={handleUrlSave}
                  className="btn btn-primary"
                  style={{ padding: '0.45rem 0.75rem', fontSize: '0.78rem' }}
                >
                  Valider
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Détails */}
        <div style={{ display: 'flex', gap: '0.5rem', margin: '0.8rem 0 0.4rem 0' }}>
          <span className="card-tag terracotta">
            {project.categoryLabel}
          </span>
        </div>

        <h2 className="project-detail-title">{project.title}</h2>

        <p className="project-detail-description">
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', margin: '1rem 0' }}>
          {project.tags.map((t, idx) => (
            <span key={idx} className="tag-pill">
              #{t}
            </span>
          ))}
        </div>

        {/* Actions */}
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
            onClick={() => onContactAboutProject(project)}
            className="btn btn-primary"
          >
            <MessageSquare style={{ width: 15, height: 15 }} />
            <span>Échanger sur ce projet</span>
          </button>
        </div>
      </div>
    </div>
  );
}
