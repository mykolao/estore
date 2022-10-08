import { PureComponent } from 'react';

import { CurrentPriceProps } from 'components/CurrentPrice';
import { formatPrice, selectPriceBuCurrency } from 'utils';

export class CurrentPriceComponent extends PureComponent<CurrentPriceProps> {
  render() {
    const { prices, selectedCurrency } = this.props;

    const {
      currency: { symbol },
      amount,
    } = selectPriceBuCurrency(prices, selectedCurrency);

    return `${symbol}${formatPrice(amount)}`;
  }
}
