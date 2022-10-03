import { addToCartById } from 'store/cart/thunks/addToCartById';
import { addToCartWithSelectedAttributes } from 'store/cart/thunks/addToCartWithSelectedAttributes';
import { decreaseItemCount } from 'store/cart/thunks/decreaseItemCount';
import { increaseItemCount } from 'store/cart/thunks/increaseItemCount';
import { initCart } from 'store/cart/thunks/initCart';

export interface CartThunks {
  initCart: () => void;
  addToCartById: (id: string) => void;
  increaseItemCount: (itemId: string) => void;
  decreaseItemCount: (itemId: string) => void;
  addToCartWithSelectedAttributes: () => void;
}

export const cartThunks = {
  initCart,
  addToCartById,
  increaseItemCount,
  decreaseItemCount,
  addToCartWithSelectedAttributes,
};
