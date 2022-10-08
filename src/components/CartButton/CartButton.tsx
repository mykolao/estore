import { PureComponent } from 'react';

import cartIcon from 'assets/images/cart.svg';
import { CartButtonStyled } from 'components/CartButton/CartButton.styled';
import CartButtonBadge from 'components/CartButton/CartButtonBadge';
import Minicart from 'layouts/Minicart';
import { withMinicartActions, WithMinicartActions } from 'store/minicart/hoc';

interface Props extends Pick<WithMinicartActions, 'toggleActivateMinicart'> {}

class Component extends PureComponent<Props> {
  private handleMinicartActivation = () => {
    const { toggleActivateMinicart } = this.props;

    toggleActivateMinicart();
  };

  render() {
    return (
      <CartButtonStyled>
        <button type="button" onClick={this.handleMinicartActivation}>
          <CartButtonBadge />
          <img src={cartIcon} alt="cart" />
        </button>
        <Minicart />
      </CartButtonStyled>
    );
  }
}

export const CartButton = withMinicartActions(Component);
