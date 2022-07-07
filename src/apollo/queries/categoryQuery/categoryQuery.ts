import { gql } from '@apollo/client';

import { client } from 'apollo/client';
import { CategoryQueryResponse } from 'apollo/queries/categoryQuery/types';

const query = gql`
  query getProducts($title: String!) {
    category(input: { title: $title }) {
      products {
        id
        name
        brand
        inStock
        gallery
        prices {
          amount
          currency {
            label
            symbol
          }
        }
      }
    }
  }
`;

export const categoryQuery = (title: string) =>
  client.query<CategoryQueryResponse>({ query, variables: { title } });
