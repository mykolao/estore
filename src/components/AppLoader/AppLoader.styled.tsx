import styled from 'styled-components';

export const AppLoaderStyled = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;

  img {
    width: 64px;
    height: 64px;
  }

  .error {
    color: #ee023e;
    padding: 0;
  }

  h2 {
    padding-left: 17px;
    color: ${({ theme: { cPrimary } }) => cPrimary};
    letter-spacing: 0.12rem;

    @keyframes fade {
      0% {
        opacity: 0;
      }

      33% {
        opacity: 1;
      }

      66% {
        opacity: 0;
      }

      100% {
        opacity: 0;
      }
    }

    span {
      opacity: 0;
    }

    .first {
      animation: fade;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    .second {
      animation: fade;
      animation-duration: 2s;
      animation-delay: 0.33s;
      animation-iteration-count: infinite;
    }

    .third {
      animation: fade;
      animation-duration: 2s;
      animation-delay: 0.66s;
      animation-iteration-count: infinite;
    }
  }
`;
