import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { Start } from './src/screens/start';

const App = () => {
  return (
    <Provider store={ store }>
      {/*<ApolloProvider client={client}>*/}
      <Start/>
      {/*</ApolloProvider>*/}
    </Provider>
  );
};

export default App;
