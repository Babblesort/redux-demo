import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import catalogReducer from '../reducers/catalog-reducer';
import ConnectedCatalog from './Catalog';

const store = createStore(catalogReducer);

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedCatalog headerText="Fancy Catalog" />
    </Provider>
  );
};

export default App;
