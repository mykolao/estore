import styled from 'styled-components';

export const ImageSelectStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 36px;
  list-style: none;

  @media (max-width: ${({ theme: { breakMedium } }) => breakMedium}) {
    flex-direction: row;
  }
`;
