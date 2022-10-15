import styled from 'styled-components';

export const ProductGalleryStyled = styled.section`
  display: grid;
  gap: 40px;
  grid-template-columns: 12fr 88fr;

  & div {
    & div {
      position: relative;

      & p {
        position: absolute;
        top: 0;

        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 32px;
        line-height: 160%;

        text-transform: uppercase;
        color: ${({ theme: { cGrey } }) => cGrey};
        background-color: rgba(255, 255, 255, 0.51);
      }
    }
  }

  @media (max-width: ${({ theme: { breakMedium } }) => breakMedium}) {
    display: flex;
    gap: 18px;
    flex-direction: column-reverse;
  }
`;
