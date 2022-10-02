import styled, { css } from 'styled-components';

interface Props {
  isSelected: boolean;
  isActive: boolean;
  value: string;
}

export const ColorAttributeOptionStyled = styled.div<Props>`
  width: 45px;
  height: 45px;
  padding: 2px;
  border: 2px solid ${({ theme: { cWhite } }) => cWhite};
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Source Sans Pro', 'sans-serif';
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.05em;

  .color-value {
    background-color: ${({ value }) => value};
    width: 100%;
    height: 100%;
    opacity: 0.6;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      border-color: ${({ theme: { cPrimary } }) => cPrimary};
    `}

  ${({ isActive }) =>
    isActive &&
    css`
      cursor: pointer;
      &:hover {
        border-color: ${({ theme: { cPrimary } }) => cPrimary};
      }
    `}
`;
