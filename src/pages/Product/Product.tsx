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

  componentDidUpdate(prevProps: Readonly<ProductProps>) {
    const {
      match: {
        params: { productId: currentProductId },
      },
    } = prevProps;

    const {
      match: {
        params: { productId: updatedProductId },
      },
      loadProduct,
    } = this.props;

    if (currentProductId !== updatedProductId) {
      loadProduct(updatedProductId);
    }
  }

  render() {
    const { isLoading, error } = this.props;

    if (isLoading) return <Main>Loading</Main>;
    if (error) return <Main>Error</Main>;

    return <ProductDetails />;
  }
}

export const Product = withRouter(withLoadProduct(Component));
