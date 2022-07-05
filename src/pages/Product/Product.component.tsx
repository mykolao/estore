import { PureComponent } from 'react';

import Main from 'layouts/Main';
import { ProductPageProps } from 'pages/Product/types';

export class ProductComponent extends PureComponent<ProductPageProps> {
  render() {
    const {
      match: {
        params: { productId },
      },
    } = this.props;

    return (
      <Main>
        Product Page of <b>{productId}</b>
      </Main>
    );
  }
}
