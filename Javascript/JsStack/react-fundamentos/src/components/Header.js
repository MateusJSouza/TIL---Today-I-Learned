import React from 'react';

export function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      {props.children}
    </>
  )
}
