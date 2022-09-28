import { PureComponent } from 'react';

import { ImageSliderStyled } from 'components/ImageSlider/ImageSlider.styled';
import ImageSliderControls from 'components/ImageSlider/ImageSliderControls';

interface Props {
  imageSources: string[];
}

interface State {
  currentIndex: number;
  length: number;
}

export class ImageSlider extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentIndex: 0, length: props.imageSources.length };
  }

  private handleNext = () => {
    const { currentIndex, length } = this.state;
    const nextIndex = currentIndex + 1;

    return nextIndex < length
      ? this.setState({ currentIndex: nextIndex })
      : this.setState({ currentIndex: 0 });
  };

  private handlePrevious = () => {
    const { currentIndex, length } = this.state;
    const nextIndex = currentIndex - 1;

    return nextIndex < 0
      ? this.setState({ currentIndex: length - 1 })
      : this.setState({ currentIndex: nextIndex });
  };

  render() {
    const { imageSources } = this.props;
    const { currentIndex, length } = this.state;

    return (
      <ImageSliderStyled offset={currentIndex}>
        <div className="images">
          {imageSources.map(src => (
            <img key={src} src={src} alt="product" />
          ))}
        </div>
        {length > 1 && (
          <ImageSliderControls onNext={this.handleNext} onPrev={this.handlePrevious} />
        )}
      </ImageSliderStyled>
    );
  }
}
