import styled from 'styled-components';

export const HTMLParserStyled = styled.div`
  font-family: 'Roboto', sans-serif;

  span {
    font-size: 14px;
  }

  li::marker {
    color: ${({ theme: { cPrimary } }) => cPrimary};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 159.96%;
    padding-bottom: 9px;
  }

  h1 {
    font-weight: 700;
    font-size: 30px;
    line-height: 27px;
    padding-bottom: 12px;
  }

  h3 {
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    padding-bottom: 9px;
  }
`;
