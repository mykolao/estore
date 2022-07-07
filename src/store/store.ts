import { configureStore } from '@reduxjs/toolkit';

import { appReducer } from 'store/app';
import { currencyReducer } from 'store/currency';

const reducer = {
  app: appReducer,
  currency: currencyReducer,
};

const devTools = import.meta.env.DEV;

export const store = configureStore({
  reducer,
  devTools,
});
