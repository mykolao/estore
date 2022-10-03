import { PureComponent } from 'react';

import CartDivider from 'components/CartDivider';
import { CartSummaryStyled } from 'components/CartSummary/CartSummary.styled';
import CurrentPrice from 'components/CurrentPrice';
import { withCartSummary, WithCartSummaryState } from 'store/cart/hoc';

interface Props extends WithCartSummaryState {}

class Component extends PureComponent<Props> {
  render() {
    const {
      summary: { taxPercentage, taxValue, numberOfItems, totalSum },
    } = this.props;

    return (
      <CartSummaryStyled>
        <CartDivider />
        <div className="container">
          <div className="col">
            <p className="label">Tax {taxPercentage}%:</p>
            <p className="label">Quantity:</p>
            <p className="label label-total">Total: </p>
          </div>
          <div className="col">
            <p className="value">
              <CurrentPrice prices={taxValue} />
            </p>
            <p className="value">{numberOfItems}</p>
            <p className="value">
              <CurrentPrice prices={totalSum} />
            </p>
          </div>
        </div>
      </CartSummaryStyled>
    );
  }
}

export const CartSummary = withCartSummary(Component);
