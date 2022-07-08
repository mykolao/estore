import { WithCategorySelectDispatch, WithCategorySelectState } from 'store/category/hoc';

export interface CategorySelectProps
  extends WithCategorySelectState,
    WithCategorySelectDispatch {}
