import React from 'react';

/**
 * Header Component
 * Navigation bar with logo, title, and action buttons
 */
const Header = () => {
  const publicImageBase = process.env.PUBLIC_URL || '';

  const handleJoinClick = () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdTpYtKvZ01bV7l4drV51nnaavL2lEKgLfZNrQUfQcjvu7Yqg/viewform?usp=dialog';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute -top-20 -right-10 w-64 h-64 rounded-full bg-primary/15 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl"></div>
      <div className="absolute inset-0 bg-secondary/55 backdrop-blur-sm"></div>
      <div className="container-custom">
        <nav className="relative flex items-center justify-between h-20 md:h-20 lg:h-20 px-2">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-10 md:w-10 lg:w-11 aspect-square shrink-0 bg-primary rounded-full flex items-center justify-center overflow-hidden ring-2 ring-white/10">
              <img src={`${publicImageBase}/images/icon.jpg`} alt="Robot" className="block w-full h-full object-cover object-center rounded-full" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg md:text-lg lg:text-lg">Club Robotique</h1>
              <p className="text-primary text-sm md:text-sm lg:text-sm">Bizerte</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 md:gap-3 lg:gap-3">
            {/* Join Us Button */}
            <button
              onClick={handleJoinClick}
              className="px-4 md:px-4 lg:px-5 py-2 md:py-2 lg:py-2 bg-primary text-secondary rounded-lg transition-all duration-300 text-sm md:text-sm lg:text-sm font-bold shadow-lg shadow-primary/40 hover:shadow-2xl hover:shadow-primary/70 hover:brightness-110 ring-2 ring-primary/20 hover:ring-primary/60"
              aria-label="Rejoindre le club"
            >
              Rejoindre
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
