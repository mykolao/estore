import styled, { css } from 'styled-components';

interface Props {
  isHidden: boolean;
}

export const CartButtonBadgeStyled = styled.div<Props>`
  position: absolute;
  top: -6px;
  right: -6px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  padding: 3px;

  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme: { cWhite } }) => cWhite};
  background-color: ${({ theme: { cBlack } }) => cBlack};
  border-radius: 50%;

  ${({ isHidden }) =>
    isHidden &&
    css`
      visibility: hidden;
    `}
`;
