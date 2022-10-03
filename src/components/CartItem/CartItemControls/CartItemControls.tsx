import { PureComponent } from 'react';

import { CartItemControlsStyled } from 'components/CartItem/CartItemControls/CartItemControls.styled';
import CartItemCountControls from 'components/CartItemCountControls';
import ImageSlider from 'components/ImageSlider';

interface Props {
  gallery: string[];
  numberOfItems: number;
  itemId: string;
}

export class CartItemControls extends PureComponent<Props> {
  render() {
    const { gallery, numberOfItems, itemId } = this.props;

    return (
      <CartItemControlsStyled>
        <CartItemCountControls numberOfItems={numberOfItems} itemId={itemId} />
        <ImageSlider imageSources={gallery} />
      </CartItemControlsStyled>
    );
  }
}
