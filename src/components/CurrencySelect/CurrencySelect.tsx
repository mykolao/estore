import { CurrencySelectComponent } from 'components/CurrencySelect/CurrencySelect.component';
import { withCurrencySelect } from 'store/currency/hoc/withCurrencySelect';

export const CurrencySelect = withCurrencySelect(CurrencySelectComponent);
