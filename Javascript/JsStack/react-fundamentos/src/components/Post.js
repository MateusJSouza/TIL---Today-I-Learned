import React from 'react';
import PropTypes from 'prop-types'

export function Post(props) {
  return (
    <>
      <article>
        <strong>{props.post.title}</strong>
          <button
            onClick={() => props.onRemove(props.post.id)}
          >
            Remover
          </button>
        <br />
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
  onRemove: PropTypes.func.isRequired,
  // Tipando um objeto
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};
