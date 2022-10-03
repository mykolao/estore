import { connect } from 'react-redux';

import { WithAddToCartDispatch } from 'store/cart/hoc/withAddToCart/types';
import { cartThunks } from 'store/cart/thunks';

const { addToCartById, addToCartWithSelectedAttributes } = cartThunks;

const dispatch: WithAddToCartDispatch = {
  addToCartById,
  addToCartWithSelectedAttributes,
};

export const withAddToCart = connect(null, dispatch);
