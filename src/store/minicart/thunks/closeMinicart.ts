import { createAsyncThunk } from '@reduxjs/toolkit';

import { minicartActions } from 'store/minicart/slice';
import { ThunkApi } from 'store/types';

const typePrefix = 'closeMinicart';

const { setIsVisible } = minicartActions;

export const closeMinicart = createAsyncThunk<void, void, ThunkApi>(
  typePrefix,
  (_, { dispatch, getState }) => {
    const { isVisible } = getState().minicart;

    if (isVisible) dispatch(setIsVisible(false));
  },
);
