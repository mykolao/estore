import styled from 'styled-components';

export const ProductGalleryStyled = styled.section`
  display: grid;
  gap: 40px;
  grid-template-columns: 12fr 88fr;

  @media (max-width: ${({ theme: { breakMedium } }) => breakMedium}) {
    display: flex;
    gap: 18px;
    flex-direction: column-reverse;
  }
`;
