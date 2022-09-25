import styled, { css } from 'styled-components';

interface Props {
  isSelected: boolean;
  isActive: boolean;
}

export const TextAttributeOptionStyled = styled.div<Props>`
  width: 63px;
  height: 45px;
  border: 2px solid ${({ theme: { cBlack } }) => cBlack};
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Source Sans Pro', 'sans-serif';
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.05em;

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: ${({ theme: { cWhite } }) => cWhite};
      background-color: ${({ theme: { cBlack } }) => cBlack};
    `}

  ${({ isActive }) =>
    isActive &&
    css`
      cursor: pointer;
      &:hover {
        background-color: ${({ theme: { cBlack } }) => cBlack};
        color: ${({ theme: { cWhite } }) => cWhite};
      }
    `}
`;
