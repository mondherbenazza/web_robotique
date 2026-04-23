import React from 'react';
import { smoothScrollTo } from '../utils/animations';

/**
 * Hero Section Component
 * Full-width banner with main title, subtitle and CTA
 */
const Hero = () => {
  const imageBase = `${process.env.PUBLIC_URL}/images`;

  const handleJoinClick = () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdTpYtKvZ01bV7l4drV51nnaavL2lEKgLfZNrQUfQcjvu7Yqg/viewform?usp=dialog';
  };

  const handleContactClick = () => {
    smoothScrollTo('contact');
  };

  return (
    <section className="relative h-auto py-16 sm:py-20 md:py-24 lg:py-28 sm:min-h-screen flex items-center justify-center overflow-hidden pt-4 sm:pt-8 md:pt-10 lg:pt-12">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            `linear-gradient(rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.58)), url('${imageBase}/bg.png')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/72 via-slate-950/80 to-secondary/90"></div>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        {/* Main Title with animation */}
        <div className="animate-fade-in mt-24 sm:mt-28 md:mt-24 lg:mt-28">
          <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-black text-white mb-2 md:mb-3 leading-tight [text-shadow:0_3px_14px_rgba(0,0,0,0.95)]">
            <span className="text-purple-500">Construire</span> <span className="text-blue-400">Programmer</span>
            <br />
            <span className="text-green-400">Innover</span>
          </h2>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 mb-0 md:mb-0 sm:mb-1">
            <button
              onClick={handleContactClick}
              className="px-8 md:px-8 lg:px-10 py-3 md:py-3 lg:py-3.5 text-white bg-white/10 hover:bg-white/20 backdrop-blur rounded-full transition-all duration-300 text-base md:text-base lg:text-base font-bold border border-white/25"
              aria-label="Aller à la section contact"
            >
              Contact
            </button>

            <button
              onClick={handleJoinClick}
              className="px-8 md:px-10 lg:px-12 py-3 md:py-3.5 lg:py-4 bg-primary text-secondary text-base md:text-base lg:text-lg font-bold rounded-full transition-all duration-300 shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/70 hover:brightness-110 ring-2 ring-primary/30 hover:ring-primary/70 animate-glow-pulse"
              aria-label="Rejoindre le club"
            >
              Rejoindre
            </button>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
