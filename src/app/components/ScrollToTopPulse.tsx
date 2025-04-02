"use client";

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

interface ScrollToTopPulseProps {
  /**
   * Threshold in pixels from the top before the button appears
   */
  showAtHeight?: number;
  
  /**
   * Additional class names to apply to the button
   */
  className?: string;
  
  /**
   * Z-index value for the button
   */
  zIndex?: number;
}

const ScrollToTopPulse: React.FC<ScrollToTopPulseProps> = ({
  showAtHeight = 300,
  className = '',
  zIndex = 40,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  // Toggle pulse animation every few seconds
  useEffect(() => {
    if (!isVisible) return;
    
    const pulseInterval = setInterval(() => {
      setIsPulsing(true);
      
      // Reset pulse after animation completes
      setTimeout(() => {
        setIsPulsing(false);
      }, 1000);
      
    }, 5000); // Pulse every 5 seconds
    
    return () => clearInterval(pulseInterval);
  }, [isVisible]);

  // Monitor scroll position to show/hide button
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > showAtHeight);
    };

    // Set initial visibility
    toggleVisibility();
    
    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAtHeight]);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6
        p-3 rounded-full
        bg-primary-600 text-white shadow-lg
        hover:bg-primary-700
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        ${isPulsing ? 'animate-pulse scale-110' : ''}
        ${className}
      `}
      style={{ zIndex }}
    >
      <FaArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTopPulse; 