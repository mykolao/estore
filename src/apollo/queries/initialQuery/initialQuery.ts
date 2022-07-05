import { gql } from '@apollo/client';

import { client } from 'apollo/client';
import { InitialQueryResponse } from 'apollo/queries/initialQuery/types';

const query = gql`
  query initialQuery {
    categories {
      name
    }
    currencies {
      symbol
      label
    }
  }
`;

export const initialQuery = () => client.query<InitialQueryResponse>({ query });
