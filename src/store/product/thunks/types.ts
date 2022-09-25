import { TAttributeSet } from 'apollo/types';

export interface ProductThunks {
  loadProduct: (id: string) => void;
  selectAttribute: (attribute: TAttributeSet) => void;
}
