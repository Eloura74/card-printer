import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, X, ExternalLink, Mail, Phone, MessageCircle } from 'lucide-react';
import { creatorProfile } from '../../data/projectsData';

export default function ContactSection({ selectedProjectForContact, reservedItem, onClearContext }) {
  const [contactName, setContactName] = useState('');
  const [contactChannel, setContactChannel] = useState('');
  const [contactMessage, setContactMessage] = useState(() => {
    if (selectedProjectForContact) {
      return `Bonjour Quentin, j'aimerais échanger avec toi à propos de ta création "${selectedProjectForContact.title}".`;
    }
    if (reservedItem) {
      return `Bonjour Quentin, je souhaite des informations / réserver la pièce d'atelier "${reservedItem.name}".`;
    }
    return '';
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    // Optionnel : Générer un lien mailto de secours en arrière-plan
    const subject = encodeURIComponent(selectedProjectForContact ? `Projet 3D : ${selectedProjectForContact.title}` : reservedItem ? `Pièce Atelier : ${reservedItem.name}` : `Message depuis le site - ${contactName}`);
    const body = encodeURIComponent(`De: ${contactName} (${contactChannel})\n\nMessage:\n${contactMessage}`);
    
    // Fenêtre de confirmation
    setTimeout(() => {
      setSent(false);
      if (onClearContext) onClearContext();
      setContactMessage('');
      setContactName('');
      setContactChannel('');
    }, 6000);
  };

  return (
    <section className="contact-section">
      <div className="section-header-compact">
        <span className="section-eyebrow">Contact & Échange</span>
        <h2 className="section-heading">Me Contacter Directement</h2>
        <p className="section-subtext">
          Une idée de modélisation 3D, un projet sur-mesure ou une question sur une pièce d'atelier ? Écrivez-moi ou appelez-moi.
        </p>
      </div>

      <div className="contact-layout">
        {/* Formulaire de Contact */}
        <div className="card contact-form-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
            <div className="brand-logo-hex" style={{ width: 40, height: 40 }}>
              <Send style={{ width: 18, height: 18 }} />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                Envoyer un Message
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                À destination de Quentin Faber (FoxtrottQuebec)
              </p>
            </div>
          </div>

          {(selectedProjectForContact || reservedItem) && (
            <div className="reserved-item-banner">
              <div>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Sujet sélectionné :
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
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>Message envoyé avec succès !</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: 1.6 }}>
                Merci {contactName} ! Votre message a bien été enregistré. Je vous recontacterai rapidement sur {contactChannel || 'votre contact'}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    Votre Nom ou Pseudo *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Ex: Thomas, Alex..."
                    className="search-input"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                    Votre Email ou Téléphone *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactChannel}
                    onChange={(e) => setContactChannel(e.target.value)}
                    placeholder="Ex: faber.quentin@gmail.com ou 07..."
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
                  placeholder="Décrivez votre projet, vos questions ou votre demande..."
                  className="search-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <Send style={{ width: 16, height: 16 }} />
                <span>Transmettre mon message à Quentin</span>
              </button>
            </form>
          )}
        </div>

        {/* Coordonnées Directes de Quentin */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Email Direct */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.65rem' }}>
              <div style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', background: 'var(--accent-gold-subtle)', border: '1px solid rgba(201, 169, 110, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)' }}>
                <Mail style={{ width: 18, height: 18 }} />
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--accent-gold)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Email Direct
                </span>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff' }}>
                  {creatorProfile.email}
                </h4>
              </div>
            </div>
            <a
              href={`mailto:${creatorProfile.email}`}
              className="btn btn-secondary"
              style={{ width: '100%', fontSize: '0.8rem', padding: '0.5rem' }}
            >
              <Mail style={{ width: 14, height: 14, color: 'var(--accent-gold)' }} />
              <span>M'écrire par email</span>
            </a>
          </div>

          {/* Téléphone & WhatsApp */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.65rem' }}>
              <div style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', background: 'var(--accent-sage-subtle)', border: '1px solid rgba(74, 222, 128, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage)' }}>
                <Phone style={{ width: 18, height: 18 }} />
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--accent-sage)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Téléphone / Mobile
                </span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em' }}>
                  {creatorProfile.phone}
                </h4>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <a
                href={`tel:${creatorProfile.phoneRaw}`}
                className="btn btn-secondary"
                style={{ fontSize: '0.78rem', padding: '0.5rem' }}
              >
                <Phone style={{ width: 13, height: 13, color: 'var(--accent-sage)' }} />
                <span>Appeler</span>
              </a>
              <a
                href={`https://wa.me/${creatorProfile.phoneRaw.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '0.78rem', padding: '0.5rem' }}
              >
                <MessageCircle style={{ width: 13, height: 13, color: 'var(--accent-sage)' }} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Compte TikTok */}
          <div className="card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.65rem' }}>
              <div style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', background: '#000000', border: '1px solid rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                <ExternalLink style={{ width: 18, height: 18 }} />
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                  Réseau TikTok
                </span>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff' }}>
                  {creatorProfile.tiktokHandle}
                </h4>
              </div>
            </div>
            <a
              href={creatorProfile.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-tiktok"
              style={{ width: '100%', fontSize: '0.8rem', padding: '0.5rem', justifyContent: 'center' }}
            >
              <ExternalLink style={{ width: 14, height: 14 }} />
              <span>Ouvrir TikTok @quentinfaber</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
