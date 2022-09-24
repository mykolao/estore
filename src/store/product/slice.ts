import { createSlice } from '@reduxjs/toolkit';

import { TAttributeSet, TProduct } from 'apollo/types';
import { initialState } from 'store/product/initialState';
import { Action } from 'store/types';

const name = 'Product';
const slice = createSlice({
  name,
  initialState,
  reducers: {
    setProduct(state, { payload }: Action<TProduct>) {
      state.product = payload;
    },
    setIsLoading(state, { payload }: Action<boolean>) {
      state.isLoading = payload;
    },
    setError(state, { payload }: Action<boolean>) {
      state.error = payload;
    },
    setSelectedAttributes(state, { payload }: Action<TAttributeSet[]>) {
      state.selectedAttributes = payload;
    },
  },
});

export const { reducer: productReducer, actions: productActions } = slice;
