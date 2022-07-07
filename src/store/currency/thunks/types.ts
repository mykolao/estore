import { TCurrency } from 'apollo/types';

export interface CurrencyThunks {
  selectCurrency: (value: TCurrency) => void;
}
