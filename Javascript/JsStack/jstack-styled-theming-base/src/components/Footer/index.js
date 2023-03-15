import React, { Component } from 'react';

import { Container } from './styles';

export default class Footer extends Component {

  render() {
    const { onToggleTheme, selectedTheme } = this.props;

    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button type="button" onClick={onToggleTheme}>
          { selectedTheme === 'dark' ? '🌞' : '🌚' }
        </button>
      </Container>
    );
  }
}

// export default function Footer() {
//   const { onToggleTheme, selectedThemeIcon } = useContext(ThemeContext);

//   return (
//     <Container>
//       <span>JStack's Blog. Todos os direitos reservados.</span>
//       <button type="button" onClick={onToggleTheme}>
//         { selectedThemeIcon === 'dark' ? '🌞' : '🌚' }
//       </button>
//     </Container>
//   );
// }
