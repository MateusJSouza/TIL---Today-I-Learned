import React, { Component } from 'react';

import { Container } from './styles';
import { ThemeContextClass } from '../../contexts/ThemeContextClass';

export default class Header extends Component {
  render() {
    return (
      <ThemeContextClass.Consumer>
        {({ theme, handleToggleTheme }) => (
          <Container>
            <h1>JStack's Blog</h1>
            <button type="button" onClick={handleToggleTheme}>
              { theme === 'dark' ? '🌞' : '🌚' }
            </button>
          </Container>
        )}
      </ThemeContextClass.Consumer>
    );
  }
}

// export default function Header() {
//   const { onToggleTheme, selectedThemeIcon } = useContext(ThemeContext)

  // return (
  //   <Container>
  //     <h1>JStack's Blog</h1>
  //     <button type="button" onClick={onToggleTheme}>
  //       { selectedThemeIcon === 'dark' ? '🌞' : '🌚' }
  //     </button>
  //   </Container>
  // );
// }
