import { PureComponent } from 'react';

import caretLeft from 'assets/images/carret-left.svg';
import { ImageSliderControlsStyled } from 'components/ImageSlider/ImageSliderControls/ImageSliderControls.styled';

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export class ImageSliderControls extends PureComponent<Props> {
  render() {
    const { onPrev, onNext } = this.props;

    return (
      <ImageSliderControlsStyled>
        <button type="button" className="btn-left" onClick={onPrev}>
          <img src={caretLeft} alt="previous" className="left" />
        </button>
        <button type="button" className="btn-right" onClick={onNext}>
          <img src={caretLeft} alt="previous" className="right" />
        </button>
      </ImageSliderControlsStyled>
    );
  }
}
