import { createAsyncThunk } from '@reduxjs/toolkit';

import { queries } from 'apollo/queries';
import { appActions } from 'store/app/slice';
import { ThunkApi } from 'store/types';

const typePrefix = 'Initialize App';
const { setLoading, setError } = appActions;
const { initialQuery } = queries;

export const initApp = createAsyncThunk<void, void, ThunkApi>(
  typePrefix,
  async (_, { dispatch }) => {
    try {
      await initialQuery();
      dispatch(setLoading(false));
    } catch {
      dispatch(setError(true));
      dispatch(setLoading(false));
    }
  },
);
