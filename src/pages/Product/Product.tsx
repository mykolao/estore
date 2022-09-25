import { PureComponent } from 'react';

import { withRouter } from 'react-router-dom';

import Main from 'layouts/Main';
import ProductDetails from 'layouts/ProductDetails';
import { ProductProps } from 'pages/Product/types';
import { withLoadProduct } from 'store/product/hoc';

class Component extends PureComponent<ProductProps> {
  componentDidMount() {
    const {
      match: {
        params: { productId },
      },
      loadProduct,
    } = this.props;

    loadProduct(productId);
  }

  render() {
    const { isLoading, error } = this.props;

    if (isLoading) return <Main>Loading</Main>;
    if (error) return <Main>Error</Main>;

    return <ProductDetails />;
  }
}

export const Product = withRouter(withLoadProduct(Component));
