import { TPrice } from 'apollo/types';
import { WithSelectedCurrencyState } from 'store/currency/hoc/withSelectedCurrency';

export interface CurrentPriceProps extends WithSelectedCurrencyState {
  prices: TPrice[];
}
