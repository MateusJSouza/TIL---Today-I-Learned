import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import PostsList from '../PostsList';

export default function Layout() {
  return (
    <>
      <Header />
      <PostsList />
      <Footer />
    </>
  );
}
