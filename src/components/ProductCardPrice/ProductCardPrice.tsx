import { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import CurrentPrice from 'components/CurrentPrice';
import { ProductCardPriceStyled } from 'components/ProductCardPrice/ProductCardPrice.styled';
import { ProductCardPriceProps } from 'components/ProductCardPrice/types';
import { PATHS } from 'routes';

export class ProductCardPrice extends PureComponent<ProductCardPriceProps> {
  render() {
    const { id, inStock, prices } = this.props;
    const path = `${PATHS.product}/${id}`;

    return (
      <ProductCardPriceStyled inStock={inStock}>
        <Link to={path}>
          <CurrentPrice prices={prices} />
        </Link>
      </ProductCardPriceStyled>
    );
  }
}
