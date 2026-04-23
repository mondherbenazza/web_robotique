# 🎨 Guide de Personnalisation Complet

Ce guide explique comment personnaliser tous les aspects du site.

---

## 📋 Table des Matières

1. [Texte & Contenu](#texte--contenu)
2. [Couleurs & Design](#couleurs--design)
3. [Images & Médias](#images--médias)
4. [Liens & URLs](#liens--urls)
5. [Animations](#animations)
6. [Structure & Sections](#structure--sections)

---

## 📝 Texte & Contenu

### En-tête (Navigation)
**Fichier:** `src/components/Header.js`

```javascript
// Titre du club
<h1 className="text-white font-bold text-lg md:text-xl">Club Robotique</h1>
<p className="text-primary text-xs md:text-sm">Bizerte</p>

// Boutons
<button>Contact</button>️  // Left button
<button>Nous Rejoindre</button>  // Right button
```

### Section Héro
**Fichier:** `src/components/Hero.js`

```javascript
// Titre principal
<h2>
  <span className="text-primary">Construire</span> • 
  <span className="text-blue-400">Programmer</span> • 
  <span className="text-green-400">Innover</span>
</h2>

// Sous-titre
<p>Rejoignez-nous pour explorer le monde fascinant de la robotique...</p>

// Bouton CTA
<button>Nous Rejoindre Maintenant</button>
```

### Section À Propos
**Fichier:** `src/components/About.js`

```javascript
// Titre
<h3>À Propos du <span className="text-primary">Club</span></h3>

// Texte
<p>Le Club Robotique Bizerte est une communauté...</p>
```

### Changer Tous les Textes

Cherchez et remplacez dans les fichiers de composants :
- `src/components/Header.js`
- `src/components/Hero.js`
- `src/components/About.js`
- `src/components/WhatYouLearn.js`
- `src/components/Projects.js`
- `src/components/Benefits.js`
- `src/components/Gallery.js`
- `src/components/Schedule.js`
- `src/components/Footer.js`

---

## 🎨 Couleurs & Design

### Palette de Couleurs Principale
**Fichier:** `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: '#FFD700',      // Jaune
      secondary: '#1F2937',    // Gris foncé
      accent: '#3B82F6',       // Bleu
    },
  },
},
```

### Exemples de Nouveaux Thèmes

#### Thème Moderne (Bleu & Violet)
```javascript
colors: {
  primary: '#6366f1',    // Indigo
  secondary: '#0f172a',  // Bleu foncé
  accent: '#a78bfa',     // Violet clair
}
```

#### Thème Énergique (Orange & Rose)
```javascript
colors: {
  primary: '#fb923c',    // Orange
  secondary: '#1e1b4b',  // Noir bleu
  accent: '#ec4899',     // Rose
}
```

#### Thème Naturel (Vert & Brun)
```javascript
colors: {
  primary: '#10b981',    // Vert
  secondary: '#1f2937',  // Gris
  accent: '#b45309',     // Brun
}
```

### Utiliser les Couleurs dans les Composants

```javascript
// Texte primary
<h1 className="text-primary">Titre</h1>

// Fond primary
<div className="bg-primary">Contenu</div>

// Bordures
<div className="border-primary">Contenu</div>

// Gradients
<div className="bg-gradient-to-r from-primary to-accent">
  Gradient
</div>
```

### Changer les Dégradés de Couleur
**Fichier:** `src/components/WhatYouLearn.js`

```javascript
// Avant
color: 'from-blue-500 to-cyan-500'

// Après
color: 'from-primary to-accent'
```

---

## 🖼️ Images & Médias

### Structure des Dossiers d'Images
```
public/
└── images/
    ├── gallery/
    │   ├── robot1.jpg
    │   ├── robot2.jpg
    │   └── ...
    ├── projects/
    │   └── ...
    └── ...
```

### Ajouter des Images à la Galerie
**Fichier:** `src/components/Gallery.js`

```javascript
// Avant (dégradé de couleur)
<div className={`absolute inset-0 bg-gradient-to-br ${image.gradient}`}></div>

// Après (image réelle)
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url('/images/gallery/robot1.jpg')`
  }}
></div>
```

### Remplacer tous les Gradients par des Images

```javascript
const images = [
  {
    id: 1,
    title: 'Atelier Arduino',
    image: '/images/gallery/arduino.jpg',
  },
  // ...
];

// Dans le JSX :
<div
  style={{
    backgroundImage: `url('${image.image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
</div>
```

### Optimiser les Images

1. **Redimensionner:**
   - Utilisez des outils comme TinyPNG ou Imagemin
   - Taille recommandée: 1200x800px pour gallery

2. **Convertir en WebP:**
   - Format plus léger
   - `image.jpg` → `image.webp`

3. **Ajouter des placeholder:**
   ```javascript
   <img
     src="/images/robot.jpg"
     placeholder="/images/robot-small.jpg"
     alt="Robot du club"
   />
   ```

---

## 🔗 Liens & URLs

### Formulaire d'Adhésion
**Fichiers:** `src/components/Header.js`, `src/components/Hero.js`, `src/components/Footer.js`

```javascript
// Avant
window.location.href = 'https://forms.google.com/';

// Après
window.location.href = 'https://forms.google.com/... (votre lien)';
```

### Téléphone (WhatsApp & Appel)
**Fichier:** `src/components/Footer.js`

```javascript
// Appel téléphonique
<a href="tel:+21628797217">+216 28 797 217</a>

// WhatsApp
<a href="https://wa.me/21628797217">Envoyer un message</a>
```

### Facebook & Réseaux Sociaux
**Fichier:** `src/components/Footer.js`

```javascript
// Facebook
href="https://www.facebook.com/profile.php?id=61588477076260"

// Instagram (si applicable)
href="https://instagram.com/your-page"

// Twitter/X
href="https://twitter.com/your-handle"

// YouTube
href="https://youtube.com/@your-channel"
```

---

## ✨ Animations

### Animations Disponibles
**Fichier:** `src/index.css`

```css
/* Fade in simple */
.fade-in-on-scroll {
  animation: fadeIn 0.6s ease-in-out;
}

/* Slide up de bas en haut */
.slide-up-on-scroll {
  animation: slideUp 0.6s ease-out;
}
```

### Utiliser les Animations

```javascript
// Fade in
<div className={isVisible ? 'animate-fade-in' : 'opacity-0'}>
  Contenu
</div>

// Slide up avec délai
<div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
  Contenu
</div>

// Bounce (existe déjà dans Tailwind)
<div className="animate-bounce">
  Bouncing element
</div>
```

### Ajouter des Animations Personnalisées

**Fichier:** `tailwind.config.js`

```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-in-out',
  'slide-up': 'slideUp 0.6s ease-out',
  'pulse-glow': 'pulseGlow 2s infinite', // Nouvelle
},
keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  slideUp: {
    '0%': { opacity: '0', transform: 'translateY(30px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  pulseGlow: { // Nouvelle
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.5' },
  },
},
```

---

## 🏗️ Structure & Sections

### Ajouter une Nouvelle Section

1. **Créer un nouveau fichier de composant**
   ```javascript
   // src/components/NewSection.js
   import React from 'react';

   const NewSection = () => {
     return (
       <section id="new-section" className="py-16 md:py-24 bg-secondary">
         <div className="container-custom">
           <h2>Ma Nouvelle Section</h2>
         </div>
       </section>
     );
   };

   export default NewSection;
   ```

2. **L'importer dans App.js**
   ```javascript
   import NewSection from './components/NewSection';

   function App() {
     return (
       <main>
         {/* ... autres sections ... */}
         <NewSection />
         {/* ... */}
       </main>
     );
   }
   ```

### Modifier l'Ordre des Sections

**Fichier:** `src/App.js`

```javascript
// Modifiez l'ordre d'import et de rendu
<Hero />              // 1er
<WhatYouLearn />      // 2e
<Projects />          // 3e
<About />             // 4e (déplacé)
<Benefits />          // etc...
```

### Masquer une Section

```javascript
// Commentez la section dans App.js
<Hero />
{/* <About /> */}     // Masquée
<WhatYouLearn />
```

---

## 🔄 Configuration Centralisée

Utilisez le fichier config pour éviter les modifications répétées :

**Fichier:** `src/config/themeConfig.js`

```javascript
const themeConfig = {
  club: {
    name: 'Club Robotique Bizerte',
    city: 'Bizerte',
  },
  contact: {
    phone: '+216 28 797 217',
    facebook: 'https://www.facebook.com/...',
  },
  colors: {
    primary: '#FFD700',
  },
};

export default themeConfig;
```

**Utiliser dans les composants:**
```javascript
import themeConfig from '../config/themeConfig';

<a href={`tel:${themeConfig.contact.phone}`}>
  {themeConfig.contact.phone}
</a>
```

---

## 🎯 Checklist de Personnalisation

- [ ] Modifier le texte français
- [ ] Changer les couleurs
- [ ] Ajouter vos images
- [ ] Mettre à jour les liens
- [ ] Changer le numéro de téléphone
- [ ] Ajouter le lien Facebook correct
- [ ] Modifier le lien du formulaire
- [ ] Tester sur mobile
- [ ] Tester sur tablette
- [ ] Tester sur desktop

---

## 💡 Conseils Pro

1. **Utilisez les DevTools Chrome** : Inspectez les éléments pour modifier les styles en temps réel
2. **Testez les changements** : `npm start` pour voir les modifications en direct
3. **Gardez une copie de sauvegarde** : Avant de changer des sections importantes
4. **Utilisez des commentaires** : Documentez vos modifications

---

**Bon design ! 🎨**
