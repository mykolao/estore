import { connect } from 'react-redux';

import { WithCartItemsState } from 'store/cart/hoc/withCartItems/types';
import { RootState } from 'store/types';

const state = ({ cart: { items } }: RootState): WithCartItemsState => ({
  items,
});

export const withCartItems = connect(state);
