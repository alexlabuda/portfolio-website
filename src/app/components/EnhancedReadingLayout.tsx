"use client";

import React, { ReactNode } from 'react';
import ScrollToTop from './ScrollToTop';
import ScrollToTopPulse from './ScrollToTopPulse';
import ReadingProgressBar from './ReadingProgressBar';
import GradientReadingProgressBar from './GradientReadingProgressBar';

interface EnhancedReadingLayoutProps {
  /**
   * Child elements to render within the layout
   */
  children: ReactNode;
  
  /**
   * Whether to use the gradient progress bar instead of the standard one
   */
  useGradientBar?: boolean;
  
  /**
   * Whether to use the pulsing scroll-to-top button
   */
  usePulsingButton?: boolean;
  
  /**
   * Whether to show percentage on the progress bar
   */
  showPercentage?: boolean;
  
  /**
   * Additional classes to apply to the container
   */
  className?: string;
}

/**
 * A layout component that enhances reading experience with a progress bar and scroll-to-top button
 */
const EnhancedReadingLayout: React.FC<EnhancedReadingLayoutProps> = ({
  children,
  useGradientBar = false,
  usePulsingButton = false,
  showPercentage = false,
  className = '',
}) => {
  return (
    <div className={className}>
      {/* Progress Bar */}
      {useGradientBar ? (
        <GradientReadingProgressBar showPercentage={showPercentage} />
      ) : (
        <ReadingProgressBar height={4} withShadow={true} />
      )}
      
      {/* Content */}
      {children}
      
      {/* Scroll-to-top Button */}
      {usePulsingButton ? (
        <ScrollToTopPulse />
      ) : (
        <ScrollToTop />
      )}
    </div>
  );
};

export default EnhancedReadingLayout; 