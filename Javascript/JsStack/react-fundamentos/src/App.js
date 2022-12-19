import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';

import { ThemeProvider } from './context/ThemeContext';

import styles from './App.css';

// Props -> propriedades
export function App() {

  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: true},
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: false},
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50, read: true},
    { id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', likes: 80, read: false},
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
    setPosts((prevState) => (
      // Mantém os posts que possuem o ID diferente do ID que estou deletando
      prevState.filter(post => post.id !== postId)
    ));
  }

  return (
    <ThemeProvider>
      <Header>
        <h2 className={styles.title}>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
          <button onClick={() => {setPosts([])}}>Limpar</button>
        </h2>
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
