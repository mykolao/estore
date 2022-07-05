import { PureComponent } from 'react';

import Logo from 'components/Logo';
import Actionbar from 'layouts/Actionbar';
import { HeaderStyled } from 'layouts/Header/Header.styled';
import Nav from 'layouts/Nav';

export class Header extends PureComponent {
  render() {
    return (
      <HeaderStyled>
        <div className="wrapper">
          <Nav />
          <Logo />
          <Actionbar />
        </div>
      </HeaderStyled>
    );
  }
}
