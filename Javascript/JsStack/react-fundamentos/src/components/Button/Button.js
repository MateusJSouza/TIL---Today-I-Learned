import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export function Button(props) {
  const { theme } = useContext(ThemeContext)

  return (
    <button
      style={{
        color: theme === 'dark' ? '#fff' : '#000',
        background: theme === 'dark' ? '#000' : '#fff',
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}
