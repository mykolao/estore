import { CurrencyThunks } from 'store/currency/thunks';
import { CurrencyState } from 'store/currency/types';

export interface WithCurrencySelectState extends CurrencyState {}

export interface WithCurrencySelectDispatch extends CurrencyThunks {}
