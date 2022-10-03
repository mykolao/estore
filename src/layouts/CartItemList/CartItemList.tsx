import { PureComponent } from 'react';

import CartItem from 'components/CartItem';
import { CartItemListStyled } from 'layouts/CartItemList/CartItemList.styled';
import { withCartItems, WithCartItemsState } from 'store/cart/hoc';

export class Component extends PureComponent<WithCartItemsState> {
  render() {
    const { items } = this.props;

    return (
      <CartItemListStyled>
        {items.map(item => (
          <CartItem key={item.itemId} value={item} />
        ))}
      </CartItemListStyled>
    );
  }
}

export const CartItemList = withCartItems(Component);
