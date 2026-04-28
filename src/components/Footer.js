
import React from 'react' ;
import { FaPhone, FaFacebook } from 'react-icons/fa';

/**
 * Footer/Contact Section Component
 * Contact information and social links
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative pt-10 md:pt-14 bg-transparent">
      <div className="container-custom">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-5 mb-12 py-6 border-y border-gray-700">
          {/* Phone Contact */}
          <div className="flex items-center justify-center md:justify-start gap-3 p-4 bg-secondary/50 rounded-xl hover:bg-secondary/80 transition-colors duration-300">
            <div className="text-2xl text-primary">
              <FaPhone />
            </div>
            <div>
              <p className="text-gray-300 text-sm md:text-sm font-bold">Téléphone</p>
              <a
                href="tel:+21650929793"
                className="text-white font-semibold text-sm md:text-base hover:text-primary transition-colors duration-300"
              >
                +216 50 929 793
              </a>
            </div>
          </div>

          {/* Facebook Contact */}
          <div className="flex items-center justify-center md:justify-end gap-3 p-4 bg-secondary/50 rounded-xl hover:bg-secondary/80 transition-colors duration-300">
            <div className="text-2xl text-blue-500">
              <FaFacebook />
            </div>
            <div className="text-right">
              <a
                href="https://www.facebook.com/profile.php?id=61588477076260"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold text-sm md:text-base underline underline-offset-4 decoration-blue-400 hover:text-blue-200 hover:decoration-blue-300 transition-colors duration-300"
              >
                Club Robotique Bizerte
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center py-6">
          <p className="text-gray-400 text-sm md:text-base font-semibold mb-3">
            Prêt à commencer votre aventure robotique ?
          </p>

          {/* CTA Button */}
          <button
            onClick={() => window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdTpYtKvZ01bV7l4drV51nnaavL2lEKgLfZNrQUfQcjvu7Yqg/viewform?usp=dialog'}
            className="px-8 md:px-10 py-2.5 md:py-3 bg-primary text-secondary text-sm md:text-base font-bold rounded-full transition-all duration-300 mb-6 inline-block shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/70 hover:brightness-110 ring-2 ring-primary/30 hover:ring-primary/70 animate-glow-pulse"
            aria-label="Rejoindre le club"
          >
            Rejoindre Maintenant
          </button>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-xs md:text-xs">
              © {currentYear} Club Robotique Bizerte. Tous droits réservés.
            </p>
            <p className="text-gray-600 text-xs mt-1.5">
              Construit avec passion pour les innovateurs 🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
