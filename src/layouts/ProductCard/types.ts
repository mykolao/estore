import { TCategoryProduct } from 'apollo/types';

export interface ProductCardProps {
  product: TCategoryProduct;
}

export interface ProductCardState {
  isHovered: boolean;
}
