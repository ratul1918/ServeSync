import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'dark' | 'light' | 'embedded';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('serveSync-theme');
    return (saved as Theme) || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('dark', 'light', 'embedded');
    
    // Add current theme class
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem('serveSync-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
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
