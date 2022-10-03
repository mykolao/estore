import { createAsyncThunk } from '@reduxjs/toolkit';

import { addToCartByProduct } from 'store/cart/thunks/addToCartByProduct';
import { ThunkApi } from 'store/types';

const typePrefix = 'addToCartWithSelectedAttributes';

export const addToCartWithSelectedAttributes = createAsyncThunk<void, void, ThunkApi>(
  typePrefix,
  (_, { dispatch, getState }) => {
    const { product, selectedAttributes } = getState().product;
    dispatch(addToCartByProduct({ product, selectedAttributes }));
  },
);
