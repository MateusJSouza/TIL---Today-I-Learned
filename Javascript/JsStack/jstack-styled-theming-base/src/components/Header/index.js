import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

export default function Header() {
  const { onToggleTheme, selectedThemeIcon } = useContext(ThemeContext)

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={onToggleTheme}>
        { selectedThemeIcon === 'dark' ? '🌞' : '🌚' }
      </button>
    </Container>
  );
}
