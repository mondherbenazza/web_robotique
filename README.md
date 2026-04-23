# Club Robotique Bizerte - Website

Un site web moderne et responsive pour le Club Robotique Bizerte, construit avec React et Tailwind CSS.

## 🚀 Caractéristiques

✅ **Responsive Design** - Fonctionne parfaitement sur mobile, tablette et desktop
✅ **Performance** - Optimisé pour le chargement rapide
✅ **Modern UI** - Design épuré avec animations fluides
✅ **Accessible** - Respecte les standards WCAG
✅ **SEO-Friendly** - Structure HTML sémantique
✅ **Frontend Only** - Aucun backend requis

## 🛠 Tech Stack

- **React 18** - Framework UI
- **Tailwind CSS 3** - Styling moderne
- **React Icons** - Icônes SVG
- **CSS Animations** - Effets visuels fluides

## 📋 Sections du Site

1. **Header** - Navigation avec boutons d'action
2. **Hero** - Section d'accueil avec CTA principal
3. **À Propos** - Brève présentation du club
4. **Ce que vous apprendrez** - 4 domaines clés (Arduino, Électronique, Robotique, Programmation)
5. **Projets** - Galerie de 4 projets phares
6. **Avantages** - 6 raisons de rejoindre
7. **Galerie** - Grille de 8 photos/activités
8. **Horaires** - Information pratiques (3h/semaine, 50 DT/mois)
9. **Contact** - Téléphone et Facebook
10. **Footer** - Liens et copyright

## 📦 Installation

### Prérequis
- Node.js (v16+)
- npm ou yarn

### Étapes

1. **Naviguer vers le dossier du projet**
   ```bash
   cd Web_Robotique
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm start
   ```

4. **Ouvrir le navigateur**
   ```
   http://localhost:3000
   ```

## 🔧 Configuration

### Modifier les liens

#### Formulaire d'adhésion
Remplacez le lien dans [src/components/Header.js](src/components/Header.js) et [src/components/Footer.js](src/components/Footer.js) :
```javascript
window.location.href = 'https://votre-formulaire.com';
```

#### Numéro de téléphone
Dans [src/components/Footer.js](src/components/Footer.js) :
```javascript
<a href="tel:+216XXXXXXXXXX">+216 XX XXX XXX</a>
```

#### Facebook
Dans [src/components/Footer.js](src/components/Footer.js) :
```javascript
href="https://www.facebook.com/votre-page"
```

### Personnaliser les couleurs

Modifiez [tailwind.config.js](tailwind.config.js) :
```javascript
colors: {
  primary: '#FFD700',      // Jaune (actuellement)
  secondary: '#1F2937',    // Gris foncé (actuellement)
  accent: '#3B82F6',       // Bleu (actuellement)
}
```

### Ajouter des images

Dans [src/components/Gallery.js](src/components/Gallery.js), remplacez les dégradés par des images :
```javascript
backgroundImage: `url('/images/robot1.jpg')`,
backgroundSize: 'cover',
backgroundPosition: 'center',
```

## 📱 Structure des Dossiers

```
Web_Robotique/
├── node_modules/
├── public/
│   └── index.html          # Page HTML principale
├── src/
│   ├── components/
│   │   ├── Header.js       # Navigation
│   │   ├── Hero.js         # Section d'accueil
│   │   ├── About.js        # À Propos
│   │   ├── WhatYouLearn.js # Compétences
│   │   ├── Projects.js     # Projets
│   │   ├── Benefits.js     # Avantages
│   │   ├── Gallery.js      # Galerie
│   │   ├── Schedule.js     # Horaires
│   │   └── Footer.js       # Contact
│   ├── utils/
│   │   └── animations.js   # Fonctions d'animation
│   ├── index.css           # Styles globaux
│   ├── index.js            # Entry point
│   └── App.js              # Composant principal
├── tailwind.config.js      # Configuration Tailwind
├── postcss.config.js       # Configuration PostCSS
└── package.json            # Dépendances

```

## 🎨 Personnalisation du Design

### Animations
- Les animations sont définies dans [src/index.css](src/index.css)
- Utilisez `animate-fade-in` et `animate-slide-up` sur vos éléments

### Thème
- Couleurs principales dans [tailwind.config.js](tailwind.config.js)
- Breite de container à personnaliser dans [src/index.css](src/index.css)

### Typography
- Police par défaut: Segoe UI
- À modifier dans [src/index.css](src/index.css)

## 🚀 Déploiement

### Sur Vercel (recommandé)
```bash
npm install -g vercel
vercel
```

### Sur Netlify
```bash
npm run build
# Uploadez le dossier 'build' sur Netlify
```

### Sur GitHub Pages
1. Modifiez `package.json` :
   ```json
   "homepage": "https://username.github.io/repository"
   ```

2. Déployez :
   ```bash
   npm run build
   npm run deploy
   ```

## ✨ Points Clés

- ✅ **Mobile-First** - Conçu d'abord pour mobile
- ✅ **Smooth Scrolling** - Navigation fluide
- ✅ **Intersection Observer** - Animations au scroll
- ✅ **Accessible** - ARIA labels et HTML sémantique
- ✅ **Performance** - Code optimisé et léger

## 📝 À Faire

- [ ] Ajouter des images réelles à la galerie
- [ ] Intégrer le formulaire d'adhésion
- [ ] Ajouter des animaux en SVG personnalisés
- [ ] Implémenter un système de blog pour les actualités
- [ ] Ajouter des avis de membres
- [ ] Footer avec liens plus détaillés

## 🐛 Troubleshooting

### npm install échoue
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 déjà utilisé
```bash
npm start -- --port 3001
```

### Erreur Tailwind
```bash
npm install -D tailwindcss postcss autoprefixer
```

## 📞 Support

Pour les questions ou suggestions :
- 📱 Téléphone: +216 28 797 217
- 📘 Facebook: [Club Robotique Bizerte](https://www.facebook.com/profile.php?id=61588477076260)

## 📄 Licence

Ce projet est libre d'utilisation pour le Club Robotique Bizerte.

---

**Construit avec passion pour les innovateurs 🚀**
