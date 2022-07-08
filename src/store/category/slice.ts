import { createSlice } from '@reduxjs/toolkit';

import { TCategoryProducts } from 'apollo/types';
import { initialState } from 'store/category/initialState';
import { Action } from 'store/types';

const name = 'Category';

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setProducts(state, { payload }: Action<TCategoryProducts>) {
      state.products = payload;
    },
    setCategories(state, { payload }: Action<string[]>) {
      state.categories = payload;
    },
    setCurrentCategory(state, { payload }: Action<string>) {
      state.currentCategory = payload;
    },
  },
});

export const { reducer: categoryReducer, actions: categoryActions } = slice;
