import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import catalogReducer from '../reducers/catalog-reducer';
import Catalog from './Catalog';

const store = createStore(catalogReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Catalog headerText="Fancy Catalog" />
    </Provider>
  );
};

export default App;
