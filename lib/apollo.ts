import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL || 'http://localhost:1337/graphql',
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});
