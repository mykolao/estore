import styled from 'styled-components';

export const ProductDetailsStyled = styled.div`
  margin-top: 64px;
  display: grid;
  gap: 100px;
  grid-template-columns: 70fr 30fr;

  @media (max-width: ${({ theme: { breakMedium } }) => breakMedium}) {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin: 0 32px;
  }
`;
