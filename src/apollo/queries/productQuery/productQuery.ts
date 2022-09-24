import { gql } from '@apollo/client';

import { client } from 'apollo/client';
import { ProductQueryResponse } from 'apollo/queries/productQuery/types';

const query = gql`
  query productQuery($id: String!) {
    product(id: $id) {
      id
      brand
      name
      inStock
      gallery
      attributes {
        id
        name
        type
        items {
          id
          value
          displayValue
        }
      }
      prices {
        amount
        currency {
          symbol
        }
      }
      description
    }
  }
`;

export const productQuery = (id: string) =>
  client.query<ProductQueryResponse>({ query, variables: { id } });
