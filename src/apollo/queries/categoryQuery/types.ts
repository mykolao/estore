import { TCategoryProducts } from 'apollo/types';

export interface CategoryQueryResponse {
  category: {
    products: TCategoryProducts;
  };
}
