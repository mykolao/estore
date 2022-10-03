import { connect } from 'react-redux';

import { WithItemCountControls } from 'store/cart/hoc/withItemCountControls/types';
import { cartThunks } from 'store/cart/thunks';

const { increaseItemCount, decreaseItemCount } = cartThunks;

const dispatch: WithItemCountControls = { increaseItemCount, decreaseItemCount };

export const withItemCountControls = connect(null, dispatch);
