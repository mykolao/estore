import { PureComponent } from 'react';

import { MinicartItemStyled } from 'components/MinicartItem/MinicartItem.styled';
import MinicartItemControls from 'components/MinicartItemControls';
import MinicartItemDetails from 'components/MinicartItemDetails';
import { TCartItem } from 'store/cart';

interface Props {
  value: TCartItem;
}

export class MinicartItem extends PureComponent<Props> {
  render() {
    const {
      value: {
        product: { brand, name, prices, attributes, gallery },
        selectedAttributes,
        quantity,
        itemId,
      },
    } = this.props;

    const detailsProps = { selectedAttributes, attributes, brand, name, prices };
    const img = gallery[0];

    return (
      <MinicartItemStyled>
        <MinicartItemDetails {...detailsProps} />
        <div className="rightSection">
          <MinicartItemControls itemId={itemId} numberOfItems={quantity} />
          <img src={img} alt="product" />
        </div>
      </MinicartItemStyled>
    );
  }
}
