import { createAsyncThunk } from '@reduxjs/toolkit';

import { queries } from 'apollo/queries';
import { appActions } from 'store/app/slice';
import { currencyThunks } from 'store/currency';
import { ThunkApi } from 'store/types';

const typePrefix = 'Initialize App';
const { setLoading, setError } = appActions;
const { initCurrency } = currencyThunks;
const { initialQuery } = queries;

export const initApp = createAsyncThunk<void, void, ThunkApi>(
  typePrefix,
  async (_, { dispatch }) => {
    try {
      const {
        data: { currencies },
      } = await initialQuery();
      dispatch(initCurrency(currencies));
      dispatch(setLoading(false));
    } catch {
      dispatch(setError(true));
      dispatch(setLoading(false));
    }
  },
);
