import React, { useState } from 'react';

import { Header } from '../Header/index';
import { Post } from '../Post/index';

import { ThemeProvider } from '../../context/ThemeContext';

import { Title } from './styles';

// Props -> propriedades
export function App() {

  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: true, removed: false },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: false, removed: false },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50, read: true, removed: false },
    { id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', likes: 80, read: false, removed: false },
  ]);

  function handleRefresh() {
    // Mantendo os posts e adicionando os novos em cada atualização
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 50
      }
    ])
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.map(
      post => (
        post.id === postId
          ? { ...post, removed: true }
          : post
      )
    ));
  }

  return (
    <ThemeProvider>
      <Header>
        <Title as="h2">
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
          <button onClick={() => {setPosts([])}}>Limpar</button>
        </Title>
      </Header>
      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
  )
}
