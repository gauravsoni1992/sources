import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './components/App';
import './index.css';

// 2
const graphQLEndpoint = '/graphql';
const httpLink = new HttpLink({
  uri: graphQLEndpoint,
  credentials: 'same-origin',
});

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

/** Parcel Hot Module Replacement */
if (module.hot) {
  module.hot.accept();
}
