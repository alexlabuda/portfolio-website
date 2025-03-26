'use client';

import { createContext, useContext, useEffect } from 'react';

// Define theme type (keeping for compatibility)
type Theme = 'light';

// Create a theme configuration type (keeping for compatibility)
interface ThemeConfig {
  name: Theme;
  label: string;
  primaryColor: string;
  accentColor: string;
}

// Define theme context type
type ThemeContextType = {
  theme: Theme;
  themeConfigs: ThemeConfig[];
};

// Create predefined theme configurations
const themeConfigs: ThemeConfig[] = [
  { 
    name: 'light', 
    label: 'Light',
    primaryColor: '#6750A4', // Deep Purple
    accentColor: '#FFD8E4', // Soft Pink
  },
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Fixed light theme
  const theme: Theme = 'light';

  // Apply the light theme on initial render
  useEffect(() => {
    const root = document.documentElement;
    
    // Ensure we're using light mode
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
    }
    
    // No additional theme configurations needed as CSS variables are already defined in globals.css
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeConfigs }}>
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