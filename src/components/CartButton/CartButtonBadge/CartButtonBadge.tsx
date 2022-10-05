import { PureComponent } from 'react';

import { CartButtonBadgeStyled } from 'components/CartButton/CartButtonBadge/CartButtonBadge.styled';
import { withCartSummary, WithCartSummaryState } from 'store/cart/hoc';

interface Props extends Pick<WithCartSummaryState, 'summary'> {}

class Component extends PureComponent<Props> {
  render() {
    const {
      summary: { numberOfItems },
    } = this.props;

    return (
      <CartButtonBadgeStyled isHidden={!numberOfItems}>
        {numberOfItems}
      </CartButtonBadgeStyled>
    );
  }
}

export const CartButtonBadge = withCartSummary(Component);
