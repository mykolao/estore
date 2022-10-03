import { CartThunks } from 'store/cart/thunks';

export interface WithItemCountControls
  extends Pick<CartThunks, 'increaseItemCount' | 'decreaseItemCount'> {}
