import { PureComponent } from 'react';

import { TProduct } from 'apollo/types';
import { ProductDescriptionTitleStyled } from 'components/ProductDescription/ProductDescriptionTitle/ProductDescriptionTitle.styled';

interface Props extends Pick<TProduct, 'brand' | 'name'> {}

export class ProductDescriptionTitle extends PureComponent<Props> {
  render() {
    const { name, brand } = this.props;

    return (
      <ProductDescriptionTitleStyled>
        <h4>{brand}</h4>
        <p>{name}</p>
      </ProductDescriptionTitleStyled>
    );
  }
}
