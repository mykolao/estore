import { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import { MinicartItemStyled } from 'components/MinicartItem/MinicartItem.styled';
import MinicartItemControls from 'components/MinicartItemControls';
import MinicartItemDetails from 'components/MinicartItemDetails';
import { PATHS } from 'routes';
import { TCartItem } from 'store/cart';

interface Props {
  value: TCartItem;
}

const { product } = PATHS;

export class MinicartItem extends PureComponent<Props> {
  render() {
    const {
      value: {
        product: { brand, name, prices, attributes, gallery, id },
        selectedAttributes,
        quantity,
        itemId,
      },
    } = this.props;

    const detailsProps = { selectedAttributes, attributes, brand, name, prices, id };
    const img = gallery[0];

    const path = `${product}/${id}`;

    return (
      <MinicartItemStyled>
        <MinicartItemDetails {...detailsProps} />
        <div className="rightSection">
          <MinicartItemControls itemId={itemId} numberOfItems={quantity} />
          <Link to={path}>
            <img src={img} alt="product" />
          </Link>
        </div>
      </MinicartItemStyled>
    );
  }
}
