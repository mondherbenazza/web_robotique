import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroTech from './components/IntroTech';
import About from './components/About';
import WhatYouLearn from './components/WhatYouLearn';
import Projects from './components/Projects';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import './index.css';

/**
 * Main App Component
 * Orchestrates all sections of the website
 */
function App() {
  useEffect(() => {
    // Optional: Add any global initialization code here
    console.log('Club Robotique Bizerte - Website loaded');
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white overflow-x-hidden">
      {/* Header Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Intro Tech Section */}
        <IntroTech />

        {/* What You'll Learn Section */}
        <WhatYouLearn />

        {/* Projects Section */}
        <Projects />

        {/* Schedule Section */}
        <Schedule />

        {/* About Section */}
        <About />

        {/* Footer/Contact Section */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
