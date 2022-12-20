import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

export default function Footer() {
  const { onToggleTheme, selectedThemeIcon } = useContext(ThemeContext);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={onToggleTheme}>
        { selectedThemeIcon === 'dark' ? '🌞' : '🌚' }
      </button>
    </Container>
  );
}
