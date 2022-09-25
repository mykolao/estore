import { PureComponent } from 'react';

import { ImageOptionStyled } from 'components/ImageSelect/ImageOption/ImageOption.styled';
import { ImageOptionProps } from 'components/ImageSelect/ImageOption/types';

export class ImageOption extends PureComponent<ImageOptionProps> {
  handleClick = () => {
    const { isSelected, onClick, image } = this.props;
    if (!isSelected) {
      onClick(image);
    }
  };

  render() {
    const { image, isSelected } = this.props;

    return (
      <ImageOptionStyled isSelected={isSelected} onClick={this.handleClick}>
        <img src={image} alt="Option" />
      </ImageOptionStyled>
    );
  }
}
