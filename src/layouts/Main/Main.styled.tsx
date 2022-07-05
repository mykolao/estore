import styled from 'styled-components';

export const MainStyled = styled.main`
  display: flex;
  justify-content: center;
  z-index: 0;
  flex: 1;
  margin-top: ${({ theme: { hHeader } }) => hHeader};
`;
