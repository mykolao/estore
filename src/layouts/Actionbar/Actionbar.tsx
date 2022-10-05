import { PureComponent } from 'react';

import CartButton from 'components/CartButton';
import CurrencySelect from 'components/CurrencySelect';
import { ActionbarStyled } from 'layouts/Actionbar/Actionbar.styled';

export class Actionbar extends PureComponent {
  render() {
    return (
      <ActionbarStyled>
        <CurrencySelect />
        <CartButton />
      </ActionbarStyled>
    );
  }
}
