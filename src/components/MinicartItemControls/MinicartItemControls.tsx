import { PureComponent } from 'react';

import { MinicartItemControlsStyled } from 'components/MinicartItemControls/MinicartItemControls.styled';
import {
  withItemCountControls,
  WithItemCountControls,
} from 'store/cart/hoc/withItemCountControls';

interface Props extends WithItemCountControls {
  itemId: string;
  numberOfItems: number;
}

class Component extends PureComponent<Props> {
  private handleIncrease = () => {
    const { increaseItemCount, itemId } = this.props;

    increaseItemCount(itemId);
  };

  private handleDecrease = () => {
    const { decreaseItemCount, itemId } = this.props;

    decreaseItemCount(itemId);
  };

  render() {
    const { numberOfItems } = this.props;

    return (
      <MinicartItemControlsStyled>
        <button type="button" onClick={this.handleIncrease}>
          +
        </button>
        <span className="quantity">{numberOfItems}</span>
        <button type="button" onClick={this.handleDecrease}>
          -
        </button>
      </MinicartItemControlsStyled>
    );
  }
}

export const MinicartItemControls = withItemCountControls(Component);
