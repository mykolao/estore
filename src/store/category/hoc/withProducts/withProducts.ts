import { connect } from 'react-redux';

import { WithProductsState } from 'store/category/hoc/withProducts/types';
import { RootState } from 'store/types';

const state = ({
  category: { products, currentCategory },
}: RootState): WithProductsState => ({
  products,
  currentCategory,
});

export const withProducts = connect(state);
