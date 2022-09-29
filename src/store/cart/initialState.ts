import { CartState } from 'store/cart/types';

export const initialState: CartState = {
  items: [],
  summary: {
    numberOfItems: 0,
    taxPercentage: 21,
    taxValue: [],
    totalSum: [],
  },
};
