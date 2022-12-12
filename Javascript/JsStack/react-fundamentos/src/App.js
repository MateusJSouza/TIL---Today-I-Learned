import React from 'react';
import { Header } from './components/Header';
import { Post } from './components/Post';

const titleZeroOne = 'Título Zero UM'

// Props -> propriedades
export function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>
      <br />

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
