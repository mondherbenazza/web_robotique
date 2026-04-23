import React, { useRef } from 'react';
import { useInViewAnimation } from '../utils/animations';

/**
 * Projects Section Component
 * Showcase of robotics projects with cards
 */
const Projects = () => {
  const ref = useRef(null);
  const isVisible = useInViewAnimation(ref);
  const imageBase = `${process.env.PUBLIC_URL}/images`;

  const projects = [
    {
      id: 1,
      title: 'Robot Bluetooth',
      image: `${imageBase}/bluetooth.png`,
    },
    {
      id: 2,
      title: 'Feu LED',
      image: `${imageBase}/led.webp`,
    },
    {
      id: 3,
      title: 'Bras servo',
      image: `${imageBase}/servo.png`,
    },
    {
      id: 4,
      title: 'Capteurs',
      image: `${imageBase}/capteur.png`,
    },
  ];

  return (
    <section id="projects" className="py-8 md:py-12 bg-transparent">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-12">
          <h3 className="text-3xl md:text-3xl font-bold text-white mb-4">
            Nos <span className="text-primary">Projets</span>
          </h3>
        </div>

        {/* Projects Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-5 lg:gap-4"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`
                group relative rounded-xl overflow-hidden
                min-h-[220px] lg:min-h-[180px] transform transition-all duration-500 hover:scale-105
                ${isVisible ? `animate-slide-up` : 'opacity-0'}
              `}
              style={{ animationDelay: isVisible ? `${index * 60}ms` : '0ms' }}
            >
              {/* Project image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20 group-hover:from-black/80 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative z-10 p-4 md:p-4 lg:p-3 h-full flex items-end justify-center text-center">
                <div className="w-full">
                  <h4 className="text-lg md:text-lg lg:text-lg font-black text-white mb-0">
                    {project.title}
                  </h4>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
