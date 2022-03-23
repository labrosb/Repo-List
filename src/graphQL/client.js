import {
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL,
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          search: {
            // Don't cache separate results based on
            // any of this field's arguments.
            keyArgs: false,
            // Merge the incoming nodes with the existing ones.
            merge(existing = { nodes: [], edges: [] }, incoming) {
              if (!incoming) return existing
  
              const { nodes, edges, ...rest } = incoming;

              return {
                ...rest,
                nodes: [...existing['nodes'], ...nodes],
                edges: [...existing['edges'], ...edges]
              }
            }
          }
        }
      }
    }
  }),
});

export default client;