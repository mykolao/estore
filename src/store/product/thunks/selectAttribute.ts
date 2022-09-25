import { createAsyncThunk } from '@reduxjs/toolkit';

import { TAttributeSet } from 'apollo/types';
import { productActions } from 'store/product/slice';
import { ThunkApi } from 'store/types';

const typePrefix = 'Select Attribute';

const { setSelectedAttributes } = productActions;

export const selectAttribute = createAsyncThunk<void, TAttributeSet, ThunkApi>(
  typePrefix,
  (attribute, { getState, dispatch }) => {
    const { selectedAttributes } = getState().product;

    const updatedAttributes = selectedAttributes.map(attr => {
      if (attr.id === attribute.id) {
        return { ...attr, items: attribute.items };
      }
      return attr;
    });

    dispatch(setSelectedAttributes(updatedAttributes));
  },
);
