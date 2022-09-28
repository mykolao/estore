import styled from 'styled-components';

export const ImageSliderControlsStyled = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;

  display: flex;
  gap: 8px;

  & button {
    width: 24px;
    height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;

    background-color: #000;
    opacity: 0.65;
    transition: opacity 0.15s ease-out;

    cursor: pointer;

    &:hover {
      opacity: 1;
    }

    & img {
      padding: 0 2px 0 0;
      object-fit: scale-down;
    }

    & .right {
      transform: rotate(180deg);
      padding: 0 2px 0 0;
    }
`;
