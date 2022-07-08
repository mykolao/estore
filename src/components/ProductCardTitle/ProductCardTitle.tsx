import { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import { ProductCardTitleStyled } from 'components/ProductCardTitle/ProductCardTitle.styled';
import { ProductCardTitleProps } from 'components/ProductCardTitle/types';
import { PATHS } from 'routes';

export class ProductCardTitle extends PureComponent<ProductCardTitleProps> {
  render() {
    const { brand, name, id, inStock } = this.props;
    const path = `${PATHS.product}/${id}`;

    return (
      <ProductCardTitleStyled inStock={inStock}>
        <Link to={path}>{`${brand} ${name}`}</Link>
      </ProductCardTitleStyled>
    );
  }
}
