import { PureComponent } from 'react';

import { Link } from 'react-router-dom';

import { MinicartItemStyled } from 'components/MinicartItem/MinicartItem.styled';
import MinicartItemControls from 'components/MinicartItemControls';
import MinicartItemDetails from 'components/MinicartItemDetails';
import { PATHS } from 'routes';
import { TCartItem } from 'store/cart';
import { WithMinicartActions, withMinicartActions } from 'store/minicart/hoc';

interface Props extends Pick<WithMinicartActions, 'closeMinicart'> {
  value: TCartItem;
}

const { product } = PATHS;

class Component extends PureComponent<Props> {
  private handleMinicartClose = () => {
    const { closeMinicart } = this.props;

    closeMinicart();
  };

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
        <MinicartItemDetails {...detailsProps} onClick={this.handleMinicartClose} />
        <div className="rightSection">
          <MinicartItemControls itemId={itemId} numberOfItems={quantity} />
          <Link to={path} onClick={this.handleMinicartClose}>
            <img src={img} alt="product" />
          </Link>
        </div>
      </MinicartItemStyled>
    );
  }
}

export const MinicartItem = withMinicartActions(Component);
