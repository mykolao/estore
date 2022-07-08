import { TCategoryProduct } from 'apollo/types';

export interface ProductCardPriceProps
  extends Pick<TCategoryProduct, 'id' | 'prices' | 'inStock'> {}
