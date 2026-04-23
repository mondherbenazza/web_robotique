# 🚀 Démarrage Rapide

## Installation

```bash
# 1. Naviguer vers le dossier
cd Web_Robotique

# 2. Installer les dépendances
npm install

# 3. Lancer le site en local
npm start

# 4. Ouvrir dans le navigateur
# http://localhost:3000
```

**Ça y est !** Votre site est en ligne sur `http://localhost:3000` 🎉

---

## Modification Importante : Ajouter Votre Formulaire

Remplacez le lien du formulaire dans 2 fichiers :

### 1. Fichier: `src/components/Header.js` (ligne ~23)
```javascript
// Cherchez cette ligne :
window.location.href = 'https://forms.google.com/';

// Remplacez par votre lien :
window.location.href = 'https://votre-formulaire-google-forms.com';
```

### 2. Fichier: `src/components/Footer.js` (même chose)

---

## Quick Customization Guide

### 🎨 Changer les couleurs
**Fichier:** `tailwind.config.js` (ligne 7-10)
```javascript
colors: {
  primary: '#FFD700',      // Jaune
  secondary: '#1F2937',    // Gris foncé
  accent: '#3B82F6',       // Bleu
}
```

### 📝 Changer le texte français
Recherchez et modifiez directement dans les fichiers de composants.

### 📱 Ajouter des images réelles
Dans `src/components/Gallery.js`, remplacez les dégradés orange/bleu par vos images.

---

## Structure des Fichiers Importants

```
src/
├── App.js                    ← Main file
├── index.css                 ← Global styles
├── components/
│   ├── Header.js            ← Navigation bar
│   ├── Hero.js              ← Welcome section
│   ├── About.js             ← About club
│   ├── WhatYouLearn.js      ← Skills/technologies
│   ├── Projects.js          ← Project showcase
│   ├── Benefits.js          ← Why join
│   ├── Gallery.js           ← Photo gallery
│   ├── Schedule.js          ← Timing & cost
│   └── Footer.js            ← Contact info
└── utils/
    └── animations.js        ← Animation helpers
```

---

## Déployer Gratuitement en 2 Minutes ⚡

### Option 1: Netlify (Plus facile)
```bash
npm run build
# Allez sur netlify.com/drop
# Glissez-déposez le dossier "build/"
```

### Option 2: Vercel (Automatique)
```bash
npm install -g vercel
vercel
# Suivez les instructions
```

---

## 📸 Ajouter des Photos

1. Créez un dossier `public/images`
2. Ajoutez vos photos
3. Modifiez `src/components/Gallery.js`:

```javascript
// Remplacez les dégradés par :
backgroundImage: `url('/images/votre-photo.jpg')`,
backgroundSize: 'cover',
backgroundPosition: 'center',
```

---

## ✨ Points Clés

- ✅ **Mobile responsive** - Fonctionne sur tous les appareils
- ✅ **Animations fluides** - Fade-in et slide-up au scroll
- ✅ **Navigation smooth** - Défilement automatique aux sections
- ✅ **Personnalisable** - Toutes les couleurs/textes sont faciles à modifier

---

## 🆘 Aide

### npm start ne fonctionne pas ?
```bash
rm -rf node_modules
npm install
npm start
```

### Port 3000 occupé ?
```bash
npm start -- --port 3001
```

---

## Prochaines Étapes

- [ ] Modifier le lien du formulaire
- [ ] Ajouter les vraies photos
- [ ] Personnaliser les couleurs
- [ ] Déployer sur Vercel/Netlify
- [ ] Configurer un domaine personnalisé

---

**C'est tout ! Votre site est prêt. Profitez ! 🚀**
