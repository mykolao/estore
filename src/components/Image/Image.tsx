import { PureComponent } from 'react';

import { ImageStyled } from 'components/Image/Image.styled';

export class Image extends PureComponent<{ src: string; alt: string }> {
  render() {
    const { src, alt } = this.props;
    return <ImageStyled src={src} alt={alt} />;
  }
}
