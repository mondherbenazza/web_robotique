/**
 * Utility functions for smooth scrolling and animations
 */

import { useEffect, useState } from 'react';

// Smooth scroll to an element by ID
export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Detect if an element is in viewport for animations
export const useInViewAnimation = (ref, options = {}) => {
  const threshold = options.threshold ?? 0.1;
  const rootMargin = options.rootMargin ?? '0px';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold, rootMargin });

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [ref, threshold, rootMargin]);

  return isVisible;
};
