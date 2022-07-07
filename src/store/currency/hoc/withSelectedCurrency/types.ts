import { CurrencyState } from 'store/currency/types';

export interface WithSelectedCurrencyState
  extends Pick<CurrencyState, 'selectedCurrency'> {}
