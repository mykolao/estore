import { PureComponent } from 'react';

import { TAttributeSet, TProduct } from 'apollo/types';
import CurrentPrice from 'components/CurrentPrice';
import MinicartAttributes from 'components/MinicartItemDetails/MinicartAttributes';
import { MinicartItemDetailsStyled } from 'components/MinicartItemDetails/MinicartItemDetails.styled';

interface Props extends Pick<TProduct, 'brand' | 'name' | 'prices' | 'attributes'> {
  selectedAttributes: TAttributeSet[];
}

export class MinicartItemDetails extends PureComponent<Props> {
  render() {
    const { brand, name, prices, attributes, selectedAttributes } = this.props;

    return (
      <MinicartItemDetailsStyled>
        <div className="title">
          {brand}
          <br />
          {name}
        </div>
        <div className="price">
          <CurrentPrice prices={prices} />
        </div>
        <MinicartAttributes
          attributes={attributes}
          selectedAttributes={selectedAttributes}
        />
      </MinicartItemDetailsStyled>
    );
  }
}
