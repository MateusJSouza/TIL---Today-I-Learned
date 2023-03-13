import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import PostsList from '../PostsList';

export default function Layout({ onToggleTheme, selectedTheme }) {
  return (
    <>
      <Header
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
      <PostsList />
      <Footer
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
    </>
  );
}
