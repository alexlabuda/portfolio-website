"use client";

import React, { useState, useEffect } from 'react';

interface ReadingProgressBarProps {
  /**
   * Color of the progress bar
   */
  color?: string;
  
  /**
   * Height of the progress bar in pixels
   */
  height?: number;
  
  /**
   * Z-index of the progress bar
   */
  zIndex?: number;
  
  /**
   * Position of the progress bar (fixed or sticky)
   */
  position?: 'fixed' | 'sticky';
  
  /**
   * Whether to apply a shadow effect to the progress bar
   */
  withShadow?: boolean;
  
  /**
   * Additional CSS className to apply to the container
   */
  className?: string;
}

const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({
  color = 'var(--color-primary-600, #4F46E5)',
  height = 4,
  zIndex = 50,
  position = 'fixed',
  withShadow = true,
  className = '',
}) => {
  const [readingProgress, setReadingProgress] = useState(0);
  
  useEffect(() => {
    // Calculate maximum scrollable height (total document height minus viewport height)
    const calculateScrollPercentage = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Avoid division by zero
      const scrollableHeight = documentHeight - windowHeight;
      const currentProgress = scrollableHeight > 0 
        ? (scrollTop / scrollableHeight) * 100 
        : 0;
        
      setReadingProgress(currentProgress);
    };
    
    // Initial calculation
    calculateScrollPercentage();
    
    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', calculateScrollPercentage, { passive: true });
    
    // Also recalculate on resize in case document height changes
    window.addEventListener('resize', calculateScrollPercentage, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', calculateScrollPercentage);
      window.removeEventListener('resize', calculateScrollPercentage);
    };
  }, []);
  
  return (
    <div
      className={`${position} top-0 left-0 w-full pointer-events-none ${className}`}
      style={{ 
        height: `${height}px`, 
        zIndex
      }}
    >
      <div
        className={`h-full transition-all duration-100 ease-out ${withShadow ? 'shadow-sm' : ''}`}
        style={{
          width: `${readingProgress}%`,
          backgroundColor: color,
          transitionProperty: 'width'
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default ReadingProgressBar; 