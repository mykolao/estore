import styled from 'styled-components';

export const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;
  padding: 16px;

  &:hover {
    box-shadow: 0 4px 35px rgba(168, 172, 176, 0.19);
    //filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  }
`;
