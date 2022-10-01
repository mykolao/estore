import { PureComponent } from 'react';

import logo from 'assets/images/logo.svg';
import { LogoStyled } from 'components/Logo/Logo.styled';

export class Logo extends PureComponent {
  render() {
    return (
      <LogoStyled>
        <img src={logo} alt="logo" />
      </LogoStyled>
    );
  }
}
