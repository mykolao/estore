import styled from 'styled-components';

export const MinicartNavStyled = styled.nav`
  display: flex;
  padding-top: 32px;
  gap: 12px;

  & a {
    width: 100%;
    text-align: center;

    font-weight: 600;
    font-size: 14px;
    line-height: 120%;

    text-transform: uppercase;

    padding: 16px 0;
  }

  & .bag {
    border: 1px solid ${({ theme: { cBlack } }) => cBlack};

    &:hover {
      color: ${({ theme: { cWhite } }) => cWhite};
      background-color: ${({ theme: { cBlack } }) => cBlack};
    }
  }

  & .checkout {
    color: ${({ theme: { cWhite } }) => cWhite};
    background-color: ${({ theme: { cPrimary } }) => cPrimary};
    border: 1px solid ${({ theme: { cPrimary } }) => cPrimary};

    &:hover {
      color: ${({ theme: { cPrimary } }) => cPrimary};
      background-color: ${({ theme: { cWhite } }) => cWhite};
    }
  }
`;
