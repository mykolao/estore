import { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import AddToCartButton from 'components/AddToCartButton';
import OutOfStockCover from 'components/ProductCardImage/OutOfStockCover';
import { ProductCardImageStyled } from 'components/ProductCardImage/ProductCardImage.styled';
import { ProductCardImageProps } from 'components/ProductCardImage/types';
import { PATHS } from 'routes';

export class ProductCardImage extends PureComponent<ProductCardImageProps> {
  render() {
    const { id, inStock, gallery, showAddToCartButton } = this.props;
    const path = `${PATHS.product}/${id}`;
    const imageSrc = gallery[0];

    return (
      <ProductCardImageStyled inStock={inStock}>
        {!inStock && <OutOfStockCover path={path} />}
        <Link to={path}>
          <img src={imageSrc} alt="product" />
        </Link>
        <AddToCartButton id={id} isDisplayed={showAddToCartButton} />
      </ProductCardImageStyled>
    );
  }
}
