import React from 'react';

import { Container } from './styles';

export default function Header({ onToggleTheme, selectedThemeIcon }) {
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={onToggleTheme}>
        { selectedThemeIcon === 'dark' ? '🌞' : '🌚' }
      </button>
    </Container>
  );
}
