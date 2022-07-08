import styled from 'styled-components';

export const ProductCardTitleStyled = styled.div<{ inStock: boolean }>`
  & a {
    font-weight: 300;
    font-size: 18px;
    line-height: 160%;
    color: ${({ inStock, theme: { cBlack, cGrey } }) => (inStock ? cBlack : cGrey)};

    &:hover {
      text-decoration: underline;
    }
  }
`;
