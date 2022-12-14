import React from 'react';
import { Header } from './components/Header';
import { Post } from './components/Post';

const posts = [
  { title: 'Title#01', subtitle: 'Sub#01', likes: 20},
  { title: 'Title#02', subtitle: 'Sub#02', likes: 10},
  { title: 'Title#03', subtitle: 'Sub#03', likes: 50},
  { title: 'Title#04', subtitle: 'Sub#04', likes: 80},
]

// Props -> propriedades
export function App() {
  return (
    <>
      <Header title="Blog do JStack">
        <h2>Posts da semana</h2>
      </Header>
      <hr />

      {posts.map(post => (
        <Post
          key={post.title}
          post={{
            title: post.title,
            subtitle: post.subtitle
          }}
          likes={post.likes}
        />
      ))}
    </>
  )
}
