import {
  WithCurrencySelectDispatch,
  WithCurrencySelectState,
} from 'store/currency/hoc/withCurrencySelect';

export interface CurrencySelectProps
  extends WithCurrencySelectState,
    WithCurrencySelectDispatch {}

export interface CurrencySelectState {
  isActive: boolean;
}
