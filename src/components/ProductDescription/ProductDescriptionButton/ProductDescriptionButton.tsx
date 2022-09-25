import { PureComponent } from 'react';

import { TProduct } from 'apollo/types';
import Button from 'components/Button';
import { ProductDescriptionButtonStyled } from 'components/ProductDescription/ProductDescriptionButton/ProductDescriptionButton.styled';

interface Props extends Pick<TProduct, 'inStock'> {}

export class ProductDescriptionButton extends PureComponent<Props> {
  render() {
    const { inStock } = this.props;

    return (
      <ProductDescriptionButtonStyled>
        {inStock ? <Button>Add to cart</Button> : <Button disabled>Out of Stock</Button>}
      </ProductDescriptionButtonStyled>
    );
  }
}
