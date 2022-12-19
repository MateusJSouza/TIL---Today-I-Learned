import PropTypes from "prop-types";
import React, { useContext } from "react";
import styled from 'styled-components';

import { ThemeContext } from "../../context/ThemeContext";
import { Button } from "../Button/Button";

const Title = styled.h1`
  color: #637bf3;
`;

export function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
      {props.children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's Blog`, // valor padrão da propriedade title, caso não seja passado nada
};
