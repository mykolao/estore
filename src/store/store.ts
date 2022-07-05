import { configureStore } from '@reduxjs/toolkit';

import { appReducer } from 'store/app';

const reducer = {
  app: appReducer,
};

const devTools = import.meta.env.DEV;

export const store = configureStore({
  reducer,
  devTools,
});
