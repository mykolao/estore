import { createAsyncThunk } from '@reduxjs/toolkit';

import { cartActions } from 'store/cart/slice';
import { persistCart } from 'store/cart/thunks/persistCart';
import { updateCartSummary } from 'store/cart/thunks/updateCartSummary';
import { ThunkApi } from 'store/types';

const typePrefix = 'decreaseItemCount';

const { decrementItemCount } = cartActions;

export const decreaseItemCount = createAsyncThunk<void, string, ThunkApi>(
  typePrefix,
  (itemId, { dispatch }) => {
    dispatch(decrementItemCount(itemId));
    dispatch(updateCartSummary());
    dispatch(persistCart());
  },
);
