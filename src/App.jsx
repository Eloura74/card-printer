import React, { useState, useMemo, useRef } from 'react';
import inventoryData from './data/inventory.json';
import portfolioData from './data/portfolio.json';
import {
  Layers,
  Box,
  Search,
  ExternalLink,
  Tag,
  CheckCircle2,
  AlertCircle,
  X,
  Sparkles,
  Info,
  Palette,
  Bot,
  Send,
  MessageSquare,
  ChevronRight,
  Upload,
  Image as ImageIcon,
  RotateCcw,
  Camera,
  PlayCircle
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('portfolio'); // 'portfolio', 'inventory', 'contact'
  
  // États Portfolio
  const [portfolioCategory, setPortfolioCategory] = useState('all');
  const [selectedCreation, setSelectedCreation] = useState(null);
  
  // Custom Images Uploadées par l'utilisateur (Persistance LocalStorage)
  const [customImages, setCustomImages] = useState(() => {
    try {
      const saved = localStorage.getItem('foxtrott_custom_images');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  // Mode remplacement d'image dans la modale
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [customImageUrlInput, setCustomImageUrlInput] = useState('');
  const fileInputRef = useRef(null);

  // États Inventaire
  const [searchTerm, setSearchTerm] = useState('');
  const [inventoryCategory, setInventoryCategory] = useState('all');
  const [quantityFilter, setQuantityFilter] = useState('all'); // 'all', 'exact', 'unspecified'
  const [selectedItem, setSelectedItem] = useState(null);

  // État Réservation / Contact
  const [reservationItem, setReservationItem] = useState(null);
  const [contactName, setContactName] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);

  // Sauvegarde des images customisées dans localStorage
  const saveCustomImage = (creationId, newImageUrl) => {
    const updated = { ...customImages, [creationId]: newImageUrl };
    setCustomImages(updated);
    try {
      localStorage.setItem('foxtrott_custom_images', JSON.stringify(updated));
    } catch (e) {
      console.warn('Impossible de sauvegarder dans localStorage:', e);
    }
    setIsEditingImage(false);
    setCustomImageUrlInput('');
  };

  // Réinitialiser l'image originale
  const resetCustomImage = (creationId) => {
    const updated = { ...customImages };
    delete updated[creationId];
    setCustomImages(updated);
    try {
      localStorage.setItem('foxtrott_custom_images', JSON.stringify(updated));
    } catch (e) {
      console.warn('Erreur réinitialisation localStorage:', e);
    }
    setIsEditingImage(false);
  };

  // Gestion de l'upload local de fichier image
  const handleFileUpload = (e, creationId) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const base64Data = uploadEvent.target.result;
      saveCustomImage(creationId, base64Data);
    };
    reader.readAsDataURL(file);
  };

  // Obtenir l'image active d'une création
  const getCreationImage = (creation) => {
    if (customImages[creation.id]) {
      return customImages[creation.id];
    }
    return creation.image;
  };

  // Extraction de tous les items d'inventaire
  const allInventoryItems = useMemo(() => {
    const items = [];
    inventoryData.locations.forEach((loc) => {
      loc.items.forEach((item) => {
        items.push({
          ...item
        });
      });
    });
    return items;
  }, []);

  // Filtrage du Portfolio
  const filteredCreations = useMemo(() => {
    if (portfolioCategory === 'all') return portfolioData.creations;
    return portfolioData.creations.filter((c) => c.category === portfolioCategory);
  }, [portfolioCategory]);

  // Filtrage de l'inventaire
  const filteredInventory = useMemo(() => {
    return allInventoryItems.filter((item) => {
      const matchSearch =
        searchTerm.trim() === '' ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.brand_or_system && item.brand_or_system.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.category && item.category.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.condition && item.condition.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.quantity_text && item.quantity_text.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchCat =
        inventoryCategory === 'all' || item.category === inventoryCategory;

      const matchQty =
        quantityFilter === 'all'
          ? true
          : quantityFilter === 'exact'
          ? item.quantity !== null
          : item.quantity === null;

      return matchSearch && matchCat && matchQty;
    });
  }, [allInventoryItems, searchTerm, inventoryCategory, quantityFilter]);

  const handleSendContact = (e) => {
    e.preventDefault();
    setContactSent(true);
    setTimeout(() => {
      setContactSent(false);
      setReservationItem(null);
      setContactMessage('');
    }, 4000);
  };

  return (
    <div>
      {/* Header Navigation Scandinave Sombre */}
      <header className="app-header">
        <div className="app-container header-content">
          <div className="brand-section">
            <div className="brand-logo-hex">
              <Box style={{ width: 22, height: 22 }} />
            </div>
            <div className="brand-info">
              <h1>
                {portfolioData.creator.name}
              </h1>
              <p>
                <span>{portfolioData.creator.subtitle}</span>
                <span style={{ color: 'var(--border-subtle)' }}>•</span>
                <a
                  href={portfolioData.creator.tiktok_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-terracotta)', fontWeight: 600, textDecoration: 'none' }}
                >
                  {portfolioData.creator.tiktok_handle}
                </a>
              </p>
            </div>
          </div>

          <div className="header-actions">
            <a
              href={portfolioData.creator.tiktok_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-tiktok"
              title="Voir mon profil complet sur TikTok"
            >
              <ExternalLink style={{ width: 14, height: 14 }} />
              <span>Profil TikTok</span>
            </a>

            <button
              onClick={() => setActiveTab('contact')}
              className="btn btn-primary"
            >
              <MessageSquare style={{ width: 14, height: 14 }} />
              <span>Contact Atelier</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-container" style={{ paddingTop: '1.5rem' }}>
        {/* Navigation Tabs */}
        <div className="nav-tabs-wrapper">
          <div className="nav-tabs">
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`nav-tab-btn ${activeTab === 'portfolio' ? 'active' : ''}`}
            >
              <Palette style={{ width: 17, height: 17 }} />
              <span>Créations & Projets 3D</span>
              <span className="tab-badge">{portfolioData.creations.length}</span>
            </button>

            <button
              onClick={() => setActiveTab('inventory')}
              className={`nav-tab-btn ${activeTab === 'inventory' ? 'active' : ''}`}
            >
              <Box style={{ width: 17, height: 17 }} />
              <span>Pièces Détachées Disponibles</span>
              <span className="tab-badge">{inventoryData.summary.item_types_count}</span>
            </button>

            <button
              onClick={() => setActiveTab('contact')}
              className={`nav-tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
            >
              <Send style={{ width: 17, height: 17 }} />
              <span>Demande & Sur-Mesure</span>
            </button>
          </div>
        </div>

        {/* ================= SECTION 1 : VITRINE & PORTFOLIO AVEC PHOTOS TIKTOK ================= */}
        {activeTab === 'portfolio' && (
          <div>
            {/* Hero Showcase Banner */}
            <div className="hero-banner">
              <div className="hero-tag">
                <Sparkles style={{ width: 13, height: 13 }} /> Atelier FoxtrottQuebec 3D
              </div>
              <h2 className="hero-title">
                Conception CAO, Hueforge & <span>Impressions d'Exception</span>
              </h2>
              <p className="hero-desc">
                Retrouvez mes créations partagées sur TikTok (<a href={portfolioData.creator.tiktok_url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-terracotta)', textDecoration: 'none', fontWeight: 600 }}>{portfolioData.creator.tiktok_handle}</a>) : tableaux d'art multicouches Hueforge, projets robotiques et mécaniques, sculptures en relief 3D.
              </p>
              <div className="hero-specialties">
                {portfolioData.creator.specialties.map((spec, i) => (
                  <span key={i} className="specialty-pill">
                    {spec}
                  </span>
                ))}
              </div>

              {/* Portfolio Filter Pills */}
              <div className="filter-bar" style={{ padding: '0.85rem 1.25rem' }}>
                <div className="filter-pills">
                  <button
                    onClick={() => setPortfolioCategory('all')}
                    className={`pill-btn ${portfolioCategory === 'all' ? 'active' : ''}`}
                  >
                    <Layers style={{ width: 14, height: 14 }} /> Tous les projets ({portfolioData.creations.length})
                  </button>
                  <button
                    onClick={() => setPortfolioCategory('hueforge')}
                    className={`pill-btn ${portfolioCategory === 'hueforge' ? 'active' : ''}`}
                  >
                    <Palette style={{ width: 14, height: 14 }} /> Tableaux & Hueforge ({portfolioData.creations.filter(c => c.category === 'hueforge').length})
                  </button>
                  <button
                    onClick={() => setPortfolioCategory('robotique')}
                    className={`pill-btn ${portfolioCategory === 'robotique' ? 'active' : ''}`}
                  >
                    <Bot style={{ width: 14, height: 14 }} /> Projets Robotiques ({portfolioData.creations.filter(c => c.category === 'robotique').length})
                  </button>
                  <button
                    onClick={() => setPortfolioCategory('cosplay')}
                    className={`pill-btn ${portfolioCategory === 'cosplay' ? 'active' : ''}`}
                  >
                    <Box style={{ width: 14, height: 14 }} /> Cosplay, Casques & Sculptures ({portfolioData.creations.filter(c => c.category === 'cosplay').length})
                  </button>
                </div>
              </div>
            </div>

            {/* Portfolio Grid avec Photos */}
            <div className="portfolio-grid">
              {filteredCreations.map((creation) => {
                const itemImage = getCreationImage(creation);

                return (
                  <div
                    key={creation.id}
                    className="card"
                    onClick={() => {
                      setSelectedCreation(creation);
                      setIsEditingImage(false);
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <div>
                      {/* Image Preview */}
                      <div className="card-image-wrapper">
                        <img
                          src={itemImage}
                          alt={creation.title}
                          className="card-image"
                          loading="lazy"
                        />
                        <div className="card-image-badge">
                          <span className="card-tag terracotta">
                            {creation.category_label}
                          </span>
                        </div>
                      </div>

                      <h3 className="card-title">{creation.title}</h3>
                      <p className="card-desc">{creation.description}</p>

                      {/* Tech details box sobre */}
                      <div className="card-specs-box">
                        <div className="spec-row">
                          <span className="spec-key">Technique :</span>
                          <span className="spec-val">{creation.tech_details.technique}</span>
                        </div>
                        {creation.tech_details.hauteur_couche && (
                          <div className="spec-row">
                            <span className="spec-key">Hauteur couche :</span>
                            <span className="spec-val">{creation.tech_details.hauteur_couche}</span>
                          </div>
                        )}
                        <div className="spec-row">
                          <span className="spec-key">Matière :</span>
                          <span className="spec-val">{creation.tech_details.matiere || 'PLA Pro'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      {creation.tiktok_video_url ? (
                        <a
                          href={creation.tiktok_video_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            color: 'var(--text-main)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            textDecoration: 'none'
                          }}
                        >
                          <PlayCircle style={{ width: 15, height: 15, color: 'var(--accent-terracotta)' }} />
                          <span>Voir vidéo TikTok</span>
                        </a>
                      ) : (
                        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                          {creation.tags.slice(0, 2).map((tag, idx) => (
                            <span key={idx} style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <span style={{ color: 'var(--accent-terracotta)', fontSize: '0.82rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                        Détails &rarr;
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= SECTION 2 : PIECES DETACHEES & STOCK ================= */}
        {activeTab === 'inventory' && (
          <div>
            {/* Stats Ribbon Épuré */}
            <div className="stats-ribbon">
              <div className="stat-box">
                <span className="stat-label">Références en stock</span>
                <span className="stat-num">
                  {inventoryData.summary.item_types_count}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-faint)', marginTop: '0.35rem' }}>Pièces répertoriées</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Quantités disponibles</span>
                <span className="stat-num" style={{ color: 'var(--accent-sage)' }}>
                  {inventoryData.summary.known_quantity_entries}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-faint)', marginTop: '0.35rem' }}>Unités vérifiées</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Lots & Visserie</span>
                <span className="stat-num" style={{ color: 'var(--accent-amber)' }}>
                  {inventoryData.summary.unknown_or_non_numeric_quantity_entries}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-faint)', marginTop: '0.35rem' }}>Connectique & quincaillerie</span>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="filter-bar">
              <div className="search-input-wrapper">
                <Search className="search-icon-pos" style={{ width: 16, height: 16 }} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Rechercher une pièce (buse Bambu 0.4, hotend Goliath, Klicky probe, CAN bus, visserie, connecteurs...)"
                  className="search-input"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    style={{ position: 'absolute', right: '0.85rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-faint)', cursor: 'pointer' }}
                  >
                    <X style={{ width: 16, height: 16 }} />
                  </button>
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem' }}>
                <div className="filter-pills">
                  <button
                    onClick={() => setQuantityFilter('all')}
                    className={`pill-btn ${quantityFilter === 'all' ? 'active' : ''}`}
                  >
                    Toutes ({allInventoryItems.length})
                  </button>
                  <button
                    onClick={() => setQuantityFilter('exact')}
                    className={`pill-btn ${quantityFilter === 'exact' ? 'active' : ''}`}
                  >
                    Quantités vérifiées ({inventoryData.summary.known_quantity_entries})
                  </button>
                  <button
                    onClick={() => setQuantityFilter('unspecified')}
                    className={`pill-btn ${quantityFilter === 'unspecified' ? 'active' : ''}`}
                  >
                    Lots & Kits ({inventoryData.summary.unknown_or_non_numeric_quantity_entries})
                  </button>
                </div>

                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: '#ffffff' }}>{filteredInventory.length}</strong> pièce(s)
                </span>
              </div>
            </div>

            {/* Inventory Grid */}
            <div className="inventory-grid">
              {filteredInventory.map((item) => (
                <div
                  key={item.id}
                  className="card"
                  onClick={() => setSelectedItem(item)}
                  style={{ cursor: 'pointer' }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span className="card-tag nordic">
                        {item.category}
                      </span>
                      {item.quantity !== null ? (
                        <span className="card-tag sage">
                          <CheckCircle2 style={{ width: 12, height: 12 }} /> Qté: {item.quantity_text}
                        </span>
                      ) : (
                        <span className="card-tag amber">
                          <Info style={{ width: 12, height: 12 }} /> {item.quantity_text}
                        </span>
                      )}
                    </div>

                    <h3 className="card-title" style={{ fontSize: '1.02rem' }}>
                      {item.name}
                    </h3>

                    {item.brand_or_system && (
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                        Système / Compatibilité : <strong style={{ color: '#ffffff' }}>{item.brand_or_system}</strong>
                      </p>
                    )}

                    <div className="card-specs-box">
                      {item.diameter_mm && (
                        <div className="spec-row">
                          <span className="spec-key">Diamètre :</span>
                          <span className="spec-val">Ø {item.diameter_mm} mm</span>
                        </div>
                      )}
                      {item.voltage_v && (
                        <div className="spec-row">
                          <span className="spec-key">Tension :</span>
                          <span className="spec-val">{item.voltage_v} V {item.power_text ? `(${item.power_text})` : ''}</span>
                        </div>
                      )}
                      {item.condition && (
                        <div className="spec-row">
                          <span className="spec-key">État :</span>
                          <span className="spec-val" style={{ color: 'var(--accent-terracotta)' }}>{item.condition}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="card-footer">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setReservationItem(item);
                        setActiveTab('contact');
                      }}
                      className="btn btn-secondary"
                      style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
                    >
                      Demander / Réserver
                    </button>
                    <span style={{ color: 'var(--accent-fjord)', fontSize: '0.78rem', fontWeight: 600 }}>
                      Détails &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SECTION 3 : CONTACT & SUR-MESURE ================= */}
        {activeTab === 'contact' && (
          <div style={{ maxWidth: 620, margin: '0 auto', marginBottom: '3.5rem' }}>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.5rem' }}>
                <div className="brand-logo-hex" style={{ width: 40, height: 40 }}>
                  <Send style={{ width: 18, height: 18 }} />
                </div>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>
                    Demande de Projet & Contact
                  </h2>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Contactez directement Quentin pour une création personnalisée (Hueforge, pièce 3D) ou pour demander une pièce.
                  </p>
                </div>
              </div>

              {reservationItem && (
                <div style={{ background: 'var(--accent-sand-subtle)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '0.85rem', margin: '1.25rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--accent-terracotta)', textTransform: 'uppercase', fontWeight: 700 }}>Pièce sélectionnée :</span>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>{reservationItem.name}</p>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Disponibilité : {reservationItem.quantity_text}</span>
                  </div>
                  <button onClick={() => setReservationItem(null)} style={{ background: 'none', border: 'none', color: 'var(--text-faint)', cursor: 'pointer' }}>
                    <X style={{ width: 16, height: 16 }} />
                  </button>
                </div>
              )}

              {contactSent ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <CheckCircle2 style={{ width: 44, height: 44, color: 'var(--accent-sage)', margin: '0 auto 0.85rem auto' }} />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>Demande transmise avec succès</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                    Votre message pour {reservationItem ? `la pièce "${reservationItem.name}"` : 'votre projet'} a bien été préparé. Vous pouvez aussi me joindre directement sur TikTok (<a href={portfolioData.creator.tiktok_url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-terracotta)', textDecoration: 'none', fontWeight: 600 }}>{portfolioData.creator.tiktok_handle}</a>).
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendContact} style={{ marginTop: '1.25rem' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      Votre Nom / Pseudo :
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Ex: Alexandre, @pseudo_tiktok..."
                      className="search-input"
                      style={{ padding: '0.65rem 1rem' }}
                    />
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      Détails de votre projet / Question :
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder={reservationItem ? `Bonjour Quentin, je souhaite vous demander la pièce "${reservationItem.name}"...` : "Bonjour Quentin, je souhaite commander un tableau Hueforge personnalisé / une impression sur-mesure..."}
                      className="search-input"
                      style={{ padding: '0.75rem 1rem', resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.75rem' }}>
                    <Send style={{ width: 15, height: 15 }} /> Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      {/* ================= MODAL DÉTAILS CRÉATION PORTFOLIO ================= */}
      {selectedCreation && (
        <div className="modal-overlay" onClick={() => setSelectedCreation(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCreation(null)}>
              <X style={{ width: 17, height: 17 }} />
            </button>

            {/* Grande Image de Présentation */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.25rem', border: '1px solid var(--border-subtle)', background: '#11141c' }}>
              <img
                src={getCreationImage(selectedCreation)}
                alt={selectedCreation.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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

            {/* Zone d'édition / upload de photo utilisateur */}
            {isEditingImage && (
              <div className="image-upload-box">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Upload style={{ width: 15, height: 15 }} /> Remplacer l'image
                  </h4>
                  {customImages[selectedCreation.id] && (
                    <button
                      onClick={() => resetCustomImage(selectedCreation.id)}
                      className="btn btn-secondary"
                      style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                    >
                      <RotateCcw style={{ width: 12, height: 12 }} /> Restaurer
                    </button>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={(e) => handleFileUpload(e, selectedCreation.id)}
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="btn btn-secondary"
                      style={{ width: '100%', padding: '0.55rem' }}
                    >
                      <ImageIcon style={{ width: 14, height: 14 }} /> Téléverser une autre photo
                    </button>
                  </div>

                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <input
                      type="url"
                      value={customImageUrlInput}
                      onChange={(e) => setCustomImageUrlInput(e.target.value)}
                      placeholder="Ou coller un lien direct d'image (https://...)"
                      className="search-input"
                      style={{ padding: '0.5rem 0.8rem', fontSize: '0.78rem' }}
                    />
                    <button
                      onClick={() => {
                        if (customImageUrlInput.trim()) {
                          saveCustomImage(selectedCreation.id, customImageUrlInput.trim());
                        }
                      }}
                      className="btn btn-primary"
                      style={{ padding: '0.5rem 0.8rem', fontSize: '0.78rem', whiteSpace: 'nowrap' }}
                    >
                      Appliquer
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: '0.5rem', margin: '0.85rem 0 0.4rem 0' }}>
              <span className="card-tag terracotta">
                {selectedCreation.category_label}
              </span>
              {selectedCreation.tech_details.matiere && (
                <span className="card-tag nordic">
                  {selectedCreation.tech_details.matiere}
                </span>
              )}
            </div>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
              {selectedCreation.title}
            </h2>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {selectedCreation.description}
            </p>

            <div className="card-specs-box" style={{ marginBottom: '1.25rem' }}>
              <div className="spec-row">
                <span className="spec-key">Technologie :</span>
                <span className="spec-val">{selectedCreation.tech_details.technique}</span>
              </div>
              {selectedCreation.tech_details.hauteur_couche && (
                <div className="spec-row">
                  <span className="spec-key">Hauteur de couche :</span>
                  <span className="spec-val">{selectedCreation.tech_details.hauteur_couche}</span>
                </div>
              )}
              {selectedCreation.tech_details.matiere && (
                <div className="spec-row">
                  <span className="spec-key">Matière / Filaments :</span>
                  <span className="spec-val">{selectedCreation.tech_details.matiere}</span>
                </div>
              )}
              <div className="spec-row">
                <span className="spec-key">Machine :</span>
                <span className="spec-val" style={{ color: 'var(--accent-terracotta)' }}>{selectedCreation.tech_details.machine}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              {selectedCreation.tiktok_video_url && (
                <a
                  href={selectedCreation.tiktok_video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-tiktok"
                >
                  <PlayCircle style={{ width: 15, height: 15 }} /> Voir la vidéo TikTok
                </a>
              )}
              <button
                onClick={() => {
                  setSelectedCreation(null);
                  setActiveTab('contact');
                }}
                className="btn btn-primary"
              >
                Demander ce modèle
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL ITEM INVENTAIRE ================= */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedItem(null)}>
              <X style={{ width: 17, height: 17 }} />
            </button>

            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <span className="card-tag nordic">{selectedItem.category}</span>
              {selectedItem.quantity !== null ? (
                <span className="card-tag sage">Qté: {selectedItem.quantity_text}</span>
              ) : (
                <span className="card-tag amber">{selectedItem.quantity_text}</span>
              )}
            </div>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.8rem' }}>
              {selectedItem.name}
            </h2>

            <div className="card-specs-box" style={{ marginBottom: '1.25rem' }}>
              {selectedItem.brand_or_system && (
                <div className="spec-row">
                  <span className="spec-key">Marque / Compatibilité :</span>
                  <span className="spec-val">{selectedItem.brand_or_system}</span>
                </div>
              )}
              {selectedItem.diameter_mm && (
                <div className="spec-row">
                  <span className="spec-key">Diamètre de buse :</span>
                  <span className="spec-val">Ø {selectedItem.diameter_mm} mm</span>
                </div>
              )}
              {selectedItem.voltage_v && (
                <div className="spec-row">
                  <span className="spec-key">Tension :</span>
                  <span className="spec-val">{selectedItem.voltage_v} V {selectedItem.power_text ? `(${selectedItem.power_text})` : ''}</span>
                </div>
              )}
              {selectedItem.condition && (
                <div className="spec-row">
                  <span className="spec-key">État :</span>
                  <span className="spec-val" style={{ color: 'var(--accent-terracotta)' }}>{selectedItem.condition}</span>
                </div>
              )}
              {selectedItem.note && (
                <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <span className="spec-key" style={{ display: 'block', marginBottom: '0.2rem' }}>Précision technique :</span>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>{selectedItem.note}</p>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setSelectedItem(null)}
                className="btn btn-secondary"
              >
                Fermer
              </button>
              <button
                onClick={() => {
                  setReservationItem(selectedItem);
                  setSelectedItem(null);
                  setActiveTab('contact');
                }}
                className="btn btn-primary"
              >
                Réserver cette pièce
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
