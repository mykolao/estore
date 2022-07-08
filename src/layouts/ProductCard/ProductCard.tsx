import { PureComponent } from 'react';

import ProductCardImage from 'components/ProductCardImage';
import ProductCardPrice from 'components/ProductCardPrice';
import ProductCardTitle from 'components/ProductCardTitle';
import { ProductCardStyled } from 'layouts/ProductCard/ProductCard.styled';
import { ProductCardProps, ProductCardState } from 'layouts/ProductCard/types';

export class ProductCard extends PureComponent<ProductCardProps, ProductCardState> {
  constructor(props: ProductCardProps) {
    super(props);
    this.state = { isHovered: false };
  }

  toggleIsHovered = () => {
    const {
      product: { inStock },
    } = this.props;

    const { isHovered } = this.state;

    if (inStock) this.setState({ isHovered: !isHovered });
  };

  render() {
    const {
      product: { inStock, id, gallery, brand, name, prices },
    } = this.props;

    const { isHovered } = this.state;

    return (
      <ProductCardStyled
        inStock={inStock}
        onMouseEnter={this.toggleIsHovered}
        onMouseLeave={this.toggleIsHovered}
      >
        <ProductCardImage
          showAddToCartButton={inStock && isHovered}
          gallery={gallery}
          id={id}
          inStock={inStock}
        />
        <div>
          <ProductCardTitle brand={brand} id={id} name={name} inStock={inStock} />
          <ProductCardPrice inStock={inStock} prices={prices} id={id} />
        </div>
      </ProductCardStyled>
    );
  }
}
