import { PureComponent } from 'react';

import { TCurrency } from 'apollo/types';
import CurrencyArrow from 'components/CurrencySelect/CurrencyArrow';
import CurrencyOption from 'components/CurrencySelect/CurrencyOption';
import { CurrencySelectStyled } from 'components/CurrencySelect/CurrencySelect.styled';
import {
  CurrencySelectProps,
  CurrencySelectState,
} from 'components/CurrencySelect/types';

export class CurrencySelectComponent extends PureComponent<
  CurrencySelectProps,
  CurrencySelectState
> {
  constructor(props: CurrencySelectProps) {
    super(props);
    this.state = { isActive: false };
  }

  handleActivate = () => {
    const { isActive: isCurrentActive } = this.state;

    this.setState({ isActive: !isCurrentActive });
  };

  handleDeactivate = () => {
    this.setState({ isActive: false });
  };

  handleSelect = (value: TCurrency) => {
    const { selectedCurrency, selectCurrency } = this.props;

    if (value.label !== selectedCurrency.symbol) {
      this.setState({ isActive: false });
      selectCurrency(value);
    }
  };

  render() {
    const {
      selectedCurrency: { symbol: selectedSymbol },
      currencies,
    } = this.props;
    const { isActive } = this.state;

    return (
      <CurrencySelectStyled onClick={this.handleActivate} onBlur={this.handleDeactivate}>
        <div className="symbol">{selectedSymbol}</div>
        <CurrencyArrow isActive={isActive} />
        {isActive && (
          <ul className="options">
            {currencies.map(currency => (
              <CurrencyOption
                isActive={currency.symbol === selectedSymbol}
                key={currency.label}
                value={currency}
                onClick={this.handleSelect}
              />
            ))}
          </ul>
        )}
      </CurrencySelectStyled>
    );
  }
}
