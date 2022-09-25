import { connect } from 'react-redux';

import { productThunks, ProductThunks } from 'store/product/thunks';
import { ProductState } from 'store/product/types';
import { RootState } from 'store/types';

export interface WithLoadProductState extends Pick<ProductState, 'isLoading' | 'error'> {}

export interface WithLoadProductDispatch extends Pick<ProductThunks, 'loadProduct'> {}

const state = ({ product: { isLoading, error } }: RootState): WithLoadProductState => ({
  isLoading,
  error,
});

const dispatch: WithLoadProductDispatch = { loadProduct: productThunks.loadProduct };

export const withLoadProduct = connect(state, dispatch);
