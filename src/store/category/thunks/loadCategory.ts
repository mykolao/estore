import { createAsyncThunk } from '@reduxjs/toolkit';

import { queries } from 'apollo/queries';
import { categoryActions } from 'store/category/slice';
import { ThunkApi } from 'store/types';

const typePrefix = 'Load Products';

const { categoryQuery } = queries;
const { setProducts } = categoryActions;

export const loadCategory = createAsyncThunk<void, string, ThunkApi>(
  typePrefix,
  async (category, { dispatch }) => {
    const {
      data: {
        category: { products },
      },
    } = await categoryQuery(category);

    if (products.length) {
      dispatch(setProducts(products));
    }
  },
);
