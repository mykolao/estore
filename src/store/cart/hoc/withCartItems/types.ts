import { CartState } from 'store/cart/types';

export interface WithCartItemsState extends Pick<CartState, 'items'> {}
