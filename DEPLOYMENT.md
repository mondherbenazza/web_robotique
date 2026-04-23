# Guide de Déploiement

Ce document explique comment déployer votre site web sur différentes plateformes.

## 1. Vercel (Recommandé - Gratuit & Facile)

### Avantages
- Déploiement automatique à chaque push
- Gratuit pour les projets publics
- Domaine personnalisé gratuit
- Performance optimale

### Étapes

1. **Créer un compte Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - S'inscrire avec GitHub/GitLab/Bitbucket

2. **Pushez votre code sur GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/club-robotique.git
   git push -u origin main
   ```

3. **Déployer sur Vercel**
   - Allez sur vercel.com/new
   - Connectez votre repository
   - Vercel détectera React automatiquement
   - Cliquez "Deploy"

4. **Configuration du domaine personnalisé**
   - Dans Vercel, allez à Settings > Domains
   - Ajoutez votre domaine
   - Modifiez les DNS records chez votre registrar

---

## 2. Netlify (Gratuit & Simple)

### Avantages
- Interface intuitive
- Gratuit pour les sites statiques
- Support DNS inclus
- Live preview automatique

### Étapes

1. **Construire le projet**
   ```bash
   npm run build
   ```

2. **Créer un compte Netlify**
   - Aller sur [netlify.com](https://netlify.com)
   - S'inscrire

3. **Déployer par Drag & Drop**
   - Allez à netlify.com/drop
   - Glissez-déposez le dossier `build/`
   - Votre site est en ligne !

4. **Déploiement automatique avec GitHub**
   - Connectez votre repo GitHub
   - Netlify redéploiera à chaque push automatiquement

---

## 3. GitHub Pages (Gratuit)

### Avantages
- Totalement gratuit
- Intégré avec GitHub
- Déploiement simple

### Étapes

1. **Modifier package.json**
   ```json
   {
     "homepage": "https://your-username.github.io/club-robotique",
     "scripts": {
       "start": "react-scripts start",
       "build": "react-scripts build",
       "deploy": "npm run build && gh-pages -d build"
     }
   }
   ```

2. **Installer gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Déployer**
   ```bash
   npm run deploy
   ```

---

## 4. Hostinger / OVH / 1&1 (Serveur Web Classique)

### Étapes

1. **Build le projet**
   ```bash
   npm run build
   ```

2. **Connectez-vous à votre cPanel/Control Panel**
   
3. **Uploadez les fichiers**
   - Utilisez un client FTP (FileZilla)
   - Uploadez le contenu du dossier `build/`
   - Uploadez vers le dossier `public_html/`

4. **Configuration du .htaccess** (si vous avez besoin du routing)
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 5. Docker (Déploiement Avancé)

### Créer un fichier Dockerfile

```dockerfile
# Stage 1: Build
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Runtime
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Fichier nginx.conf
```nginx
server {
    listen 80;
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri /index.html;
    }
}
```

### Déployer
```bash
docker build -t club-robotique .
docker run -p 80:80 club-robotique
```

---

## 6. Azure (Déploiement Gratuit pour Étudiants)

### Étapes

1. **Créer un compte Azure** (gratuit avec Microsoft 365 Student)

2. **Build le projet**
   ```bash
   npm run build
   ```

3. **Déployer vers Static Web Apps**
   - Créer une ressource "Static Web Apps"
   - Connecter votre repository GitHub
   - Azure redéploiera automatiquement

---

## 📊 Comparaison des Plateformes

| Plateforme | Prix | Facilité | Performance | Domaine Gratuit |
|------------|------|---------|-------------|-----------------|
| **Vercel** | Gratuit | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Oui (.vercel.app) |
| **Netlify** | Gratuit | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Oui (.netlify.app) |
| **GitHub Pages** | Gratuit | ⭐⭐⭐ | ⭐⭐⭐ | Oui (username.github.io) |
| **Hostinger** | 2-5$/mois | ⭐⭐⭐ | ⭐⭐⭐ | Oui |
| **Azure** | Gratuit* | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Oui |
| **Docker** | Variable | ⭐⭐ | ⭐⭐⭐⭐ | Non |

*Gratuit pour les étudiants avec Microsoft 365 Student

---

## 🔒 HTTPS & Certificats SSL

- ✅ Vercel : SSL automatique inclus
- ✅ Netlify : SSL automatique inclus
- ✅ GitHub Pages : SSL automatique inclus
- ⚠️ Hostinger : Achetez ou utilisez Let's Encrypt (gratuit)
- ✅ Azure : SSL automatique inclus

---

## 🚀 Meilleure Pratique

**Pour commencer : Utilisez Vercel ou Netlify**
- Gratuit
- Simple
- Performant
- Configuration minimale

```bash
# Vercel
npm install -g vercel
vercel

# Netlify
npm run build
# Drag & drop le dossier build sur netlify.com/drop
```

---

## ✅ Checklist Avant Déploiement

- [ ] Modifier les liens du formulaire
- [ ] Vérifier le numéro de téléphone
- [ ] Vérifier le lien Facebook
- [ ] Tester sur mobile
- [ ] Tester sur tablette
- [ ] Tester sur desktop
- [ ] Vérifier tous les liens internes
- [ ] Vérifier tous les formulaires
- [ ] Optimiser les images
- [ ] Tester la vitesse de chargement (PageSpeed Insights)

---

## 🆘 Troubleshooting Déploiement

### Site affiche "Cannot GET /"
**Problème** : React Router pas configuré
**Solution** : Ajoutez un fichier `_redirects` ou `netlify.toml` :

```toml
[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

### Images ne s'affichent pas
**Problème** : Chemin absolu au lieu de relatif
**Solution** : Utilisez des chemins relatifs : `/images/photo.jpg`

### Erreur "Cannot load images"
**Problème** : CORS ou chemin incorrect
**Solution** :
- Placez les images dans `public/` dossier
- Importez avec : `/images/photo.jpg`

---

## 📞 Support

- Documentation Vercel : https://vercel.com/docs
- Documentation Netlify : https://docs.netlify.com
- Documentation GitHub Pages : https://pages.github.com
- Documentation Azure : https://docs.microsoft.com/azure/static-web-apps

---

**Bonne chance pour le déploiement ! 🚀**
