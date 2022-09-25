import { TProduct } from 'apollo/types';
import { ProductThunks } from 'store/product/thunks';

export interface WithProductDescriptionState extends TProduct {}

export interface WithProductDescriptionDispatch
  extends Pick<ProductThunks, 'loadProduct'> {}
