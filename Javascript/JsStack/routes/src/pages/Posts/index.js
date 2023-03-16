import React from 'react';

import { Container } from './styles';
import Post from './Post';

import posts from './posts';

export function Posts() {

  return (
    <Container>
      {posts.map(post => {
        console.log(post)
        return (
          <Post
            key={post.id}
            title={post.title}
            description={post.description}
          />
        )
      })}
    </Container>
  )
}
