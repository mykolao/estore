import { CurrentPriceComponent } from 'components/CurrentPrice/CurrentPrice.component';
import { withSelectedCurrency } from 'store/currency/hoc/withSelectedCurrency';

export const CurrentPrice = withSelectedCurrency(CurrentPriceComponent);
