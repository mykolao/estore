import styled from 'styled-components';

export const ActionbarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 22px;

  @media (max-width: ${({ theme: { breakSmall } }) => breakSmall}) {
    gap: 11px;
  }
`;
