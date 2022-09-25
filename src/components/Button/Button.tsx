import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  text-transform: uppercase;
  padding: 16px 32px;

  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: ${({ theme: { cWhite } }) => cWhite};

  background-color: ${({ theme: { cPrimary } }) => cPrimary};

  &:disabled {
    background-color: ${({ theme: { cGrey } }) => cGrey};
  }
`;
