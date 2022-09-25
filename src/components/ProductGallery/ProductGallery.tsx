import { PureComponent } from 'react';

import Image from 'components/Image';
import ImageSelect from 'components/ImageSelect';
import { ProductGalleryStyled } from 'components/ProductGallery/ProductGallery.styled';
import {
  ProductGalleryProps,
  ProductGalleryState,
} from 'components/ProductGallery/types';
import { withProductGallery } from 'store/product/hoc';

class ProductGalleryComponent extends PureComponent<
  ProductGalleryProps,
  ProductGalleryState
> {
  constructor(props: ProductGalleryProps) {
    super(props);
    this.state = { image: props.gallery[0] };
  }

  private handleImageSelect = (src: string) => {
    const { image: currentImage } = this.state;

    if (src !== currentImage) {
      this.setState({ image: src });
    }
  };

  render() {
    const { gallery } = this.props;
    const { image } = this.state;

    return (
      <ProductGalleryStyled>
        <ImageSelect
          images={gallery}
          selectedImage={image}
          onChange={this.handleImageSelect}
        />
        <Image src={image} alt="Product" />
      </ProductGalleryStyled>
    );
  }
}

export const ProductGallery = withProductGallery(ProductGalleryComponent);
