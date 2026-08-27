import React, { useState, useMemo } from 'react';
import { Search, X, CheckCircle2, Info, Wrench, Box, ArrowRight } from 'lucide-react';
import inventoryData from '../../data/inventory.json';

export default function WorkshopStock({ onReserveItem }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [quantityFilter, setQuantityFilter] = useState('all'); // 'all', 'exact', 'unspecified'
  const [selectedItem, setSelectedItem] = useState(null);

  // Extraction de tous les items d'inventaire sans exposer les emplacements internes
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

  const filteredInventory = useMemo(() => {
    return allInventoryItems.filter((item) => {
      const matchSearch =
        searchTerm.trim() === '' ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.brand_or_system && item.brand_or_system.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.category && item.category.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.condition && item.condition.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.quantity_text && item.quantity_text.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchQty =
        quantityFilter === 'all'
          ? true
          : quantityFilter === 'exact'
          ? item.quantity !== null
          : item.quantity === null;

      return matchSearch && matchQty;
    });
  }, [allInventoryItems, searchTerm, quantityFilter]);

  return (
    <section className="workshop-section">
      <div className="section-header-compact">
        <span className="section-eyebrow">Atelier & Maintenance</span>
        <h2 className="section-heading">Composants & Pièces Disponibles dans l'Atelier</h2>
        <p className="section-subtext">
          Buses grand débit, hotends, sondes Klicky, connectique CAN bus et quincaillerie technique pour imprimantes 3D.
        </p>
      </div>

      {/* Stats Ribbon Épuré */}
      <div className="stats-ribbon">
        <div className="stat-box">
          <span className="stat-label">Références en stock</span>
          <span className="stat-num">{inventoryData.summary.item_types_count}</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-faint)', marginTop: '0.35rem' }}>Pièces répertoriées</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Quantités disponibles</span>
          <span className="stat-num" style={{ color: 'var(--accent-sage)' }}>{inventoryData.summary.known_quantity_entries}</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-faint)', marginTop: '0.35rem' }}>Unités prêtes</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Lots & Visserie</span>
          <span className="stat-num" style={{ color: 'var(--accent-amber)' }}>{inventoryData.summary.unknown_or_non_numeric_quantity_entries}</span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-faint)', marginTop: '0.35rem' }}>Connectique & kits</span>
        </div>
      </div>

      {/* Barre de Recherche & Filtres */}
      <div className="filter-bar">
        <div className="search-input-wrapper">
          <Search className="search-icon-pos" style={{ width: 16, height: 16 }} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher une pièce (buse Bambu 0.4, hotend Goliath, Klicky probe, CAN bus, visserie...)"
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

      {/* Grille Inventaire */}
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
                  Système : <strong style={{ color: '#ffffff' }}>{item.brand_or_system}</strong>
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
                  onReserveItem(item);
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

      {/* Modal Détail Pièce */}
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
                  const item = selectedItem;
                  setSelectedItem(null);
                  onReserveItem(item);
                }}
                className="btn btn-primary"
              >
                Réserver cette pièce
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
