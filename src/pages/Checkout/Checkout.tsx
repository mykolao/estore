import { PureComponent } from 'react';

import CheckoutPlaceholder from 'components/CheckoutPlaceholder';
import Main from 'layouts/Main';

export class Checkout extends PureComponent {
  render() {
    return (
      <Main>
        <CheckoutPlaceholder>
          <h2>Not Implemented</h2>
        </CheckoutPlaceholder>
      </Main>
    );
  }
}
