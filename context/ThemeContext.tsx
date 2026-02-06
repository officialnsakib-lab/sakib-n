// context/ThemeContext.tsx
"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

const themes = [
 
//  { 
//     name: 'green', 
//     Color: '#84CC16',

//  Glow: 'shadow-[0_0_20px_rgba(132,204,22,0.5)]'
//   } 
  
  { 
    name: 'pink', 
    color: '#b3ff00', // Premium Neon Pink
    glow: 'shadow-[0_0_20px_rgba(255,0,127,0.5)]' 
  },
  
];

const ThemeContext = createContext(themes[0]);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  useEffect(() => {
    // Random theme selection from the updated list (Yellow, Pink, Purple)
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    setCurrentTheme(randomTheme);
    
    // Setting global CSS variable for primary color
    document.documentElement.style.setProperty('--primary-color', randomTheme.color);
  }, []);

  return (
    <ThemeContext.Provider value={currentTheme}>
      <div className={`${currentTheme.name}-theme bg-[#050505] text-white min-h-screen transition-colors duration-1000`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);