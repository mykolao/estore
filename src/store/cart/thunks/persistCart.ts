import { createAsyncThunk } from '@reduxjs/toolkit';

import { setLocalCart } from 'store/cart/localCart';
import { ThunkApi } from 'store/types';

const typePrefix = 'persistCart';

export const persistCart = createAsyncThunk<void, void, ThunkApi>(
  typePrefix,
  (_, { getState }) => {
    setLocalCart(getState().cart);
  },
);
