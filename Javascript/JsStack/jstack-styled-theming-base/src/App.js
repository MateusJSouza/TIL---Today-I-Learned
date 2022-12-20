import React from 'react';
import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import GlobalStyle from './styles/global';

import themes from './styles/themes';

export function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
};
