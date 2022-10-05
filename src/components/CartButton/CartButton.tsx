import { PureComponent } from 'react';

import cartIcon from 'assets/images/cart.svg';
import { CartButtonStyled } from 'components/CartButton/CartButton.styled';
import CartButtonBadge from 'components/CartButton/CartButtonBadge';
import Minicart from 'layouts/Minicart';

interface State {
  isActive: boolean;
}

export class CartButton extends PureComponent<Readonly<{}>, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  private handleActivate = () => {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
  };

  private handleDeactivate = () => {
    this.setState({ isActive: false });
  };

  render() {
    const { isActive } = this.state;

    return (
      <CartButtonStyled>
        <button type="button" onClick={this.handleActivate}>
          <CartButtonBadge />
          <img src={cartIcon} alt="cart" />
        </button>
        {isActive && <Minicart onHide={this.handleDeactivate} />}
      </CartButtonStyled>
    );
  }
}
