import styled, { css } from 'styled-components';

import { CurrencyArrowProps } from 'components/CurrencySelect/CurrencyArrow/types';

export const CurrencyArrowStyled = styled.img<CurrencyArrowProps>`
  transition: transform 0.3s ease-in-out;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: rotate(180deg);
    `};
`;
