import { CartState } from 'store/cart/types';

export interface WithCartSummaryState extends Pick<CartState, 'summary'> {}
