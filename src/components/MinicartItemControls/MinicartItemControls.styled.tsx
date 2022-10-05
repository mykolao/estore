import styled from 'styled-components';

export const MinicartItemControlsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  & button {
    height: 24px;
    width: 24px;

    background: none;
    border: 1px solid ${({ theme: { cBlack } }) => cBlack};
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: ${({ theme: { cBlack } }) => cBlack};

      color: ${({ theme: { cWhite } }) => cWhite};
    }
  }

  & span {
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
  }
`;
