import { TCategoryProduct } from 'apollo/types';

export interface AddToCartButtonProps extends Pick<TCategoryProduct, 'id'> {
  isDisplayed: boolean;
}
