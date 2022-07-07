import styled, { CSSProperties } from 'styled-components';

export const CategoryTitle = styled.h2<Pick<CSSProperties, 'textTransform'>>`
  font-weight: 400;
  font-size: 42px;
  line-height: 160%;

  text-transform: ${({ textTransform }) => textTransform || 'capitalize'};

  margin-top: 80px;
`;
