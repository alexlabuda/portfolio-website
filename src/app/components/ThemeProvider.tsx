'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// Define theme type to include multiple theme options
type Theme = 'system' | 'light' | 'dark' | 'blue' | 'green' | 'purple' | 'orange';

// Create a theme configuration type
interface ThemeConfig {
  name: Theme;
  label: string;
  bgClass: string;
  textClass: string;
  accentClass: string;
}

// Define theme context type
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeConfigs: ThemeConfig[];
};

// Create predefined theme configurations
const themeConfigs: ThemeConfig[] = [
  { 
    name: 'system', 
    label: 'System',
    bgClass: '', // Uses system preference
    textClass: '',
    accentClass: 'indigo'
  },
  { 
    name: 'light', 
    label: 'Light',
    bgClass: 'bg-white',
    textClass: 'text-gray-900',
    accentClass: 'indigo'
  },
  { 
    name: 'dark', 
    label: 'Dark',
    bgClass: 'bg-gray-900',
    textClass: 'text-white',
    accentClass: 'indigo'
  },
  { 
    name: 'blue', 
    label: 'Blue',
    bgClass: 'blue bg-white',
    textClass: 'text-blue-900',
    accentClass: 'blue'
  },
  { 
    name: 'green', 
    label: 'Green',
    bgClass: 'green bg-white',
    textClass: 'text-green-900',
    accentClass: 'green'
  },
  { 
    name: 'purple', 
    label: 'Purple',
    bgClass: 'purple bg-white',
    textClass: 'text-purple-900',
    accentClass: 'purple'
  },
  { 
    name: 'orange', 
    label: 'Orange',
    bgClass: 'orange bg-white',
    textClass: 'text-orange-900',
    accentClass: 'orange'
  },
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');

  // Apply theme changes
  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    const body = document.body;
    
    // Remove all theme classes first
    root.classList.remove('dark');
    root.classList.remove('blue', 'green', 'purple', 'orange');
    
    // For light/dark mode
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else if (newTheme === 'system') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add('dark');
      }
    }
    
    // Add color theme class
    if (newTheme !== 'light' && newTheme !== 'dark' && newTheme !== 'system') {
      root.classList.add(newTheme);
    }
    
    // Update body background and text colors based on the theme
    if (newTheme === 'dark' || (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      body.classList.remove('bg-white', 'text-gray-900');
      body.classList.add('bg-gray-900', 'text-gray-100');
    } else {
      body.classList.remove('bg-gray-900', 'text-gray-100');
      body.classList.add('bg-white', 'text-gray-900');
    }
    
    // Store theme preference
    localStorage.setItem('theme', newTheme);
  };

  // Set theme with side effects
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
  };

  // On first render, check if a theme is stored in localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme && themeConfigs.some(c => c.name === storedTheme)) {
      setThemeState(storedTheme);
      applyTheme(storedTheme);
    } else {
      // Default to system preference
      setThemeState('system');
      applyTheme('system');
    }

    // Set up listener for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeConfigs }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 