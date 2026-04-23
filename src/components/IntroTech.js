import React from 'react';
import { FaRobot, FaMicrochip, FaBolt } from 'react-icons/fa';

/**
 * Intro Tech Section Component
 * Quick teaser section under hero with electronics themed background
 */
const IntroTech = () => {
  const imageBase = `${process.env.PUBLIC_URL}/images`;

  return (
    <section id="intro-tech" className="relative -mt-6 md:-mt-10 py-6 md:py-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 blur-[4px]"
        style={{ backgroundImage: `url('${imageBase}/bg5.jpg')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/85 to-slate-950/90"></div>

      <div className="relative z-10 container-custom">
        <div className="max-w-4xl mx-auto rounded-2xl border border-cyan-300/25 bg-black/35 backdrop-blur-sm px-5 py-6 md:px-6 md:py-6">
          <h3 className="text-3xl md:text-3xl font-black text-white text-center mb-4 leading-tight">
            Crée ton <span className="text-blue-400">robot</span>.
          </h3>

          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-primary text-xs md:text-sm font-bold">
              <FaRobot /> 12-20 ans
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-cyan-400/25 bg-slate-900/45 px-3 py-2">
              <FaMicrochip className="text-cyan-300 text-lg md:text-xl" />
              <p className="text-gray-100 text-sm md:text-base font-semibold">Électronique et Arduino</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-cyan-400/25 bg-slate-900/45 px-3 py-2">
              <FaBolt className="text-cyan-300 text-lg md:text-xl" />
              <p className="text-gray-100 text-sm md:text-base font-semibold">Projets pratiques</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-cyan-400/25 bg-slate-900/45 px-3 py-2">
              <FaRobot className="text-cyan-300 text-lg md:text-xl" />
              <p className="text-gray-100 text-sm md:text-base font-semibold">Défis robotiques</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroTech;