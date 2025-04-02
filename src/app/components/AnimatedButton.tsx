'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface AnimatedButtonProps {
  href: string;
  text: string;
  icon?: ReactNode;
  download?: string;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

export function AnimatedButton({ 
  href, 
  text, 
  icon, 
  download, 
  className = '',
  target,
  rel
}: AnimatedButtonProps) {
  // Check if this is an external link (starts with http or mailto)
  const isExternalLink = href.startsWith('http') || href.startsWith('mailto');
  
  // The button style classes
  const buttonClasses = `group px-4 py-2 bg-primary-600 text-white rounded-md flex items-center transition-all duration-300 hover:bg-primary-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 w-full justify-center relative overflow-hidden ${className}`;
  
  // The inner content of the button
  const ButtonContent = () => (
    <>
      <span className="absolute inset-0 w-full h-full bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
      {icon && (
        <span className="mr-2 transition-transform group-hover:scale-110 duration-300">
          {icon}
        </span>
      )}
      <span className="text-sm font-medium relative z-10">{text}</span>
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </>
  );
  
  // For external links (or download links), use a regular <a> tag
  if (isExternalLink || download) {
    return (
      <a 
        href={href}
        download={download}
        className={buttonClasses}
        target={target}
        rel={rel}
      >
        <ButtonContent />
      </a>
    );
  }
  
  // For internal links, use Next.js Link component
  return (
    <Link 
      href={href}
      className={buttonClasses}
      target={target}
      rel={rel}
    >
      <ButtonContent />
    </Link>
  );
} 