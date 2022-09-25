import { connect } from 'react-redux';

import { WithProductDescriptionState } from 'store/product/hoc/withProductDescription/types';
import { productThunks } from 'store/product/thunks';
import { RootState } from 'store/types';

const state = ({ product: { product } }: RootState): WithProductDescriptionState =>
  product;

const dispatch = { loadProduct: productThunks.loadProduct };

export const withProductDescription = connect(state, dispatch);
