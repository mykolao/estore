import { PureComponent } from 'react';

import Logo from 'components/Logo';
import { FooterStyled } from 'layouts/Footer/Footer.styled';

export class Footer extends PureComponent {
  render() {
    return (
      <FooterStyled>
        <Logo />
      </FooterStyled>
    );
  }
}
