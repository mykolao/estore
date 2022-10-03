import { TCategoryProduct } from 'apollo/types';
import { WithAddToCartDispatch } from 'store/cart/hoc/withAddToCart';

export interface AddToCartButtonProps
  extends Pick<TCategoryProduct, 'id'>,
    WithAddToCartDispatch {
  isDisplayed: boolean;
}
