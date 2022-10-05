import { PureComponent } from 'react';

import MinicartItem from 'components/MinicartItem';
import { MinicartItemListStyled } from 'layouts/MinicartItemList/MInicartItemList.styled';
import { withCartItems, WithCartItemsState } from 'store/cart/hoc';

export class Component extends PureComponent<WithCartItemsState> {
  render() {
    const { items } = this.props;

    return (
      <MinicartItemListStyled>
        {items.map(item => (
          <MinicartItem key={item.itemId} value={item} />
        ))}
      </MinicartItemListStyled>
    );
  }
}

export const MinicartItemList = withCartItems(Component);
