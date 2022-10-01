import { PureComponent } from 'react';

import logo from 'assets/images/logo.svg';
import { AppLoaderStyled } from 'components/AppLoader/AppLoader.styled';

interface Props {
  isError: boolean;
}

export class AppLoader extends PureComponent<Props> {
  render() {
    const { isError } = this.props;

    if (isError)
      return (
        <AppLoaderStyled>
          <img src={logo} alt="logo" />
          <h2 className="error">Server Offline</h2>
        </AppLoaderStyled>
      );

    return (
      <AppLoaderStyled>
        <img src={logo} alt="logo" />
        <h2>
          Loading
          <span className="first">.</span>
          <span className="second">.</span>
          <span className="third">.</span>
        </h2>
      </AppLoaderStyled>
    );
  }
}
