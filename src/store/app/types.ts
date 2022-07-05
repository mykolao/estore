import { AppThunks } from 'store/app/thunks/types';

export interface AppState {
  loading: boolean;
  error: boolean;
}

export interface AppDispatch extends AppThunks {}
