import React from 'react';
import PropTypes from 'prop-types'

export function Post(props) {
  return (
    <>
      <article>
        <strong>{props.post.title}</strong> <br />
        <small>{props.post.subtitle}</small>
      </article>
      <br />
      Média: {props.likes / 2}
    </>
  )
}

// Tipando as propriedades com o PropTypes
Post.propTypes = {
  likes: PropTypes.number.isRequired,
  // Tipando um objeto
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};
