import { createAsyncThunk } from '@reduxjs/toolkit';

import { cartActions } from 'store/cart';
import { getLocalCart } from 'store/cart/localCart';
import { ThunkApi } from 'store/types';

const typePrefix = 'initCart';

const { setCart } = cartActions;

export const initCart = createAsyncThunk<void, void, ThunkApi>(
  typePrefix,
  (_, { dispatch }) => {
    dispatch(setCart(getLocalCart()));
  },
);
