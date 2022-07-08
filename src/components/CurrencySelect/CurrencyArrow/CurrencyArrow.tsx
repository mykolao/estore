import { PureComponent } from 'react';

import arrowUp from 'assets/images/arrow_up.svg';
import { CurrencyArrowStyled } from 'components/CurrencySelect/CurrencyArrow/CurrencyArrow.styled';
import { CurrencyArrowProps } from 'components/CurrencySelect/CurrencyArrow/types';

export class CurrencyArrow extends PureComponent<CurrencyArrowProps> {
  render() {
    return <CurrencyArrowStyled src={arrowUp} alt="arrow" {...this.props} />;
  }
}
