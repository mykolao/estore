import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  a, button, div, p, h1, h2, h3 {
    color: ${({ theme }) => theme.cBlack};
  }
  
  body {
    font-family: 'Raleway', sans-serif;
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
