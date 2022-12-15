import { ApolloClient, DefaultOptions } from '@apollo/client';

import { cache } from 'apollo/cache';

const name = 'Store';
const uri = process.env.REACT_APP_APOLLO_SERVER_URL;
const connectToDevTools = process.env.NODE_ENV === 'development';

const defaultOptions: DefaultOptions = {
  query: {
    errorPolicy: 'ignore',
  },
};

export const client = new ApolloClient({
  name,
  uri,
  cache,
  connectToDevTools,
  defaultOptions,
  fetchOptions: {
    mode: 'no-cors',
  }
});
