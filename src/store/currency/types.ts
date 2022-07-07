import { TCurrency } from 'apollo/types';

export interface CurrencyState {
  currencies: TCurrency[];
  selectedCurrency: TCurrency;
}
