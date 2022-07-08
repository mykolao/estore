import { PureComponent } from 'react';

import CategorySelect from 'components/CategorySelect';
import Logo from 'components/Logo';
import Actionbar from 'layouts/Actionbar';
import { HeaderStyled } from 'layouts/Header/Header.styled';

export class Header extends PureComponent {
  render() {
    return (
      <HeaderStyled>
        <div className="wrapper">
          <CategorySelect />
          <Logo />
          <Actionbar />
        </div>
      </HeaderStyled>
    );
  }
}
