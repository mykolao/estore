import { CategoryState } from 'store/category/types';

export interface WithProductsState
  extends Pick<CategoryState, 'products' | 'currentCategory'> {}
