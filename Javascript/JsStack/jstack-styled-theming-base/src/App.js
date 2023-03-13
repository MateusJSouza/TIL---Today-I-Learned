import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // Estados nos Class Components
    this.state = {
      theme: 'dark',
    };
  }

  render() {
    const { theme } = this.state;

    console.log(this.state);

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout
          onToggleTheme={() => {
            this.setState(prevState => ({ theme: prevState.theme === 'dark' ? 'light' : 'dark' }));
          }}
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
