import { PureComponent } from 'react';

import ProductDescription from 'components/ProductDescription';
import ProductGallery from 'components/ProductGallery';
import Main from 'layouts/Main';
import { ProductDetailsStyled } from 'layouts/ProductDetails/ProductDetails.styled';

export class ProductDetails extends PureComponent {
  render() {
    return (
      <Main>
        <ProductDetailsStyled>
          <ProductGallery />
          <ProductDescription />
        </ProductDetailsStyled>
      </Main>
    );
  }
}
