import { CartThunks } from 'store/cart/thunks';

export interface WithAddToCartDispatch
  extends Pick<CartThunks, 'addToCartById' | 'addToCartWithSelectedAttributes'> {}
