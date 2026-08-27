import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, X, Sparkles, ExternalLink } from 'lucide-react';
import { creatorProfile } from '../../data/projectsData';

export default function ContactSection({ reservedItem, onClearReservedItem }) {
  const [contactName, setContactName] = useState('');
  const [contactChannel, setContactChannel] = useState('');
  const [projectTopic, setProjectTopic] = useState(reservedItem ? 'piece-technique' : 'hueforge');
  const [contactMessage, setContactMessage] = useState(
    reservedItem ? `Bonjour Quentin, je souhaite réserver la pièce "${reservedItem.name}".` : ''
  );
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      if (onClearReservedItem) onClearReservedItem();
      setContactMessage('');
    }, 5000);
  };

  return (
    <section className="contact-section">
      <div className="section-header-compact">
        <span className="section-eyebrow">Contact & Collaboration</span>
        <h2 className="section-heading">Vous avez une idée ?</h2>
        <p className="section-subtext">
          Décrivez votre projet et voyons ensemble comment le transformer en objet réel.
        </p>
      </div>

      <div className="contact-layout">
        <div className="card contact-form-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
            <div className="brand-logo-hex" style={{ width: 40, height: 40 }}>
              <Send style={{ width: 18, height: 18 }} />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                Formulaire d'Atelier
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Directement transmis à Quentin Faber.
              </p>
            </div>
          </div>

          {reservedItem && (
            <div className="reserved-item-banner">
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-terracotta)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Pièce d'atelier sélectionnée :
                </span>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>{reservedItem.name}</p>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Disponibilité : {reservedItem.quantity_text}</span>
              </div>
              <button onClick={onClearReservedItem} style={{ background: 'none', border: 'none', color: 'var(--text-faint)', cursor: 'pointer' }}>
                <X style={{ width: 16, height: 16 }} />
              </button>
            </div>
          )}

          {sent ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
              <CheckCircle2 style={{ width: 48, height: 48, color: 'var(--accent-sage)', margin: '0 auto 0.85rem auto' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>Message envoyé avec succès !</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: 1.6 }}>
                Merci {contactName} ! Votre demande a été enregistrée. Je vous répondrai rapidement par {contactChannel || 'vos coordonnées'}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Type de projet souhaité :
                </label>
                <select
                  value={projectTopic}
                  onChange={(e) => setProjectTopic(e.target.value)}
                  className="search-input"
                  style={{ cursor: 'pointer' }}
                >
                  <option value="hueforge">Tableau d'art Hueforge personnalisé</option>
                  <option value="portrait">Portrait ou Lithophanie</option>
                  <option value="cosplay">Casque, Armure ou Objet Cosplay</option>
                  <option value="prototype">Prototype & Conception mécanique / CAO</option>
                  <option value="piece-technique">Demande de pièce technique d'atelier</option>
                  <option value="autre">Autre projet sur-mesure</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    Votre Nom / Pseudo *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Ex: David, @pseudo"
                    className="search-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    Email ou TikTok *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactChannel}
                    onChange={(e) => setContactChannel(e.target.value)}
                    placeholder="Ex: email@example.com ou @mon_tiktok"
                    className="search-input"
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Description de votre idée / Besoin :
                </label>
                <textarea
                  required
                  rows={4}
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Expliquez-moi votre idée, les dimensions souhaitées ou la pièce recherchée..."
                  className="search-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <Send style={{ width: 16, height: 16 }} />
                <span>Envoyer le message à l'Atelier</span>
              </button>
            </form>
          )}
        </div>

        {/* Bloc d'accompagnement TikTok & Atelier */}
        <div className="card contact-info-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
            <Sparkles style={{ width: 18, height: 18, color: 'var(--accent-terracotta)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
              Échange Direct & TikTok
            </h3>
          </div>

          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Vous pouvez également me contacter directement sur TikTok via message privé ou commenter sous mes vidéos pour discuter d'un projet en direct.
          </p>

          <a
            href={creatorProfile.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-tiktok"
            style={{ width: '100%', padding: '0.75rem', justifyContent: 'center' }}
          >
            <ExternalLink style={{ width: 15, height: 15 }} />
            <span>Rejoindre {creatorProfile.tiktokHandle} sur TikTok</span>
          </a>

          <div className="card-specs-box" style={{ marginTop: '1.5rem' }}>
            <div className="spec-row">
              <span className="spec-key">Atelier :</span>
              <span className="spec-val">FoxtrottQuebec</span>
            </div>
            <div className="spec-row">
              <span className="spec-key">Spécialité :</span>
              <span className="spec-val" style={{ color: 'var(--accent-terracotta)' }}>Hueforge & Prototypage</span>
            </div>
            <div className="spec-row">
              <span className="spec-key">Fabrication :</span>
              <span className="spec-val">Bambu Lab AMS • VZBot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
