import { PureComponent } from 'react';

import minusIcon from 'assets/images/sign-minus.svg';
import plusIcon from 'assets/images/sign-plus.svg';
import { CartItemCountControlsStyled } from 'components/CartItemCountControls/CartItemCountControls.styled';
import {
  WithItemCountControls,
  withItemCountControls,
} from 'store/cart/hoc/withItemCountControls';

interface Props extends WithItemCountControls {
  itemId: string;
  numberOfItems: number;
}

class Component extends PureComponent<Props> {
  private handleIncrease = () => {
    const { increaseItemCount, itemId } = this.props;

    increaseItemCount(itemId);
  };

  private handleDecrease = () => {
    const { decreaseItemCount, itemId } = this.props;

    decreaseItemCount(itemId);
  };

  render() {
    const { numberOfItems } = this.props;

    return (
      <CartItemCountControlsStyled>
        <button type="button" onClick={this.handleIncrease}>
          <img src={plusIcon} alt="increment" />
        </button>
        <p className="quantity">{numberOfItems}</p>
        <button type="button" onClick={this.handleDecrease}>
          <img src={minusIcon} alt="decrement" />
        </button>
      </CartItemCountControlsStyled>
    );
  }
}
export const CartItemCountControls = withItemCountControls(Component);
