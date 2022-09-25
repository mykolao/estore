import styled from 'styled-components';

import { ImageOptionStyledProps } from 'components/ImageSelect/ImageOption/types';

export const ImageOptionStyled = styled.li<ImageOptionStyledProps>`
  border: 1px solid
    ${({ isSelected, theme: { cPrimary } }) => (isSelected ? cPrimary : '#fff')};

  cursor: pointer;
  border-radius: 4px;
  padding: 2px;

  display: flex;
  align-items: center;

  & img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: contain;
  }

  &:hover {
    border: 1px solid
      ${({ isSelected, theme: { cPrimary, cGrey } }) => (isSelected ? cPrimary : cGrey)};
  }
`;
