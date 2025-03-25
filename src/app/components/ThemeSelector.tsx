'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function ThemeSelector() {
  const { theme, setTheme, themeConfigs } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get the current theme configuration
  const currentTheme = themeConfigs.find(t => t.name === theme) || themeConfigs[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getThemeColor = (themeName: string) => {
    if (themeName === 'system') return 'linear-gradient(to right, #fff 50%, #000 50%)';
    if (themeName === 'light') return '#fff';
    if (themeName === 'dark') return '#1f2937';
    
    const config = themeConfigs.find(t => t.name === themeName);
    if (!config) return '#fff';
    
    switch(config.name) {
      case 'blue': return '#3b82f6';
      case 'green': return '#22c55e';
      case 'purple': return '#a855f7';
      case 'orange': return '#f97316';
      default: return '#fff';
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        aria-expanded={isOpen}
      >
        <span 
          className="w-4 h-4 rounded-full border border-gray-400 dark:border-gray-600"
          style={{ background: getThemeColor(theme) }}
        />
        <span className="hidden sm:inline">{currentTheme.label}</span>
        <svg 
          className="w-4 h-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 border border-gray-200 dark:border-gray-700">
          {themeConfigs.map((themeConfig) => (
            <button
              key={themeConfig.name}
              onClick={() => {
                setTheme(themeConfig.name);
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                theme === themeConfig.name ? 'bg-gray-100 dark:bg-gray-700 font-medium' : ''
              }`}
            >
              <span 
                className="w-4 h-4 rounded-full border border-gray-400 dark:border-gray-600"
                style={{ background: getThemeColor(themeConfig.name) }}
              />
              {themeConfig.label}
              {theme === themeConfig.name && (
                <svg className="ml-auto h-5 w-5 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 