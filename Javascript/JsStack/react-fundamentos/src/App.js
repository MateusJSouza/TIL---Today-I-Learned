import React from 'react';
import { Post } from './components/Post';

// Props -> propriedades
export function App() {
  return (
    <>
      <h1>JStack's Blog</h1>
      <h2>Posts da semana</h2>

      <Post title="Teste 1" subtitle="teste 1" />
      <Post title="Teste 2" subtitle="teste 2" />
      <Post title="Teste 3" subtitle="teste 3" />
      <Post title="Teste 4" subtitle="teste 4" />
    </>
  )
}
