import { ApolloClient, DefaultOptions } from '@apollo/client';

import { cache } from 'apollo/cache';

const name = 'Store';
const uri = import.meta.env.VITE_APOLLO_SERVER_URL;
const connectToDevTools = import.meta.env.DEV;

const defaultOptions: DefaultOptions = {
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
};

export const client = new ApolloClient({
  name,
  uri,
  cache,
  connectToDevTools,
  defaultOptions,
});
