import React from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Routes } from '../../Routes';
import { BrowserRouter, Link } from 'react-router-dom';
import { Nav } from './styles';

export function Layout() {

  return (
    <BrowserRouter>
      <Header />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/1231221">Post</Link>
      </Nav>
      <Routes />
      <Footer />
    </BrowserRouter>
  )
}
