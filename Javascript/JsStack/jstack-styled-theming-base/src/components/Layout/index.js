import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import PostsList from '../PostsList';

export default function Layout({ onToggleTheme, selectedThemeIcon }) {
  return (
    <>
      <Header
        onToggleTheme={onToggleTheme}
        selectedThemeIcon={selectedThemeIcon}
      />
      <PostsList />
      <Footer
        onToggleTheme={onToggleTheme}
        selectedThemeIcon={selectedThemeIcon}
      />
    </>
  );
}
