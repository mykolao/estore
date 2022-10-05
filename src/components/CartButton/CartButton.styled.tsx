import styled from 'styled-components';

export const CartButtonStyled = styled.div`
  position: relative;

  & button {
    display: flex;
    justify-content: center;

    cursor: pointer;

    padding: 4px;
    border-radius: 3px;

    outline: none;
    border: none;
    background: none;

    & img {
      width: 20px;
      height: 20px;
    }
  }
`;
