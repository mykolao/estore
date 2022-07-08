import styled from 'styled-components';

import { AddToCartButtonProps } from 'components/AddToCartButton/types';

export const AddToCartButtonStyled = styled.button<
  Pick<AddToCartButtonProps, 'isDisplayed'>
>`
  visibility: ${({ isDisplayed }) => (isDisplayed ? 'visible' : 'hidden')};

  width: 52px;
  height: 52px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme: { cPrimary } }) => cPrimary};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    visibility: visible;
  }

  &img {
    width: 24px;
    height: 24px;
  }
`;
