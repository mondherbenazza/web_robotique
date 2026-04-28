import React, { useRef } from 'react';
import { useInViewAnimation } from '../utils/animations';

/**
 * Gallery Section Component
 * Image grid showcasing club activities and students
 */
const Gallery = () => {
  const ref = useRef(null);
  const isVisible = useInViewAnimation(ref);

  // Placeholder images - replace with actual images
  const images = [
    {
      id: 1,
      title: 'Atelier Arduino',
      gradient: 'from-blue-600 to-blue-400',
      emoji: '⚙️',
    },
    {
      id: 2,
      title: 'Construction de Robot',
      gradient: 'from-purple-600 to-purple-400',
      emoji: '🤖',
    },
    {
      id: 3,
      title: 'Programmation en Équipe',
      gradient: 'from-pink-600 to-pink-400',
      emoji: '💻',
    },
    {
      id: 4,
      title: 'Test des Prototypes',
      gradient: 'from-yellow-600 to-yellow-400',
      emoji: '🧪',
    },
    {
      id: 5,
      title: 'Compétition Robotique',
      gradient: 'from-green-600 to-green-400',
      emoji: '🏆',
    },
    {
      id: 6,
      title: 'Démonstration de Robot',
      gradient: 'from-red-600 to-red-400',
      emoji: '🚀',
    },
    {
      id: 7,
      title: 'Atelier Électronique',
      gradient: 'from-cyan-600 to-cyan-400',
      emoji: '⚡',
    },
    {
      id: 8,
      title: 'Réunion du Club',
      gradient: 'from-indigo-600 to-indigo-400',
      emoji: '👥',
    },
  ];

  return (
    <section id="gallery" className="py-8 md:py-12 bg-transparent">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-12">
          <h3 className="text-3xl md:text-3xl font-bold text-white mb-4">
            Galerie <span className="text-primary">Photos</span>
          </h3>
        </div>

        {/* Gallery Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`
                relative group rounded-2xl overflow-hidden aspect-video
                transform transition-all duration-[250ms] hover:scale-105
                cursor-pointer
                ${isVisible ? `animate-fade-in` : 'opacity-0'}
              `}
              style={{ animationDelay: isVisible ? `${index * 30}ms` : '0ms' }}
            >
              {/* Gradient background (placeholder) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${image.gradient}`}></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-3">
                <div className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {image.emoji}
                </div>
                <p className="text-white font-semibold text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </p>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Gallery;
