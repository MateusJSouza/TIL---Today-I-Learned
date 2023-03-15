import React from 'react';

import Header from '../Header';
import PostsLists from '../PostsList';
import Footer from '../Footer';

export default class Layout extends React.Component {
  componentDidMount() {
    console.log('componente montou...')
    document.addEventListener('scroll', this.handleScroll);
  }

  // Executa antes do componente sair da tela
  componentWillUnmount() {
    console.log('componente vai desmontar...');
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
