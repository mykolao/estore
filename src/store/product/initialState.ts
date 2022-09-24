import { ProductState } from 'store/product/types';

export const initialState: ProductState = {
  isLoading: true,
  error: false,
  product: {
    id: '',
    name: '',
    brand: '',
    inStock: false,
    category: '',
    prices: [],
    gallery: [],
    attributes: [],
    description: '',
  },
  selectedAttributes: [],
};
