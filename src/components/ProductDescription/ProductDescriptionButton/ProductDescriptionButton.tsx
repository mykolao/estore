import { PureComponent } from 'react';

import { TProduct } from 'apollo/types';
import Button from 'components/Button';
import { ProductDescriptionButtonStyled } from 'components/ProductDescription/ProductDescriptionButton/ProductDescriptionButton.styled';
import { withAddToCart, WithAddToCartDispatch } from 'store/cart/hoc/withAddToCart';

interface Props
  extends Pick<TProduct, 'inStock'>,
    Pick<WithAddToCartDispatch, 'addToCartWithSelectedAttributes'> {}

class Component extends PureComponent<Props> {
  private handleAddToCart = () => {
    const { addToCartWithSelectedAttributes } = this.props;
    addToCartWithSelectedAttributes();
  };

  render() {
    const { inStock } = this.props;

    return (
      <ProductDescriptionButtonStyled>
        {inStock ? (
          <Button onClick={this.handleAddToCart}>Add to cart</Button>
        ) : (
          <Button disabled>Out of Stock</Button>
        )}
      </ProductDescriptionButtonStyled>
    );
  }
}

export const ProductDescriptionButton = withAddToCart(Component);
