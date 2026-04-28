import React, { useRef } from 'react';
import { FaUsers, FaLightbulb, FaHeartbeat, FaTrophy, FaGraduationCap, FaRocket } from 'react-icons/fa';
import { useInViewAnimation } from '../utils/animations';

/**
 * Benefits Section Component
 * Highlights the benefits of joining the club
 */
const Benefits = () => {
  const ref = useRef(null);
  const isVisible = useInViewAnimation(ref);

  const benefits = [
    {
      id: 1,
      title: 'Apprentissage Pratique',
      description: 'Apprendre en faisant, avec des projets réels et concrets',
      icon: FaGraduationCap,
      color: 'bg-blue-500/20 border-blue-500/50',
    },
    {
      id: 2,
      title: 'Travail en Équipe',
      description: 'Collaborer avec des passionnés et développer vos soft skills',
      icon: FaUsers,
      color: 'bg-purple-500/20 border-purple-500/50',
    },
    {
      id: 3,
      title: 'Créativité & Innovation',
      description: 'Exprimer votre créativité à travers des projets innovants',
      icon: FaLightbulb,
      color: 'bg-yellow-500/20 border-yellow-500/50',
    },
    {
      id: 4,
      title: 'Projets Réels',
      description: 'Construire et programmer des solutions concrètes',
      icon: FaRocket,
      color: 'bg-pink-500/20 border-pink-500/50',
    },
    {
      id: 5,
      title: 'Communauté Motivante',
      description: 'Rejoindre une communauté de jeunes innovateurs',
      icon: FaHeartbeat,
      color: 'bg-red-500/20 border-red-500/50',
    },
    {
      id: 6,
      title: 'Compétitions & Défis',
      description: 'Participer à des compétitions et relever des défis technologiques',
      icon: FaTrophy,
      color: 'bg-green-500/20 border-green-500/50',
    },
  ];

  return (
    <section id="benefits" className="py-8 md:py-12 bg-transparent">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-12">
          <h3 className="text-3xl md:text-3xl font-bold text-white mb-4">
            Pourquoi Nous <span className="text-primary">Rejoindre</span>
          </h3>
        </div>

        {/* Benefits Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 lg:gap-4"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.id}
                className={`
                  ${benefit.color} border backdrop-blur
                  rounded-2xl p-4 md:p-5 lg:p-4
                  transform transition-all duration-[250ms] hover:scale-105 hover:shadow-xl
                  ${isVisible ? `animate-slide-up` : 'opacity-0'}
                `}
                style={{ animationDelay: isVisible ? `${index * 40}ms` : '0ms' }}
              >
                {/* Icon */}
                <div className="text-3xl md:text-3xl lg:text-2xl mb-3 text-primary">
                  <IconComponent />
                </div>

                {/* Title */}
                <h4 className="text-lg lg:text-base font-black text-white mb-2">
                  {benefit.title}
                </h4>

                {/* Description */}
                <p className="text-gray-200 text-sm md:text-base lg:text-sm font-semibold">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
