import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

const SERVER_URI =
  'https://gcb3s0qgg0.execute-api.us-east-1.amazonaws.com/dev/graphql';

export const client = new ApolloClient({
  uri: SERVER_URI,
  fetch
});
