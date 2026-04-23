import React, { useRef } from 'react';
import { useInViewAnimation } from '../utils/animations';

/**
 * Propos Section Component
 * Additional presentation section displayed under Details
 */
const Propos = () => {
  const ref = useRef(null);
  const isVisible = useInViewAnimation(ref);

  return (
    <section id="propos" className="py-8 md:py-12 bg-transparent">
      <div className="container-custom">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-8 backdrop-blur-sm">
            <h3 className="text-3xl md:text-3xl font-bold text-white text-center mb-6">
              À <span className="text-primary">Propos</span>
            </h3>

            <div className="space-y-4 text-gray-200 text-sm md:text-base leading-relaxed text-center">
              <p>
                Le Club Robotique Bizerte accompagne les jeunes dans la création de projets concrets,
                de l&apos;idée jusqu&apos;au prototype.
              </p>
              <p>
                Chaque séance combine pratique, programmation et travail d&apos;équipe pour développer la
                créativité, la logique et l&apos;esprit d&apos;innovation.
              </p>
              <p className="text-primary font-semibold">
                Rejoignez-nous pour construire, programmer et innover ensemble.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Propos;