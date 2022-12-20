import styled, { css } from "styled-components";

export const Container = styled.article`
  margin-bottom: 24px;

  /* opacity: ${(props) => props.removed ? 0.5 : 1};
  color: ${(props) => props.removed ? '#f00' : '#fff'}; */

  /* Retornando vários CSS dentro de uma expressão Javascript */
  ${(props) => css`
    color: ${props.removed ? '#f00' : '#fff'};
    opacity: ${props.removed ? 0.5 : 1};
  `}
`;

export const Subtitle = styled.small`
  display: block;
`;

export const Rate = styled.span`
  font-size: 10px;
  opacity: 0.7;
`;
