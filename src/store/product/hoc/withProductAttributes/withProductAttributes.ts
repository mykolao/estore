import { connect } from 'react-redux';

import { TProduct } from 'apollo/types';
import { productThunks, ProductThunks } from 'store/product/thunks';
import { ProductState } from 'store/product/types';
import { RootState } from 'store/types';

export interface WithProductAttributesState
  extends Pick<ProductState, 'selectedAttributes'>,
    Pick<TProduct, 'attributes' | 'inStock'> {}

export interface WithProductAttributesDispatch
  extends Pick<ProductThunks, 'selectAttribute'> {}

const state = ({
  product: {
    selectedAttributes,
    product: { inStock, attributes },
  },
}: RootState): WithProductAttributesState => ({
  selectedAttributes,
  inStock,
  attributes,
});

const dispatch: WithProductAttributesDispatch = {
  selectAttribute: productThunks.selectAttribute,
};

export const withProductAttributes = connect(state, dispatch);
