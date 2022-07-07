import { createAsyncThunk } from '@reduxjs/toolkit';

import { TCurrency } from 'apollo/types';
import { currencyActions } from 'store/currency/slice';
import { selectCurrency } from 'store/currency/thunks/selectCurrency';
import { ThunkApi } from 'store/types';

const typePrefix = 'Init Currency';

const { setCurrencies } = currencyActions;

export const initCurrency = createAsyncThunk<void, TCurrency[], ThunkApi>(
  typePrefix,
  async (currencies, { dispatch }) => {
    if (currencies.length) {
      dispatch(setCurrencies(currencies));

      const selectedCurrency = localStorage.currency;

      if (currencies.find(({ symbol }) => symbol === selectedCurrency)) {
        dispatch(selectCurrency(selectedCurrency));
      } else {
        const firstElement = 0;
        const newSelectedCurrency = currencies.at(firstElement)!;

        dispatch(selectCurrency(newSelectedCurrency));
      }
    }
  },
);
