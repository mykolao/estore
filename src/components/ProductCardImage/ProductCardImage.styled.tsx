import styled from 'styled-components';

export const ProductCardImageStyled = styled.div<{ inStock: boolean }>`
  position: relative;

  & button {
    position: absolute;
    bottom: -26px;
    right: 15px;
  }

  & a {
    & img {
      width: 100%;
      object-fit: contain;
      vertical-align: middle;
      aspect-ratio: 1;
    }
  }
`;
