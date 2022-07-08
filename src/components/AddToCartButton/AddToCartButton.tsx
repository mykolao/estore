import { PureComponent } from 'react';

import cartImage from 'assets/images/cart-white.svg';
import { AddToCartButtonStyled } from 'components/AddToCartButton/AddToCartButton.styled';
import { AddToCartButtonProps } from 'components/AddToCartButton/types';

export class AddToCartButton extends PureComponent<AddToCartButtonProps> {
  handleAddToCart = () => {
    const { id } = this.props;
    // eslint-disable-next-line no-console
    console.log(`Adding ${id} to the cart.`);
  };

  render() {
    const { isDisplayed } = this.props;

    return (
      <AddToCartButtonStyled onClick={this.handleAddToCart} isDisplayed={isDisplayed}>
        <img src={cartImage} alt="add to cart" />
      </AddToCartButtonStyled>
    );
  }
}
