import { PayloadAction } from '@reduxjs/toolkit';

import store from 'store';

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export type Action<T> = PayloadAction<T>;

export interface ThunkApi {
  state: RootState;
  dispatch: RootDispatch;
}
