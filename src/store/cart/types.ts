import { TAttributeSet, TPrice, TProduct } from 'apollo/types';

export interface CartItem {
  itemId: string;
  quantity: number;
  selectedAttributes: TAttributeSet[];
  product: TProduct;
}

export interface CartSummary {
  numberOfItems: number;
  taxPercentage: number;
  taxValue: TPrice[];
  totalSum: TPrice[];
}

export interface CartState {
  items: CartItem[];
  summary: CartSummary;
}
