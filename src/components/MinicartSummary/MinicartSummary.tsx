import { PropsWithChildren, PureComponent } from 'react';

import CurrentPrice from 'components/CurrentPrice';
import { MinicartSummaryStyled } from 'components/MinicartSummary/MinicartSummary.styled';
import { withCartSummary, WithCartSummaryState } from 'store/cart/hoc';

interface Props extends WithCartSummaryState, PropsWithChildren {}

class Component extends PureComponent<Props> {
  render() {
    const {
      summary: { numberOfItems, totalSum },
      children,
    } = this.props;
    return (
      <MinicartSummaryStyled>
        <p className="heading">
          My Bag, <span>{numberOfItems === 1 ? `1 item` : `${numberOfItems} items`}</span>
        </p>
        {children}
        <p className="sum">
          <span className="label">Total:</span>
          <span className="price">
            <CurrentPrice prices={totalSum} />
          </span>
        </p>
      </MinicartSummaryStyled>
    );
  }
}

export const MinicartSummary = withCartSummary(Component);
