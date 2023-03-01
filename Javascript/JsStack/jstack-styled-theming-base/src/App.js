import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

export default class App extends React.Component {
  constructor(props) {
    super();
    console.log(props)
  }

  render() {
    function handleToggleTheme() {
      console.log('handleToggleTheme')
    }

    const theme = 'dark';

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout
          onToggleTheme={handleToggleTheme}
          selectedTheme={theme}
        />
      </ThemeProvider>
    )
  }
}

// export function App() {
//   return (
//     // Envolvendo o contexto do tema entre os componentes
    // <ThemeContextProvider>
    //   <GlobalStyle />
    //   <Layout />
    // </ThemeContextProvider>
//   );
// };
