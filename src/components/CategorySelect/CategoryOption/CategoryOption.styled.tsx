import styled, { css } from 'styled-components';

export const CategoryOptionStyled = styled.div<{ isSelected: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${({ theme: { cWhite } }) => cWhite};
  padding: 0 16px;

  @media (max-width: ${({ theme: { breakSmall } }) => breakSmall}) {
    padding: 0 8px;
  }

  ${({ isSelected }) =>
    isSelected
      ? css`
          border-bottom: 2px solid ${({ theme: { cPrimary } }) => cPrimary};
        `
      : css`
          &:hover {
            border-bottom: 2px solid ${({ theme: { cWhite } }) => cWhite};
          }
        `}

  & a {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: ${({ theme: { cBlack } }) => cBlack};

    text-transform: uppercase;

    ${({ isSelected }) =>
      isSelected
        ? css`
            font-weight: 600;
            color: ${({ theme: { cPrimary } }) => cPrimary};
          `
        : css`
          &:hover {
              color: ${({ theme: { cPrimary } }) => cPrimary};
            }
          }
        `}
  }
`;
