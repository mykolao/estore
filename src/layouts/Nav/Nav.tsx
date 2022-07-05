import { PureComponent } from 'react';

import { NavStyled } from 'layouts/Nav/Nav.styled';

export class Nav extends PureComponent {
  render() {
    return (
      <NavStyled>
        <div className="link">Cat1</div>
        <div className="link">Cat2</div>
        <div className="link">Cat3</div>
      </NavStyled>
    );
  }
}
