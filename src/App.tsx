import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './graphQL/client';
import Repositories from './components/Repositories';

function App(): React.ReactElement {
  return (
    <ApolloProvider client={client}>
      <Repositories />
    </ApolloProvider>
  );
}

export default App;
