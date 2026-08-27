# 📦 Stock Impression 3D — Quentin

Application web moderne & responsive permettant de consulter l'inventaire complet des pièces et matériels d'impression 3D via scan de QR code.

Optimisée pour **Vercel** et l'expérience mobile-first.

---

## ✨ Fonctionnalités

- 🔍 **Recherche temps réel** : Recherche instantanée par nom, marque (Bambu Lab, Goliath, Klicky, VZBot...), spécification technique (diamètre de buse 0.4mm, voltage 12V), catégorie ou état.
- 🏷️ **Filtres intelligents** : Filtrage par catégorie avec compteurs d'articles en direct, et filtre par type de quantité (quantités exactes vs lots/divers).
- 📱 **QR Code Studio intégré** : Génération et personnalisation du QR code directement depuis l'application, avec téléchargement PNG haute résolution et option d'impression prête à coller sur vos tiroirs/boîtes.
- 🎨 **Design High-Tech** : Thème sombre moderne, glassmorphism, typographie soignée (*Outfit*, *Inter*, *JetBrains Mono*) et micro-interactions fluides.
- 📊 **Vue Grille & Tableau** : Basculez entre les fiches visuelles et un tableau compact.

---

## 🚀 Déploiement sur Vercel

### Option 1 : Déploiement direct via GitHub (Recommandé)

1. Créez un dépôt sur GitHub et poussez le code :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Stock 3D App"
   git branch -M main
   git remote add origin https://github.com/<votre-user>/<nom-repo>.git
   git push -u origin main
   ```
2. Rendez-vous sur [vercel.com](https://vercel.com) et connectez-vous.
3. Cliquez sur **"Add New..."** > **"Project"**.
4. Importez votre dépôt GitHub. Vercel détectera automatiquement Vite et configurera les commandes de build (`npm run build` et dossier de sortie `dist`).
5. Cliquez sur **"Deploy"**. Votre site sera en ligne en quelques secondes !

### Option 2 : Déploiement via Vercel CLI

1. Installez Vercel CLI si nécessaire :
   ```bash
   npm i -g vercel
   ```
2. Déployez directement depuis le dossier :
   ```bash
   vercel
   ```
3. Pour la mise en production :
   ```bash
   vercel --prod
   ```

---

## 💻 Développement local

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement local
npm run dev

# Build de production
npm run build
```

---

## 📂 Structure du projet

- `src/data/inventory.json` : Base de données du stock 3D.
- `src/App.jsx` : Composant React principal avec filtres, recherche et studio QR Code.
- `src/index.css` : Design system et styles d'impression.
- `vercel.json` : Configuration de routage SPA pour Vercel.
