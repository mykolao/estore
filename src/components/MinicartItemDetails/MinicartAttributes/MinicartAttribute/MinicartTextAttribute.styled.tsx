import styled, { css } from 'styled-components';

interface Props {
  isSelected: boolean;
}

export const MinicartTextAttributeStyled = styled.div<Props>`
  border: 1px solid ${({ theme: { cBlack } }) => cBlack};
  height: 24px;
  min-width: 24px;
  text-align: center;

  font-size: 14px;
  line-height: 160%;
  padding: 0 3px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${({ theme: { cBlack } }) => cBlack};
      color: ${({ theme: { cWhite } }) => cWhite};
    `}
`;
