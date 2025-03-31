'use client';

import { ReactNode } from 'react';

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
  return (
    <a 
      href={href}
      download={download}
      className={`group px-4 py-2 bg-primary-600 text-white rounded-md flex items-center transition-all duration-300 hover:bg-primary-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 w-full justify-center relative overflow-hidden ${className}`}
      target={target}
      rel={rel}
    >
      <span className="absolute inset-0 w-full h-full bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
      {icon && (
        <span className="mr-2 transition-transform group-hover:scale-110 duration-300">
          {icon}
        </span>
      )}
      <span className="text-sm font-medium relative z-10">{text}</span>
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </a>
  );
} 