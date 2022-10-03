import { PureComponent } from 'react';

import CartSummary from 'components/CartSummary';
import CartTitle from 'components/CartTitle';
import CartItemList from 'layouts/CartItemList';
import Main from 'layouts/Main';

export class Cart extends PureComponent {
  render() {
    return (
      <Main>
        <CartTitle />
        <CartItemList />
        <CartSummary />
      </Main>
    );
  }
}
