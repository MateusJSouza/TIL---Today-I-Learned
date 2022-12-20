import React, { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import GlobalStyle from './styles/global';

import themes from './styles/themes';

export function App() {
  const [theme, setTheme] = useState('dark');

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

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout
        onToggleTheme={handleToggleTheme}
        selectedThemeIcon={theme}
      />
    </ThemeProvider>
  );
};
