import styled from 'styled-components';

export const ProductCardPriceStyled = styled.div<{ inStock: boolean }>`
  & a {
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    color: ${({ inStock, theme: { cBlack, cGrey } }) => (inStock ? cBlack : cGrey)};

    &:hover {
      text-decoration: underline;
    }
  }
`;
