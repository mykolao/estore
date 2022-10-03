import styled from 'styled-components';

export const CartItemCountControlsStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & button {
    height: 45px;
    width: 45px;

    background: none;
    border: 1px solid ${({ theme: { cBlack } }) => cBlack};
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: ${({ theme: { cBlack } }) => cBlack};

      img {
        filter: invert(100%);
      }
    }
  }

  .quantity {
    font-weight: 500;
    font-size: 24px;
    line-height: 160%;
  }
`;
