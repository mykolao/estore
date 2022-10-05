import { PureComponent } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import Cart from 'pages/Cart';
import Category from 'pages/Category';
import Checkout from 'pages/Checkout';
import Product from 'pages/Product';
import { PATH_PARAMS, PATHS } from 'routes/paths';

const { product, category, cart, checkout, default: defaultP } = PATHS;
const { productId } = PATH_PARAMS;

export class Routes extends PureComponent {
  render() {
    return (
      <Switch>
        <Route path={category} exact>
          <Category />
        </Route>
        <Route path={`${product}/:${productId}`} exact>
          <Product />
        </Route>
        <Route path={cart} exact>
          <Cart />
        </Route>
        <Route path={checkout} exact>
          <Checkout />
        </Route>
        <Route path={defaultP} exact>
          <Redirect to={category} />
        </Route>
      </Switch>
    );
  }
}
