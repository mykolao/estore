import styled from 'styled-components';

export const CartItemControlsStyled = styled.div`
  display: flex;
  gap: 24px;
  max-height: 290px;

  @media (max-width: ${({ theme: { breakMedium } }) => breakMedium}) {
    gap: 8px;
    flex-direction: column-reverse;
  }
`;
