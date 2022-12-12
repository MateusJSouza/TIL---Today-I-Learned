import React from 'react';
import { Post } from './components/Post';

const titleZeroOne = 'Título Zero UM'

// Props -> propriedades
export function App() {
  return (
    <>
      <h1>JStack's Blog</h1>
      <h2>Posts da semana</h2>

      {/* Passando as propriedades no formato de objeto */}
      <Post
        post={{
          title: 'Título da notícia 01',
          subtitle: 'Subtítulo da notícia 01'
        }}
      />
    </>
  )
}
