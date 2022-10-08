import { PureComponent } from 'react';

import ImageOption from 'components/ImageSelect/ImageOption';
import { ImageSelectStyled } from 'components/ImageSelect/ImageSelect.styled';
import { ImageSelectProps } from 'components/ImageSelect/types';

export class ImageSelect extends PureComponent<ImageSelectProps> {
  handleChange = (value: string) => {
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const { images, selectedImage } = this.props;

    return (
      <ImageSelectStyled>
        {images.length > 1 &&
          images.map(img => (
            <ImageOption
              key={img}
              image={img}
              isSelected={img === selectedImage}
              onClick={this.handleChange}
            />
          ))}
      </ImageSelectStyled>
    );
  }
}
