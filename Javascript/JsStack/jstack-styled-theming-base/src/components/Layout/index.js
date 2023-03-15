import React from 'react';

import Header from '../Header';
import PostsLists from '../PostsList';
import Footer from '../Footer';

export default class Layout extends React.Component {
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  // Executa antes do componente sair da tela
  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  // EventListener de scroll
  handleScroll = () => {
    console.log('scrolled...')
  };

  render() {
    return (
      <>
        <Header />
        <PostsLists />
        <Footer />
      </>
    )
  }
}
