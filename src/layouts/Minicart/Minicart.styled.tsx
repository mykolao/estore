import styled from 'styled-components';

export const MinicartStyled = styled.div`
  & .backdrop {
    position: fixed;
    top: 80px;
    left: 0;
    background-color: ${({ theme: { cBackdrop } }) => cBackdrop};
    width: 100%;
    height: 100%;
  }

  & .minicart {
    position: absolute;
    right: 0;
    top: 54px;

    width: 325px;
    max-height: 677px;

    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 9px;
      background: none;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background-color: rgba(0, 0, 0, 0.11);

      &:hover {
        background-color: rgba(0, 0, 0, 0.22);
      }

      &:active {
        background-color: ${({ theme: { cBlack } }) => cBlack};
      }
    }

    background-color: ${({ theme: { cWhite } }) => cWhite};

    padding: 32px 16px;
  }
`;
