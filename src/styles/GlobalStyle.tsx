import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Raleway', sans-serif;
    color: ${({ theme }) => theme.cBlack};
  }
  
  a {
    text-decoration: none;
    cursor: pointer;
  }
  
  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
