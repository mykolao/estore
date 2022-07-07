import { createSlice } from '@reduxjs/toolkit';

import { TCurrency } from 'apollo/types';
import { initialState } from 'store/currency/initialState';
import { Action } from 'store/types';

const name = 'Currency';

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setCurrencies(state, { payload }: Action<TCurrency[]>) {
      state.currencies = payload;
    },
    setSelectedCurrency(state, { payload }: Action<TCurrency>) {
      state.selectedCurrency = payload;
    },
  },
});

export const { reducer: currencyReducer, actions: currencyActions } = slice;
