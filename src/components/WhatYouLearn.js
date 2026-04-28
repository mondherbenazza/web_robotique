import React, { useRef } from 'react';
import { FaRaspberryPi, FaVials, FaRobot, FaCode } from 'react-icons/fa';
import { useInViewAnimation } from '../utils/animations';

/**
 * What You'll Learn Section Component
 * Grid displaying skills and technologies
 */
const WhatYouLearn = () => {
  const ref = useRef(null);
  const isVisible = useInViewAnimation(ref);
  const imageBase = `${process.env.PUBLIC_URL}/images`;

  const skills = [
    {
      id: 1,
      title: 'Robotique',
      description: 'Conception et assemblage des robots',
      image: `${imageBase}/project3.webp`,
      icon: FaRobot,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 2,
      title: 'Arduino',
      description: 'Programmation des microcontrôleurs Arduino',
      image: `${imageBase}/project1.webp`,
      icon: FaRaspberryPi,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      title: 'Électronique',
      description: 'Principes des circuits et composants électroniques',
      image: `${imageBase}/project2.webp`,
      icon: FaVials,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: 'Programmation',
      description: 'C/C++ et logique algorithmique',
      image: `${imageBase}/project4.webp`,
      icon: FaCode,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="learn" className="py-8 md:py-12 bg-transparent">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-12">
          <h3 className="text-3xl md:text-3xl font-bold text-white mb-4">
            Ce que Vous <span className="text-primary">Apprendrez</span>
          </h3>
        </div>

        {/* Skills Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-5 lg:gap-4"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.id}
                className={`
                  relative rounded-xl overflow-hidden
                  transform transition-all duration-[250ms] hover:scale-105
                  ${isVisible ? `animate-slide-up` : 'opacity-0'}
                `}
                style={{ animationDelay: isVisible ? `${index * 30}ms` : '0ms' }}
              >
                {/* Image Background */}
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/52 to-black/30"></div>

                {/* Content */}
                <div className="relative z-10 p-4 md:p-4 lg:p-3 h-full flex flex-col justify-between items-center text-center min-h-[220px] lg:min-h-[180px]">
                  {/* Icon */}
                  <div className={`text-3xl md:text-3xl lg:text-2xl mb-2 bg-gradient-to-br ${skill.color} bg-clip-text text-transparent`}>
                    <IconComponent />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl md:text-xl lg:text-lg font-black text-white mb-2 [text-shadow:0_2px_8px_rgba(0,0,0,0.9)]">
                    {skill.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-200 text-sm md:text-base lg:text-sm font-semibold leading-relaxed [text-shadow:0_1px_6px_rgba(0,0,0,0.9)]">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
