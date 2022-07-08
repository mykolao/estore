import { PureComponent } from 'react';

import CurrencySelect from 'components/CurrencySelect';
import { ActionbarStyled } from 'layouts/Actionbar/Actionbar.styled';

export class Actionbar extends PureComponent {
  render() {
    return (
      <ActionbarStyled>
        <CurrencySelect />
        <button type="button">Cart</button>
      </ActionbarStyled>
    );
  }
}
