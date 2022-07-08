import { TCategoryProduct } from 'apollo/types';

export interface ProductCardImageProps
  extends Pick<TCategoryProduct, 'id' | 'inStock' | 'gallery'> {
  showAddToCartButton: boolean;
}
