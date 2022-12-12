import React from 'react';

export function Post(props) {
  return (
    <>
      <article>
        <strong>{props.post.title}</strong> <br />
        <small>{props.post.subtitle}</small>
      </article>
      <br />
    </>
  )
}
