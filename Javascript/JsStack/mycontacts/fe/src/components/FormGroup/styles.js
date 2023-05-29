import styled from 'styled-components';

export const Container = styled.div`
  /* Se eu tiver um form-group seguido de outro form-group, é aplicado o margin-top */
  & + & {
    margin-top: 16px;
  }
`;
