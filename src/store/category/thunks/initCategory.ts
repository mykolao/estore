import { createAsyncThunk } from '@reduxjs/toolkit';

import { categoryActions } from 'store/category';
import { localCategory } from 'store/category/localCategory';
import { selectCategory } from 'store/category/thunks/selectCategory';
import { ThunkApi } from 'store/types';

const typePrefix = 'initCategories';

const { setCategories } = categoryActions;
const { getLocalCategory } = localCategory;

export const initCategory = createAsyncThunk<void, string[], ThunkApi>(
  typePrefix,
  async (categoryNames, { dispatch }) => {
    dispatch(setCategories(categoryNames));

    const selectedCategory = getLocalCategory();

    if (categoryNames.find(name => name === selectedCategory)) {
      dispatch(selectCategory(selectedCategory));
    } else {
      const newSelectedCat = categoryNames.at(0)!;
      dispatch(selectCategory(newSelectedCat));
    }
  },
);
