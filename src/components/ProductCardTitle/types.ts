import { TCategoryProduct } from 'apollo/types';

export interface ProductCardTitleProps
  extends Pick<TCategoryProduct, 'brand' | 'name' | 'id' | 'inStock'> {}
