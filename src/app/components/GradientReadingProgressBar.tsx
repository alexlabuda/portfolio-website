"use client";

import React, { useState, useEffect } from 'react';

interface GradientReadingProgressBarProps {
  /**
   * Gradient colors for the progress bar
   */
  gradientColors?: string[];
  
  /**
   * Height of the progress bar in pixels
   */
  height?: number;
  
  /**
   * Z-index of the progress bar
   */
  zIndex?: number;
  
  /**
   * Whether to add a subtle pulse animation
   */
  animate?: boolean;
  
  /**
   * Additional CSS className to apply to the container
   */
  className?: string;
  
  /**
   * Whether to show percentage text
   */
  showPercentage?: boolean;
  
  /**
   * Position of percentage text (inside or above)
   */
  percentagePosition?: 'inside' | 'above';
}

const GradientReadingProgressBar: React.FC<GradientReadingProgressBarProps> = ({
  gradientColors = ['#4F46E5', '#8B5CF6', '#EC4899'],
  height = 6,
  zIndex = 50,
  animate = true,
  className = '',
  showPercentage = false,
  percentagePosition = 'above',
}) => {
  const [readingProgress, setReadingProgress] = useState(0);
  
  useEffect(() => {
    const calculateScrollPercentage = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Avoid division by zero
      const scrollableHeight = documentHeight - windowHeight;
      const currentProgress = scrollableHeight > 0 
        ? (scrollTop / scrollableHeight) * 100 
        : 0;
        
      setReadingProgress(Math.min(100, Math.max(0, currentProgress)));
    };
    
    // Initial calculation
    calculateScrollPercentage();
    
    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', calculateScrollPercentage, { passive: true });
    window.addEventListener('resize', calculateScrollPercentage, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', calculateScrollPercentage);
      window.removeEventListener('resize', calculateScrollPercentage);
    };
  }, []);
  
  // Create CSS gradient string
  const gradientBackground = `linear-gradient(to right, ${gradientColors.join(', ')})`;
  
  // Round progress for display
  const displayProgress = Math.round(readingProgress);
  
  return (
    <div
      className={`fixed top-0 left-0 w-full ${className}`}
      style={{ 
        height: showPercentage && percentagePosition === 'above' ? `${height + 20}px` : `${height}px`,
        zIndex,
        pointerEvents: 'none'
      }}
    >
      {/* Percentage indicator (if above) */}
      {showPercentage && percentagePosition === 'above' && (
        <div 
          className="absolute right-0 top-0 font-medium text-xs px-2 py-1 bg-white/90 text-gray-800 rounded-bl shadow-sm transition-all duration-200 ease-out"
          style={{ transform: `translateX(-${100 - readingProgress}%)` }}
        >
          {displayProgress}%
        </div>
      )}
      
      {/* Progress Bar */}
      <div 
        className={`h-${height} relative ${animate ? 'after:absolute after:inset-0 after:opacity-30 after:animate-pulse' : ''}`}
      >
        <div
          className="h-full shadow-sm transition-all duration-200 ease-out overflow-hidden"
          style={{
            width: `${readingProgress}%`,
            background: gradientBackground,
            transitionProperty: 'width',
          }}
        >
          {/* Percentage indicator (if inside) */}
          {showPercentage && percentagePosition === 'inside' && readingProgress > 10 && (
            <div className="absolute right-2 inset-y-0 flex items-center">
              <span className="text-xs font-bold text-white drop-shadow-sm">
                {displayProgress}%
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GradientReadingProgressBar; 