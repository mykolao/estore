import { PureComponent } from 'react';

import { TProduct } from 'apollo/types';
import HTMLParser from 'components/HTMLParser';
import { ProductDescriptionInfoStyled } from 'components/ProductDescription/ProductDescriptionInfo/ProductDescriptionInfo.styled';

interface Props extends Pick<TProduct, 'description'> {}

export class ProductDescriptionInfo extends PureComponent<Props> {
  render() {
    const { description } = this.props;

    return (
      <ProductDescriptionInfoStyled>
        <HTMLParser value={description} />
      </ProductDescriptionInfoStyled>
    );
  }
}
