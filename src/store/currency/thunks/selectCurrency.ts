import { createAsyncThunk } from '@reduxjs/toolkit';

import { TCurrency } from 'apollo/types';
import { localCurrency } from 'store/currency/localCurrency';
import { currencyActions } from 'store/currency/slice';
import { ThunkApi } from 'store/types';

const typePrefix = 'Select Currency';

const { setSelectedCurrency } = currencyActions;

export const selectCurrency = createAsyncThunk<void, TCurrency, ThunkApi>(
  typePrefix,
  async (currency, { dispatch }) => {
    dispatch(setSelectedCurrency(currency));
    localCurrency.setLocalCurrency(currency);
  },
);
