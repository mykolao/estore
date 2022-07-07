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
    } = this.props;

    return (
      <CurrencyOptionStyled
        onClick={this.handleClick}
      >{`${symbol} ${label}`}</CurrencyOptionStyled>
    );
  }
}
