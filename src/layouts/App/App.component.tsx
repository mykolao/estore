import { PureComponent } from 'react';

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

    if (loading) {
      return <AppStyled>Loading</AppStyled>;
    }

    if (error) {
      return <AppStyled>Error</AppStyled>;
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
