import { createAsyncThunk } from '@reduxjs/toolkit';

import { localCategory } from 'store/category/localCategory';
import { categoryActions } from 'store/category/slice';
import { loadCategory } from 'store/category/thunks/loadCategory';
import { ThunkApi } from 'store/types';

const typePrefix = 'selectCategory';

const { setCurrentCategory } = categoryActions;
const { setLocalCategory } = localCategory;

export const selectCategory = createAsyncThunk<void, string, ThunkApi>(
  typePrefix,
  async (newCategory, { dispatch }) => {
    setLocalCategory(newCategory);
    dispatch(setCurrentCategory(newCategory));
    dispatch(loadCategory(newCategory));
  },
);
