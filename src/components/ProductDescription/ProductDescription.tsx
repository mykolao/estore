import { PureComponent } from 'react';

import { ProductDescriptionStyled } from 'components/ProductDescription/ProductDescription.styled';
import { ProductDescriptionAttributes } from 'components/ProductDescription/ProductDescriptionAttributes';
import ProductDescriptionButton from 'components/ProductDescription/ProductDescriptionButton';
import ProductDescriptionInfo from 'components/ProductDescription/ProductDescriptionInfo';
import ProductDescriptionPrice from 'components/ProductDescription/ProductDescriptionPrice';
import ProductDescriptionTitle from 'components/ProductDescription/ProductDescriptionTitle';
import { ProductDescriptionProps } from 'components/ProductDescription/types';
import { withProductDescription } from 'store/product/hoc';

class ProductDescriptionComponent extends PureComponent<ProductDescriptionProps> {
  render() {
    const { brand, name, prices, inStock, description } = this.props;

    return (
      <ProductDescriptionStyled>
        <ProductDescriptionTitle brand={brand} name={name} />
        <ProductDescriptionAttributes />
        <ProductDescriptionPrice prices={prices} />
        <ProductDescriptionButton inStock={inStock} />
        <ProductDescriptionInfo description={description} />
      </ProductDescriptionStyled>
    );
  }
}

export const ProductDescription = withProductDescription(ProductDescriptionComponent);
