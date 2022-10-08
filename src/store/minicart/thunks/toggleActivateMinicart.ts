import { createAsyncThunk } from '@reduxjs/toolkit';

import { minicartActions } from 'store/minicart/slice';
import { ThunkApi } from 'store/types';

const typePrefix = 'toggleActivateMinicart';

const { setIsVisible } = minicartActions;

export const toggleActivateMinicart = createAsyncThunk<void, void, ThunkApi>(
  typePrefix,
  (_, { dispatch, getState }) => {
    const currentValue = getState().minicart.isVisible;
    dispatch(setIsVisible(!currentValue));
  },
);
