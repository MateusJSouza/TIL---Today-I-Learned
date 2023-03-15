import React from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';
import { ThemeContextClass, ThemeProvider } from './contexts/ThemeContextClass';

export default class App extends React.Component {
  state = {
    changed: false,
  };

  // Executa na primeira vez em que o componente é montado/executado
  componentDidMount() {
    console.log('componentDidMount executed');
  }

  // Método executado toda vez que o componente for atualizado
  componentDidUpdate(prevProps, prevState) {
    console.log({
      currentState: this.state,
      prevState,
      prevProps
    })
  }

  render() {
    console.log('rendered');

    return (
      <ThemeProvider>
        <button onClick={() => this.setState({ changed: true })}>Change state</button>
        <ThemeContextClass.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContextClass.Consumer>
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
