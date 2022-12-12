import React from 'react';
import PropTypes from 'prop-types'

export function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      {props.children}
    </>
  )
}

Header.PropTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
