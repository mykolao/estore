import { PureComponent } from 'react';

import CartDivider from 'components/CartDivider';
import { CartItemStyled } from 'components/CartItem/CartItem.styled';
import CartItemControls from 'components/CartItem/CartItemControls';
import CartItemInfo from 'components/CartItem/CartItemInfo';
import { TCartItem } from 'store/cart';

interface Props {
  value: TCartItem;
}

export class CartItem extends PureComponent<Props> {
  render() {
    const {
      value: {
        product: { brand, name, prices, attributes, gallery },
        selectedAttributes,
        quantity,
        itemId,
      },
    } = this.props;

    const cartItemInfoProps = { brand, name, prices, attributes, selectedAttributes };

    const cartItemControlsProps = { gallery, numberOfItems: quantity, itemId };

    return (
      <CartItemStyled>
        <CartDivider />
        <div className="content">
          <CartItemInfo {...cartItemInfoProps} />
          <CartItemControls {...cartItemControlsProps} />
        </div>
      </CartItemStyled>
    );
  }
}
