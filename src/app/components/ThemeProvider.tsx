'use client';

import { createContext, useContext, useEffect } from 'react';

// Define theme type (keeping for compatibility)
type Theme = 'system' | 'light' | 'dark' | 'blue' | 'green' | 'purple' | 'orange';

// Create a theme configuration type (keeping for compatibility)
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
    name: 'light', 
    label: 'Light',
    bgClass: 'bg-white',
    textClass: 'text-gray-900',
    accentClass: 'indigo'
  },
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always use light theme
  const theme: Theme = 'light';

  // Apply the light theme on initial render
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    // Remove all theme classes first
    root.classList.remove('dark');
    root.classList.remove('blue', 'green', 'purple', 'orange');
    
    // Set light theme classes
    body.classList.remove('bg-gray-900', 'text-gray-100');
    body.classList.add('bg-white', 'text-gray-900');
  }, []);

  // Dummy setter (maintained for compatibility but doesn't do anything)
  const setTheme = () => {
    // Does nothing - theme is fixed
  };

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