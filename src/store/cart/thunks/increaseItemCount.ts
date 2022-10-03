import { createAsyncThunk } from '@reduxjs/toolkit';

import { cartActions } from 'store/cart/slice';
import { persistCart } from 'store/cart/thunks/persistCart';
import { updateCartSummary } from 'store/cart/thunks/updateCartSummary';
import { ThunkApi } from 'store/types';

const typePrefix = 'increaseItemCount';

const { incrementItemCount } = cartActions;

export const increaseItemCount = createAsyncThunk<void, string, ThunkApi>(
  typePrefix,
  (itemId, { dispatch }) => {
    dispatch(incrementItemCount(itemId));
    dispatch(updateCartSummary());
    dispatch(persistCart());
  },
);
