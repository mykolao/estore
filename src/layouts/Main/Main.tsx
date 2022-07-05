import { PropsWithChildren, PureComponent } from 'react';

import { MainStyled } from 'layouts/Main/Main.styled';

export class Main extends PureComponent<PropsWithChildren> {
  render() {
    const { children } = this.props;
    return (
      <MainStyled>
        <div className="wrapper">{children}</div>
      </MainStyled>
    );
  }
}
