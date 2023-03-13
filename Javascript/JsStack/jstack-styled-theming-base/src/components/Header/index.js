import React, { Component } from 'react';

import { Container } from './styles';

export default class Header extends Component {
  render() {
    const { onToggleTheme, selectedThemeIcon } = this.props;

    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button type="button" onClick={onToggleTheme}>
          { selectedThemeIcon === 'dark' ? '🌞' : '🌚' }
        </button>
      </Container>
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
