import React from 'react';
import PropTypes from 'prop-types'

export function Post(props) {
  if (props.post.read) {
    <h2>VAAAMOOO!</h2>
  }

  return (
    <>
      { props.post.read ? <h2>{props.post.title} já foi lido</h2>
        :
        <>
          <article>
            <strong>
              {props.post.read ? <s>{props.post.title}</s> : props.post.title}
            </strong>
            <button
              onClick={() => props.onRemove(props.post.id)}
            >
              Remover
            </button>
            <br />
            {/* && -> short circuit evaluation */}
            <small>{props.post.read && <s>{props.post.subtitle}</s>}</small>
            <small>{!props.post.read && <s>{props.post.subtitle}</s>}</small>
          </article>
          <br />
          Média: {props.post.likes / 2}
        </>
      }
    </>
  )
}

// Tipando as propriedades com o PropTypes
Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  // Tipando um objeto
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};
