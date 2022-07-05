import { PureComponent } from 'react';

import { ActionbarStyled } from 'layouts/Actionbar/Actionbar.styled';

export class Actionbar extends PureComponent {
  render() {
    return (
      <ActionbarStyled>
        <button type="button">Currency</button>
        <button type="button">Cart</button>
      </ActionbarStyled>
    );
  }
}
