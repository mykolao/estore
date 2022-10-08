import { createSlice } from '@reduxjs/toolkit';

import { initialState } from 'store/minicart/initialState';
import { Action } from 'store/types';

const name = 'minicart';

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setIsVisible(state, { payload }: Action<boolean>) {
      state.isVisible = payload;
    },
  },
});

export const { reducer: minicartReducer, actions: minicartActions } = slice;
