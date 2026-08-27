import React from 'react';
import { Sparkles, Layers, Box, Cpu, Wrench, Cloud } from 'lucide-react';

export default function AtelierMarqueeTicker() {
  const tickerItems = [
    { icon: <Sparkles style={{ width: 13, height: 13, color: 'var(--accent-gold)' }} />, text: "Tableaux d'Art Multicouches 0.08mm" },
    { icon: <Box style={{ width: 13, height: 13, color: 'var(--accent-titanium)' }} />, text: "Conception CAO sous Fusion 360" },
    { icon: <Cpu style={{ width: 13, height: 13, color: 'var(--accent-sage)' }} />, text: "Mécatronique : Bras & Main Bionique" },
    { icon: <Layers style={{ width: 13, height: 13, color: 'var(--accent-gold)' }} />, text: "Impression FDM Haute Vitesse (Bambu AMS & VZBot)" },
    { icon: <Cloud style={{ width: 13, height: 13, color: 'var(--accent-titanium)' }} />, text: "19 Déploiements Web sur Vercel Cloud" },
    { icon: <Wrench style={{ width: 13, height: 13, color: 'var(--accent-sage)' }} />, text: "Stock de Pièces & Composants d'Atelier" }
  ];

  // Duplication pour le défilement infini sans coupure
  const allItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {allItems.map((item, idx) => (
          <div key={idx} className="marquee-item">
            {item.icon}
            <span>{item.text}</span>
            <span className="marquee-separator">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
