import { initialState } from 'store/cart/initialState';
import { CartState } from 'store/cart/types';

const KEY = 'STORE_CART';

export const getLocalCart = (): CartState =>
  JSON.parse(localStorage.getItem(KEY) || JSON.stringify(initialState));

export const setLocalCart = (value: CartState): void =>
  localStorage.setItem(KEY, JSON.stringify(value));
