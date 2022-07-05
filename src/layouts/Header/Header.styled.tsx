import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 10;
  height: ${({ theme: { hHeader } }) => hHeader};
  width: 100vw;

  & .wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    width: ${({ theme: { wApp } }) => wApp};
    padding: 0 12px;
  }
`;
