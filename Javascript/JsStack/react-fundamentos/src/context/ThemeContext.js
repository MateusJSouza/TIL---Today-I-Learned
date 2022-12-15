import React, { useState, createContext } from "react";

// Exportando o contexto
export const ThemeContext = createContext();

// Exportando o ThemeProvider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  function handleToggleTheme() {
    setTheme((prevState) =>
      prevState === 'dark'
        ? 'light'
        : 'dark'
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme: handleToggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
