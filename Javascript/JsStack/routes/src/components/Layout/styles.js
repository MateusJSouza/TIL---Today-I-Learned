import styled from "styled-components";

export const Nav = styled.nav`
  background: #000;
  margin-top: 16px;
  padding: 16px;
  border-radius: 4px;

  a {
    text-decoration: none;
    color: #fff;
    display: inline-block;

    /* Toda vez que tiver um "a" seguido por outro "a", aplica-se o margin-left */
    & + a {
      margin-left: 16px;
    }
  }
`;
