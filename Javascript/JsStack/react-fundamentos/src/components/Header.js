import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import { Button } from './Button';
import { ThemeContext } from '../context/ThemeContext';

export function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>{props.title}</h1>
      <Button
        onClick={onToggleTheme}
      >
        Mudar tema
      </Button>
      {props.children}
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's Blog`, // valor padrão da propriedade title, caso não seja passado nada
};
