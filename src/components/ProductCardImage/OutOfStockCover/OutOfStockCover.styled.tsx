import styled from 'styled-components';

export const OutOfStockCoverStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.51);

  & a {
    font-weight: 400;
    font-size: 24px;
    line-height: 160%;
    text-transform: uppercase;
    color: ${({ theme: { cGrey } }) => cGrey};
  }
`;
