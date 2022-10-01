import { PureComponent } from 'react';

import AppLoader from 'components/AppLoader';
import { AppStyled } from 'layouts/App/App.styled';
import { AppProps } from 'layouts/App/types';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';
import Routes from 'routes';

export class AppComponent extends PureComponent<AppProps> {
  componentDidMount() {
    const { initApp } = this.props;

    initApp();
  }

  render() {
    const { loading, error } = this.props;

    if (loading || error) {
      return (
        <AppStyled>
          <AppLoader isError={error} />
        </AppStyled>
      );
    }

    return (
      <AppStyled>
        <Header />
        <Routes />
        <Footer />
      </AppStyled>
    );
  }
}
