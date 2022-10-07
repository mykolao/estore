import { PureComponent } from 'react';

import { CurrencyOptionStyled } from 'components/CurrencySelect/CurrencyOption/CurrencyOption.styled';
import { CurrencyOptionProps } from 'components/CurrencySelect/CurrencyOption/types';

export class CurrencyOption extends PureComponent<CurrencyOptionProps> {
  handleClick = () => {
    const { onClick, value } = this.props;
    onClick(value);
  };

  render() {
    const {
      value: { symbol, label },
      isActive,
    } = this.props;

    if (isActive) {
      return (
        <CurrencyOptionStyled
          className="active"
          onClick={this.handleClick}
        >{`${symbol} ${label}`}</CurrencyOptionStyled>
      );
    }

    return (
      <CurrencyOptionStyled
        onClick={this.handleClick}
      >{`${symbol} ${label}`}</CurrencyOptionStyled>
    );
  }
}
