import React, { useContext } from 'react';
import { ThemeContextClass } from '../../contexts/ThemeContextClass';

import { Container } from './styles';

export default function Footer() {
  const { theme, handleToggleTheme } = useContext(ThemeContextClass);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={handleToggleTheme}>
        { theme === 'dark' ? '🌞' : '🌚' }
      </button>
    </Container>
  );
}
