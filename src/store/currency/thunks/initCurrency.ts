import { createAsyncThunk } from '@reduxjs/toolkit';

import { TCurrency } from 'apollo/types';
import { initialState } from 'store/currency/initialState';
import { localCurrency } from 'store/currency/localCurrency';
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

      const selectedCurrency =
        localCurrency.getLocalCurrency() || initialState.selectedCurrency;

      if (currencies.find(({ symbol }) => symbol === selectedCurrency.symbol)) {
        dispatch(selectCurrency(selectedCurrency));
      } else {
        const firstElement = 0;
        const newSelectedCurrency = currencies.at(firstElement)!;

        dispatch(selectCurrency(newSelectedCurrency));
      }
    }
  },
);
