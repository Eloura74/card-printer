import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  Upload, 
  CheckCircle2, 
  Image as ImageIcon, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  Palette, 
  Bot, 
  Box, 
  Sliders, 
  Info,
  X
} from 'lucide-react';

export default function CustomProjectWizard({ preselectedProject, onComplete }) {
  const [projectType, setProjectType] = useState(preselectedProject?.category === 'robotics' ? 'prototype' : 'hueforge');
  
  // États de configuration Hueforge / Image
  const [uploadedImage, setUploadedImage] = useState(null);
  const [formatSize, setFormatSize] = useState('20x30'); // '15x20', '20x30', '30x40', 'custom'
  const [customDimensions, setCustomDimensions] = useState('');
  const [withFrame, setWithFrame] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [materialChoice, setMaterialChoice] = useState('PLA Premium');

  // Contact
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [projectNotes, setProjectNotes] = useState(
    preselectedProject ? `Bonjour Quentin, je souhaite une création inspirée de "${preselectedProject.title}".` : ''
  );
  const [submitted, setSubmitted] = useState(false);

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setUploadedImage(ev.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getFormatLabel = () => {
    switch (formatSize) {
      case '15x20': return '15 × 20 cm (Format Compact)';
      case '20x30': return '20 × 30 cm (Format Standard A4)';
      case '30x40': return '30 × 40 cm (Grand Format d\'exposition)';
      case 'custom': return customDimensions ? `Sur-mesure (${customDimensions})` : 'Dimensions personnalisées';
      default: return '20 × 30 cm';
    }
  };

  if (submitted) {
    return (
      <div className="customizer-container">
        <div className="card customizer-card" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
          <CheckCircle2 style={{ width: 54, height: 54, color: 'var(--accent-sage)', margin: '0 auto 1rem auto' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
            Demande de Projet Enregistrée !
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 480, margin: '0.6rem auto 1.5rem auto', fontSize: '0.9rem', lineHeight: 1.6 }}>
            Merci <strong>{clientName || 'Maker'}</strong> ! Votre projet <strong>{projectType === 'hueforge' ? 'Tableau Hueforge' : 'Projet 3D'}</strong> a bien été structuré. Je vous recontacterai rapidement sur {clientContact || 'vos coordonnées'} pour affiner la modélisation.
          </p>

          <div className="card-specs-box" style={{ maxWidth: 440, margin: '0 auto 1.5rem auto', textAlign: 'left' }}>
            <div className="spec-row">
              <span className="spec-key">Type :</span>
              <span className="spec-val" style={{ color: 'var(--accent-terracotta)' }}>{projectType.toUpperCase()}</span>
            </div>
            {projectType === 'hueforge' && (
              <>
                <div className="spec-row">
                  <span className="spec-key">Dimensions :</span>
                  <span className="spec-val">{getFormatLabel()}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">Cadre de présentation :</span>
                  <span className="spec-val">{withFrame ? 'Oui (Inclus)' : 'Sans cadre'}</span>
                </div>
              </>
            )}
            <div className="spec-row">
              <span className="spec-key">Quantité :</span>
              <span className="spec-val">{quantity}</span>
            </div>
          </div>

          <button
            onClick={() => {
              setSubmitted(false);
              setUploadedImage(null);
              if (onComplete) onComplete();
            }}
            className="btn btn-primary"
          >
            Nouvelle demande
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="customizer-container">
      <div className="section-header-compact">
        <span className="section-eyebrow">Studio Sur-Mesure</span>
        <h2 className="section-heading">Créer & Configurer Votre Projet 3D</h2>
        <p className="section-subtext">
          Tableaux Hueforge personnalisés sur photo, prototypes fonctionnels ou répliques d'atelier.
        </p>
      </div>

      <div className="customizer-layout">
        {/* Colonne de Gauche : Configuration par étapes */}
        <form onSubmit={handleSubmit} className="customizer-form-card card">
          {/* Étape 1 : Choix du type de projet */}
          <div className="wizard-step">
            <label className="wizard-step-label">
              <span className="wizard-step-number">1</span>
              <span>Que souhaitez-vous créer ?</span>
            </label>
            <div className="project-type-grid">
              <button
                type="button"
                className={`type-card-btn ${projectType === 'hueforge' ? 'active' : ''}`}
                onClick={() => setProjectType('hueforge')}
              >
                <Palette style={{ width: 18, height: 18 }} />
                <strong>Tableau Hueforge</strong>
                <small>Multicouche d'art sur photo ou fan-art</small>
              </button>

              <button
                type="button"
                className={`type-card-btn ${projectType === 'portrait' ? 'active' : ''}`}
                onClick={() => setProjectType('portrait')}
              >
                <ImageIcon style={{ width: 18, height: 18 }} />
                <strong>Portrait Photo</strong>
                <small>Lithophanie ou gravure HD</small>
              </button>

              <button
                type="button"
                className={`type-card-btn ${projectType === 'prototype' ? 'active' : ''}`}
                onClick={() => setProjectType('prototype')}
              >
                <Bot style={{ width: 18, height: 18 }} />
                <strong>Prototype / Robotique</strong>
                <small>Pièces fonctionnelles & mécanismes</small>
              </button>

              <button
                type="button"
                className={`type-card-btn ${projectType === 'sculpture' ? 'active' : ''}`}
                onClick={() => setProjectType('sculpture')}
              >
                <Box style={{ width: 18, height: 18 }} />
                <strong>Cosplay & Sculpture</strong>
                <small>Casques, armures, objets déco</small>
              </button>
            </div>
          </div>

          {/* Étape 2 : Options spécifiques Hueforge & Image */}
          {(projectType === 'hueforge' || projectType === 'portrait') && (
            <div className="wizard-step">
              <label className="wizard-step-label">
                <span className="wizard-step-number">2</span>
                <span>Votre visuel / Photo source</span>
              </label>

              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
              />

              {uploadedImage ? (
                <div className="wizard-uploaded-preview">
                  <img src={uploadedImage} alt="Visuel source" />
                  <button
                    type="button"
                    onClick={() => setUploadedImage(null)}
                    className="btn btn-secondary"
                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
                  >
                    Changer l'image
                  </button>
                </div>
              ) : (
                <div
                  className="wizard-upload-dropzone"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload style={{ width: 26, height: 26, color: 'var(--accent-terracotta)' }} />
                  <p style={{ fontWeight: 600, marginTop: '0.4rem' }}>Déposer ou importer une photo</p>
                  <small style={{ color: 'var(--text-faint)' }}>JPG, PNG • Portrait, manga, pop-culture, animal</small>
                </div>
              )}

              {/* Dimensions */}
              <div style={{ marginTop: '1.25rem' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.5rem' }}>
                  Format du tableau :
                </label>
                <div className="size-selector-grid">
                  <button
                    type="button"
                    className={`size-btn ${formatSize === '15x20' ? 'active' : ''}`}
                    onClick={() => setFormatSize('15x20')}
                  >
                    <strong>15 × 20 cm</strong>
                    <small>Compact</small>
                  </button>
                  <button
                    type="button"
                    className={`size-btn ${formatSize === '20x30' ? 'active' : ''}`}
                    onClick={() => setFormatSize('20x30')}
                  >
                    <strong>20 × 30 cm</strong>
                    <small>Standard A4</small>
                  </button>
                  <button
                    type="button"
                    className={`size-btn ${formatSize === '30x40' ? 'active' : ''}`}
                    onClick={() => setFormatSize('30x40')}
                  >
                    <strong>30 × 40 cm</strong>
                    <small>Grand Format</small>
                  </button>
                  <button
                    type="button"
                    className={`size-btn ${formatSize === 'custom' ? 'active' : ''}`}
                    onClick={() => setFormatSize('custom')}
                  >
                    <strong>Sur-mesure</strong>
                    <small>Personnalisé</small>
                  </button>
                </div>

                {formatSize === 'custom' && (
                  <input
                    type="text"
                    placeholder="Ex: 25 × 25 cm carré, 40 × 50 cm..."
                    value={customDimensions}
                    onChange={(e) => setCustomDimensions(e.target.value)}
                    className="search-input"
                    style={{ marginTop: '0.65rem' }}
                  />
                )}
              </div>

              {/* Cadre & Finitions */}
              <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <label className="toggle-checkbox-label">
                  <input
                    type="checkbox"
                    checked={withFrame}
                    onChange={(e) => setWithFrame(e.target.checked)}
                  />
                  <span>Inclure un cadre de fixation mural / socle d'atelier</span>
                </label>
              </div>
            </div>
          )}

          {/* Étape 2 bis : Pour les prototypes & mécanique */}
          {(projectType === 'prototype' || projectType === 'sculpture') && (
            <div className="wizard-step">
              <label className="wizard-step-label">
                <span className="wizard-step-number">2</span>
                <span>Matériau & Exigences</span>
              </label>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.5rem' }}>
                {['PLA Tough', 'PETG Carbone', 'ASA Technique (UV)', 'TPU Souple'].map((mat) => (
                  <button
                    key={mat}
                    type="button"
                    className={`size-btn ${materialChoice === mat ? 'active' : ''}`}
                    onClick={() => setMaterialChoice(mat)}
                  >
                    <strong>{mat}</strong>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Étape 3 : Quantité & Coordonnées */}
          <div className="wizard-step">
            <label className="wizard-step-label">
              <span className="wizard-step-number">3</span>
              <span>Vos coordonnées</span>
            </label>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
                  Votre Nom / Pseudo *
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Ex: Maxime, @pseudo_tiktok"
                  className="search-input"
                />
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
                  Contact (Email / TikTok / Discord) *
                </label>
                <input
                  type="text"
                  required
                  value={clientContact}
                  onChange={(e) => setClientContact(e.target.value)}
                  placeholder="Ex: monemail@gmail.com ou @mon_tiktok"
                  className="search-input"
                />
              </div>
            </div>

            <div style={{ marginTop: '0.85rem' }}>
              <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
                Détails du projet & instructions :
              </label>
              <textarea
                rows={3}
                value={projectNotes}
                onChange={(e) => setProjectNotes(e.target.value)}
                placeholder="Décrivez votre idée, couleurs souhaitées, usage..."
                className="search-input"
                style={{ resize: 'vertical' }}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '0.5rem' }}>
            <Send style={{ width: 16, height: 16 }} />
            <span>Transmettre ma demande à Quentin</span>
          </button>
        </form>

        {/* Colonne de Droite : Récapitulatif en direct */}
        <div className="customizer-summary-card card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
            <Sparkles style={{ width: 18, height: 18, color: 'var(--accent-terracotta)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
              Résumé du Projet
            </h3>
          </div>

          {uploadedImage && (
            <div style={{ width: '100%', aspectRatio: '4 / 3', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '0.85rem', border: '1px solid var(--border-subtle)' }}>
              <img src={uploadedImage} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}

          <div className="card-specs-box" style={{ marginBottom: '1rem' }}>
            <div className="spec-row">
              <span className="spec-key">Type de création :</span>
              <span className="spec-val" style={{ color: 'var(--accent-terracotta)' }}>{projectType.toUpperCase()}</span>
            </div>
            {(projectType === 'hueforge' || projectType === 'portrait') && (
              <>
                <div className="spec-row">
                  <span className="spec-key">Format sélectionné :</span>
                  <span className="spec-val">{getFormatLabel()}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-key">Cadre d'atelier :</span>
                  <span className="spec-val">{withFrame ? 'Oui (Inclus)' : 'Non'}</span>
                </div>
              </>
            )}
            {(projectType === 'prototype' || projectType === 'sculpture') && (
              <div className="spec-row">
                <span className="spec-key">Matériau :</span>
                <span className="spec-val">{materialChoice}</span>
              </div>
            )}
            <div className="spec-row">
              <span className="spec-key">Fabricant :</span>
              <span className="spec-val" style={{ color: 'var(--accent-sage)' }}>Quentin Faber (Bambu AMS / VZBot)</span>
            </div>
          </div>

          <div className="summary-info-notice">
            <Info style={{ width: 14, height: 14, color: 'var(--accent-sand)', flexShrink: 0 }} />
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Chaque création fait l'objet d'un échange direct avec Quentin pour valider la faisabilité optique ou mécanique avant mise en production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
