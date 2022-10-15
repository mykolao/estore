import { CurrencyState } from 'store/currency/types';

export const initialState: CurrencyState = {
  currencies: [],
  selectedCurrency: {
    label: '',
    symbol: '',
  },
};
