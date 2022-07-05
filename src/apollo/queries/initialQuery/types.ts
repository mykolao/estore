import { TCategory, TCurrency } from 'apollo/types';

export interface InitialQueryResponse {
  categories: Pick<TCategory, 'name'>[];
  currencies: TCurrency[];
}
