import { createAsyncThunk } from '@reduxjs/toolkit';

import { queries } from 'apollo/queries';
import { productActions } from 'store/product/slice';
import { ThunkApi } from 'store/types';
import { selectDefaultAttributes } from 'utils';

const typePrefix = 'Load Product';

const { productQuery } = queries;
const { setProduct, setSelectedAttributes, setIsLoading, setError } = productActions;

export const loadProduct = createAsyncThunk<void, string, ThunkApi>(
  typePrefix,
  async (id, { dispatch, getState }) => {
    const isCurrentlyLoading = getState().product.isLoading;

    if (!isCurrentlyLoading) {
      dispatch(setIsLoading(true));
      dispatch(setError(false));
    }

    try {
      const {
        data: { product },
      } = await productQuery(id);

      if (product) {
        const selectedAttrs = selectDefaultAttributes(product.attributes);
        dispatch(setSelectedAttributes(selectedAttrs));
        dispatch(setProduct(product));
      } else dispatch(setError(true));
    } catch {
      dispatch(setError(true));
    }

    dispatch(setIsLoading(false));
  },
);
