import { ApolloClient } from '@apollo/client';

import { cache } from 'apollo/cache';

const name = 'Store';
const uri = import.meta.env.VITE_APOLLO_SERVER_URL;
const connectToDevTools = import.meta.env.DEV;

export const client = new ApolloClient({
  name,
  uri,
  cache,
  connectToDevTools,
});
