import { createAsyncThunk } from '@reduxjs/toolkit';

import { productQuery } from 'apollo/queries/productQuery';
import { addToCartByProduct } from 'store/cart/thunks/addToCartByProduct';
import { ThunkApi } from 'store/types';
import { selectDefaultAttributes } from 'utils';

const typePrefix = 'addToCartById';

export const addToCartById = createAsyncThunk<void, string, ThunkApi>(
  typePrefix,
  async (id, { dispatch }) => {
    if (!id.length) return;

    const {
      data: { product },
    } = await productQuery(id);

    if (product) {
      const selectedAttributes = selectDefaultAttributes(product.attributes);
      dispatch(addToCartByProduct({ product, selectedAttributes }));
    }
  },
);
