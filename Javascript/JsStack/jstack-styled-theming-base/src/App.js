import React from 'react';

import { ThemeContextProvider } from './contexts/ThemeContext';

import Layout from './components/Layout';
import GlobalStyle from './styles/global';

export function App() {
  return (
    // Envolvendo o contexto do tema entre os componentes
    <ThemeContextProvider>
      <GlobalStyle />
      <Layout />
    </ThemeContextProvider>
  );
};
