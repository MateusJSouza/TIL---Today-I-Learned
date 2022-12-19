import PropTypes from 'prop-types';
import React from 'react';
import { PostHeader } from '../PostHeader/PostHeader';

export function Post(props) {
  if (props.post.read) {
    <h2>VAAAMOOO!</h2>
  }

  return (
    <>
      <article>
        <PostHeader
          onRemove={props.onRemove}
          post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read,
          }}
        />
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Média: {props.post.likes / 2}
      </article>
      <br />
    </>
  );
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
