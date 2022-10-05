import styled from 'styled-components';

export const CheckoutPlaceholder = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  & h2 {
    color: ${({ theme: { cPrimary } }) => cPrimary};
  }
`;
