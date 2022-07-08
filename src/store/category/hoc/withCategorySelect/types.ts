import { CategoryThunks } from 'store/category/thunks';
import { CategoryState } from 'store/category/types';

export interface WithCategorySelectState
  extends Pick<CategoryState, 'categories' | 'currentCategory'> {}

export interface WithCategorySelectDispatch
  extends Pick<CategoryThunks, 'selectCategory'> {}
