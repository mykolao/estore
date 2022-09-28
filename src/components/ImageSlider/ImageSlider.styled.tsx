import styled from 'styled-components';

interface Props {
  offset: number;
}

export const ImageSliderStyled = styled.div<Props>`
  position: relative;
  max-height: 256px;
  width: 200px;
  display: flex;
  overflow: hidden;

  & .images {
    display: flex;

    width: 200px;
    margin: auto;

    transform: translateX(${props => `-${props.offset * 200}px`});

    transition: transform 0.33s cubic-bezier(0, 0.69, 0.4, 1.02);
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
