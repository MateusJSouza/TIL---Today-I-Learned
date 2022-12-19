import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '../Button/Button';

export function PostHeader(props) {
  return (
    <>
      <strong>
        {props.post.read && <s>{props.post.title}</s>}
        {!props.post.read && <s>{props.post.title}</s>}
      </strong>
      <Button
        onClick={() => props.onRemove(props.post.id)}>
        Remover
      </Button>
    </>
  );
}

PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  // Tipando um objeto
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};
