import styled from 'styled-components';

export const ProductGridStyled = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 100px 40px;

  @media (max-width: ${({ theme: { breakMedium } }) => breakMedium}) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 32px;
  }
`;
