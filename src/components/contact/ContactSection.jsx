import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, X, ExternalLink } from 'lucide-react';
import { creatorProfile } from '../../data/projectsData';

export default function ContactSection({ selectedProjectForContact, reservedItem, onClearContext }) {
  const [contactName, setContactName] = useState('');
  const [contactChannel, setContactChannel] = useState('');
  const [contactMessage, setContactMessage] = useState(() => {
    if (selectedProjectForContact) {
      return `Bonjour Quentin, j'aimerais échanger avec toi à propos de ta création "${selectedProjectForContact.title}".`;
    }
    if (reservedItem) {
      return `Bonjour Quentin, je souhaite des informations / réserver la pièce "${reservedItem.name}".`;
    }
    return '';
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      if (onClearContext) onClearContext();
      setContactMessage('');
    }, 6000);
  };

  return (
    <section className="contact-section">
      <div className="section-header-compact">
        <span className="section-eyebrow">Contact Direct</span>
        <h2 className="section-heading">Une question ou une idée de projet ?</h2>
        <p className="section-subtext">
          Envoyez-moi un message pour discuter d'une réalisation, d'une modélisation ou d'une pièce d'atelier.
        </p>
      </div>

      <div className="contact-layout">
        <div className="card contact-form-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
            <div className="brand-logo-hex" style={{ width: 40, height: 40 }}>
              <Send style={{ width: 18, height: 18 }} />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                Message pour Quentin
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                FoxtrottQuebec 3D Design
              </p>
            </div>
          </div>

          {(selectedProjectForContact || reservedItem) && (
            <div className="reserved-item-banner">
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-terracotta)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Sujet :
                </span>
                <p style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>
                  {selectedProjectForContact ? selectedProjectForContact.title : reservedItem.name}
                </p>
              </div>
              <button onClick={onClearContext} style={{ background: 'none', border: 'none', color: 'var(--text-faint)', cursor: 'pointer' }}>
                <X style={{ width: 16, height: 16 }} />
              </button>
            </div>
          )}

          {sent ? (
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
              <CheckCircle2 style={{ width: 48, height: 48, color: 'var(--accent-sage)', margin: '0 auto 0.85rem auto' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>Message transmis !</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: 1.6 }}>
                Merci {contactName} ! Votre message a bien été pris en compte. Je vous répondrai sur {contactChannel || 'votre contact'}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    Votre Nom ou Pseudo *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Ex: Thomas, @pseudo_tiktok"
                    className="search-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    Votre Contact (Email ou TikTok) *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactChannel}
                    onChange={(e) => setContactChannel(e.target.value)}
                    placeholder="Ex: monemail@gmail.com ou @mon_tiktok"
                    className="search-input"
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Votre Message :
                </label>
                <textarea
                  required
                  rows={4}
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Posez votre question ou décrivez ce que vous souhaitez..."
                  className="search-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <Send style={{ width: 16, height: 16 }} />
                <span>Envoyer le message</span>
              </button>
            </form>
          )}
        </div>

        {/* Bloc TikTok */}
        <div className="card contact-info-card">
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.6rem' }}>
            Retrouvez-moi sur TikTok
          </h3>

          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Je publie régulièrement des vidéos de mes impressions 3D, modélisations et projets d'atelier sur mon compte <strong>{creatorProfile.tiktokHandle}</strong>.
          </p>

          <a
            href={creatorProfile.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-tiktok"
            style={{ width: '100%', padding: '0.75rem', justifyContent: 'center' }}
          >
            <ExternalLink style={{ width: 15, height: 15 }} />
            <span>Ouvrir TikTok {creatorProfile.tiktokHandle}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
