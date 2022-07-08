import { TCategoryProducts } from 'apollo/types';

export interface CategoryState {
  categories: string[];
  currentCategory: string;
  products: TCategoryProducts;
}
