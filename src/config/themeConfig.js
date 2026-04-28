/**
 * Custom theme configuration
 * Edit this file to customize colors, spacing, and other design elements
 */

const themeConfig = {
  // Club Information
  club: {
    name: 'Club Robotique Bizerte',
    shortName: 'Club Robotique',
    city: 'Bizerte',
    tagline: 'Construire • Programmer • Innover',
    description: 'Une communauté passionnée de jeunes innovateurs',
  },

  // Contact Information
  contact: {
    phone: '+216 50 929 793',
    phoneLink: '+21650929793',
    facebook: {
      name: 'Club Robotique Bizerte',
      url: 'https://www.facebook.com/profile.php?id=61588477076260',
    },
    formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdTpYtKvZ01bV7l4drV51nnaavL2lEKgLfZNrQUfQcjvu7Yqg/viewform?usp=dialog',
  },

  // Club Details
  details: {
    hoursPerWeek: '3h',
    costPerMonth: '50 DT',
    freeTrial: true,
  },

  // Colors
  colors: {
    primary: '#FFD700',        // Yellow
    secondary: '#1F2937',      // Dark Gray
    accent: '#3B82F6',         // Blue
    success: '#10b981',        // Green
    warning: '#f59e0b',        // Orange
    error: '#ef4444',          // Red
  },

  // Social Media
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61588477076260',
    // Add more as needed
    // instagram: 'https://instagram.com/...',
    // twitter: 'https://twitter.com/...',
    // youtube: 'https://youtube.com/...',
  },

  // Skills/Technologies
  skills: [
    { name: 'Arduino', icon: 'FaRaspberryPi' },
    { name: 'Électronique', icon: 'FaVials' },
    { name: 'Robotique', icon: 'FaRobot' },
    { name: 'Programmation', icon: 'FaCode' },
  ],

  // Projects
  projects: [
    { title: 'Robot Mobile', emoji: '🚗' },
    { title: 'Évitement d\'Obstacles', emoji: '🛡️' },
    { title: 'Contrôle Bluetooth', emoji: '📱' },
    { title: 'Systèmes Intelligents', emoji: '🧠' },
  ],

  // Benefits
  benefits: [
    'Apprentissage Pratique',
    'Travail en Équipe',
    'Créativité & Innovation',
    'Projets Réels',
    'Communauté Motivante',
    'Compétitions & Défis',
  ],

  // Meta Information
  meta: {
    title: 'Club Robotique Bizerte',
    description: 'Construire, Programmer, Innover - Rejoignez notre communauté de jeunes innovateurs',
    language: 'fr',
  },
};

export default themeConfig;
