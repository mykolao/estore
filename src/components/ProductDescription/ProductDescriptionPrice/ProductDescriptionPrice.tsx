import { PureComponent } from 'react';

import { TPrice } from 'apollo/types';
import CurrentPrice from 'components/CurrentPrice';
import { ProductDescriptionPriceStyled } from 'components/ProductDescription/ProductDescriptionPrice/ProductDescriptionPrice.styled';

interface Props {
  prices: TPrice[];
}

export class ProductDescriptionPrice extends PureComponent<Props> {
  render() {
    const { prices } = this.props;

    return (
      <ProductDescriptionPriceStyled>
        <p className="label">price:</p>
        <p className="price">
          <CurrentPrice prices={prices} />
        </p>
      </ProductDescriptionPriceStyled>
    );
  }
}
