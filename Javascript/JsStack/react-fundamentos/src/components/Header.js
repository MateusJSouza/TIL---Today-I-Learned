import React from 'react';
import PropTypes from 'prop-types'
import { Button } from './Button';

export function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <Button
        theme={props.theme}
        onClick={props.onToggleTheme}
      >
        Mudar tema
      </Button>
      {props.children}
    </>
  )
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's Blog`, // valor padrão da propriedade title, caso não seja passado nada
};
