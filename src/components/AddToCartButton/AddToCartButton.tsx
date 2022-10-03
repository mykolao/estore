import { PureComponent } from 'react';

import cartImage from 'assets/images/cart-white.svg';
import { AddToCartButtonStyled } from 'components/AddToCartButton/AddToCartButton.styled';
import { AddToCartButtonProps } from 'components/AddToCartButton/types';
import { withAddToCart } from 'store/cart/hoc/withAddToCart';

export class Component extends PureComponent<AddToCartButtonProps> {
  handleAddToCart = () => {
    const { id, addToCartById } = this.props;
    addToCartById(id);
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

export const AddToCartButton = withAddToCart(Component);
