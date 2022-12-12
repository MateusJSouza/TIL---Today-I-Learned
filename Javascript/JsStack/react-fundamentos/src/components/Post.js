import React from 'react';

export function Post(props) {
  return (
    <>
      <article>
        <strong>{props.title}</strong> <br />
        <small>{props.subtitle}</small>
      </article>
      <br />
    </>
  )
}
