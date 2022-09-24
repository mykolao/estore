import { TAttributeSet, TProduct } from 'apollo/types';

export interface ProductState {
  isLoading: boolean;
  error: boolean;
  product: TProduct;
  selectedAttributes: TAttributeSet[];
}
