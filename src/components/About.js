import React, { useEffect, useRef, useState } from 'react';
import { useInViewAnimation } from '../utils/animations';

/**
 * About Section Component
 * Brief introduction to the club
 */
const About = () => {
  const ref = useRef(null);
  const isVisible = useInViewAnimation(ref);

  const AnimatedStat = ({ target, prefix = '', suffix = '', colorClass, label }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      let animationFrameId;
      const duration = 1200;
      const startTime = performance.now();

      const animate = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * easedProgress));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(animate);

      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }, [target]);

    return (
      <div className="bg-secondary/50 backdrop-blur rounded-lg px-2 py-2.5 md:px-3 md:py-4 flex items-center justify-center text-center min-w-0 flex-1">
        <div className="flex flex-col items-center justify-center min-w-0">
          <p className={`text-3xl md:text-3xl font-bold leading-none ${colorClass}`}>
            {prefix}{value}{suffix}
          </p>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-tight mt-1">{label}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="about" className="py-8 md:py-12 bg-transparent">
      <div className="container-custom">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          {/* Section Title */}
          <h3 className="text-3xl md:text-3xl font-bold text-white mb-8">
            À Propos du <span className="text-primary">Club</span>
          </h3>

          {/* Content */}
          <div className="space-y-4 text-gray-200 text-lg md:text-xl leading-relaxed font-semibold">
            <p>
              Un club passionné de robotique où chacun crée, apprend et innove ensemble.
            </p>
          </div>

          {/* Statistics or highlights */}
          <div className="flex flex-nowrap items-stretch gap-2 sm:gap-4 md:gap-6 mt-12">
            <AnimatedStat target={100} prefix="+" colorClass="text-primary" label="Membres" />
            <AnimatedStat target={50} prefix="+" colorClass="text-blue-400" label="Projets" />
            <AnimatedStat target={20} prefix="+" colorClass="text-green-400" label="Compétitions" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
