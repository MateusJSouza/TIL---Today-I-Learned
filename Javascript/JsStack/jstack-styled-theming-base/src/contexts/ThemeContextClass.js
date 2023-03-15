import React, { createContext, useState } from 'react';

export const ThemeContextClass = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContextClass.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContextClass.Provider>
  )
}
