import { PureComponent } from 'react';

import CategoryTitle from 'components/CategoryTitle';
import Main from 'layouts/Main';
import ProductGrid from 'layouts/ProductGrid';
import { CategoryProps } from 'pages/Category/types';
import { withProducts } from 'store/category/hoc';

export class Component extends PureComponent<CategoryProps> {
  render() {
    const { currentCategory, products } = this.props;

    return (
      <Main>
        <CategoryTitle>{currentCategory}</CategoryTitle>
        <ProductGrid products={products} />
      </Main>
    );
  }
}

export const Category = withProducts(Component);
