import React, { useRef } from 'react';
import { FaClock, FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import { useInViewAnimation } from '../utils/animations';

/**
 * Schedule Section Component
 * Displays meeting times and membership cost
 */
const Schedule = () => {
  const ref = useRef(null);
  const isVisible = useInViewAnimation(ref);

  return (
    <section id="schedule" className="py-8 md:py-12 bg-transparent">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-12">
          <h3 className="text-3xl md:text-3xl font-bold text-white mb-4">
            Détails <span className="text-primary">Pratiques</span>
          </h3>
        </div>

        {/* Info Cards */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-3 max-w-4xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          {/* Schedule Card */}
          <div className="bg-gradient-to-br from-cyan-600 to-sky-400 p-0.5 rounded-2xl transform transition-all duration-500 hover:scale-[1.03] order-1">
            <div className="bg-slate-900/95 rounded-2xl p-4 md:p-5 lg:p-4 h-full flex flex-col items-center text-center">
              <div className="text-3xl md:text-3xl lg:text-2xl text-blue-400 mb-2.5">
                <FaClock />
              </div>
              <h4 className="text-xl md:text-2xl lg:text-xl font-bold text-white mb-2.5">
                Horaires
              </h4>
              <div className="w-full flex flex-col gap-2 md:flex-1 md:min-h-[130px] lg:min-h-[110px]">
                <div className="md:flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-300 text-lg md:text-xl lg:text-lg font-bold mt-1.5 leading-tight">
                      1 juin - 31 Août
                    </p>
                    <p className="text-gray-300 text-lg md:text-xl lg:text-lg font-bold leading-tight mt-1">
                      4h / semaine
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm md:text-base lg:text-sm leading-relaxed">
                  Réunions régulières et sessions de travail
                </p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-400 p-0.5 rounded-2xl transform transition-all duration-500 hover:scale-[1.03] order-2">
            <div className="bg-zinc-900/95 rounded-2xl p-4 md:p-5 lg:p-4 h-full flex flex-col items-center text-center">
              <div className="text-3xl md:text-3xl lg:text-2xl text-fuchsia-400 mb-2.5">
                <FaMapMarkerAlt />
              </div>
              <h4 className="text-xl md:text-2xl lg:text-xl font-bold text-white mb-2.5">
                Local
              </h4>
              <div className="relative w-full max-w-[13.5rem] lg:max-w-[11rem] mb-3 rounded-xl border border-fuchsia-300/40 overflow-hidden">
                <iframe
                  title="Local du club"
                  src="https://www.google.com/maps?q=Coll%C3%A8ge%20priv%C3%A9%20Les%20Pilotes&output=embed"
                  className="w-full aspect-[4/3] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <a
                  href="https://maps.app.goo.gl/kgfrxfsn6yEmJ5nM7?g_st=ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label="Ouvrir la localisation dans Google Maps"
                ></a>
              </div>
              <p className="text-gray-300 text-lg md:text-xl lg:text-lg font-semibold mb-2">
                Collège privé Les Pilotes
              </p>
              <p className="text-gray-400 text-sm md:text-base lg:text-sm leading-relaxed">
                Espace équipé pour ateliers robotiques
              </p>
            </div>
          </div>

          {/* Cost Card */}
          <div className="bg-gradient-to-br from-emerald-600 to-lime-400 p-0.5 rounded-2xl transform transition-all duration-500 hover:scale-[1.03] order-3">
            <div className="bg-emerald-950/80 rounded-2xl p-4 md:p-5 lg:p-4 h-full flex flex-col items-center text-center">
              <div className="text-3xl md:text-3xl lg:text-2xl text-green-400 mb-2.5">
                <FaDollarSign />
              </div>
              <h4 className="text-xl md:text-2xl lg:text-xl font-bold text-white mb-2.5">
                Cotisation
              </h4>
              <div className="w-full flex flex-col gap-2 md:flex-1 md:min-h-[130px] lg:min-h-[110px]">
                <div className="md:flex-1 flex items-center justify-center">
                  <p className="text-gray-300 text-lg md:text-xl lg:text-lg font-bold">
                    50 DT / mois
                  </p>
                </div>
                <p className="text-gray-400 text-sm md:text-base lg:text-sm leading-relaxed">
                  Accès à tous les équipements et ressources
                </p>
              </div>
            </div>
          </div>

        </div>


      </div>
    </section>
  );
};

export default Schedule;
