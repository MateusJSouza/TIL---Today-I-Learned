import React from 'react';
import { Header } from './components/Header';
import { Post } from './components/Post';

const titleZeroOne = 'Título Zero UM'

// Props -> propriedades
export function App() {
  return (
    <>
      <Header title="Blog do JStack">
        <h2>Posts da semana</h2>
      </Header>
      <br />

      {/* Passando as propriedades no formato de objeto */}
      <Post
        likes={20}
        post={{
          title: 'Título da notícia 01',
          subtitle: 'Subtítulo da notícia 01'
        }}
      />

      <Post
        likes={10}
        post={{
          title: 'Título da notícia 02',
          subtitle: 'Subtítulo da notícia 02'
        }}
      />

      <Post
        likes={50}
        post={{
          title: 'Título da notícia 03',
          subtitle: 'Subtítulo da notícia 03'
        }}
      />
    </>
  )
}
