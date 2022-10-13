import { createAsyncThunk } from '@reduxjs/toolkit';

import { queries } from 'apollo/queries';
import { appActions } from 'store/app/slice';
import { cartThunks } from 'store/cart/thunks';
import { categoryThunks } from 'store/category/thunks';
import { currencyThunks } from 'store/currency';
import { ThunkApi } from 'store/types';

const typePrefix = 'Initialize App';
const { setLoading, setError } = appActions;
const { initCategory } = categoryThunks;
const { initCurrency } = currencyThunks;
const { initCart } = cartThunks;
const { initialQuery } = queries;

export const initApp = createAsyncThunk<void, void, ThunkApi>(
  typePrefix,
  async (_, { dispatch }) => {
    try {
      const {
        data: { categories, currencies },
      } = await initialQuery();
      dispatch(initCategory(categories.map(({ name }) => name)));
      dispatch(initCurrency(currencies));
      dispatch(initCart());
      dispatch(setLoading(false));
    } catch {
      dispatch(setError(true));
      dispatch(setLoading(false));
    }
  },
);
