import { createSlice } from '@reduxjs/toolkit';

import { initialState } from 'store/app/initialState';
import { Action } from 'store/types';

const name = 'App';

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setLoading(state, { payload }: Action<boolean>) {
      state.loading = payload;
    },
    setError(state, { payload }: Action<boolean>) {
      state.error = payload;
    },
  },
});

export const { reducer: appReducer, actions: appActions } = slice;
