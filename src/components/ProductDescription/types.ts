import {
  WithProductDescriptionDispatch,
  WithProductDescriptionState,
} from 'store/product/hoc/withProductDescription';

export interface ProductDescriptionProps
  extends WithProductDescriptionState,
    WithProductDescriptionDispatch {}
