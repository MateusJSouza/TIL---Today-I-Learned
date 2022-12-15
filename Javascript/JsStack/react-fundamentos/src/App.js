import React, { useState } from 'react';

import { Header } from './components/Header';
import { Post } from './components/Post';

// Props -> propriedades
export function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20},
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10},
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50},
    { id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', likes: 80},
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
    <>
      <Header title="Blog do JStack">
        <h2>
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
          post={{
            id: post.id,
            title: post.title,
            subtitle: post.subtitle
          }}
          likes={post.likes}
        />
      ))}
    </>
  )
}
