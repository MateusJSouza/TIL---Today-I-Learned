import React, { createContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";

import themes from '../styles/themes';

// Criando o contexto com o valor inicial de 'dark'
export const ThemeContext = createContext('dark');

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const storageValueTheme = localStorage.getItem('theme');

    if (storageValueTheme) {
      return JSON.parse(storageValueTheme);
    }

    return [];
  });

  // Memorizando o tema com o useMemo()
  const currentTheme = useMemo(() => {
    /*
      Quando não sabemos qual é o valor de uma variável, nós passamos o colchete
      e o nome da variável, pois estou acessando um variável de forma implícita
      themes[theme]
    */
    return themes[theme] || themes.dark;
  }, [theme]);

  // Função de troca de tema
  function handleToggleTheme() {
    setTheme(
      prevState => prevState === 'dark'
        ? 'light'
        : 'dark'
    )
  }

  // Salvando o valor do tema no localStorage
  // JSON.stringfy -> converte valores em javascript para uma string JSON
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return (
    // Provendo os valores dos contextos aos demais componentes
    <ThemeContext.Provider
      value={{
        onToggleTheme: handleToggleTheme,
        selectedThemeIcon: theme,
      }}
    >
      {/* Envolvendo o tema para os demais componentes, passando seu valor atual 'dark' ou 'light' */}
      <ThemeProvider theme={currentTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}