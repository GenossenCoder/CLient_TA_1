import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import React from 'react'
import {
  ApolloClient, 
  InMemoryCache,
  ApolloProvider,
  
} from '@apollo/client'
import ContentForm from './Components/ContentForm';
function App() {
  const client = new ApolloClient({
    uri:'https://take-action-gql.herokuapp.com/graphql?',
    cache: new InMemoryCache()
  })
  return (
    <ApolloProvider client={client}>
      <Header />
      <Sidebar />
      <ContentForm/>
    </ApolloProvider>
  );
}

export default App;
