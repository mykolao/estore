import { TAttributeSet, TPrice, TProduct } from 'apollo/types';

export interface TCartItem {
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
  items: TCartItem[];
  summary: CartSummary;
}
