import styled, { css } from 'styled-components';

export const ProductCardStyled = styled.div<{ inStock: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;
  padding: 16px;

  &:hover {
    ${({ inStock }) =>
      inStock
        ? css`
            box-shadow: 0 4px 35px rgba(168, 172, 176, 0.19);
          `
        : `none`};
    filter: ${({ inStock }) =>
      inStock
        ? css`
            filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
          `
        : `none`};
  }
`;
