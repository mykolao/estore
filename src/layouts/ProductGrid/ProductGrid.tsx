import { PureComponent } from 'react';

import ProductCard from 'layouts/ProductCard';
import { ProductGridStyled } from 'layouts/ProductGrid/ProductGrid.styled';
import { ProductGridProps } from 'layouts/ProductGrid/types';

export class ProductGrid extends PureComponent<ProductGridProps> {
  render() {
    const { products } = this.props;
    return (
      <ProductGridStyled>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGridStyled>
    );
  }
}
