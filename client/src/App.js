import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Header from './components/Header';

function App() {
  return (
    <div>
      <main>
        <Header />
      </main>
    </div>
  );
}

export default App;
