import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AuthorListHandler } from './components/AuthorListHandler'
import { reducer } from './redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <AuthorListHandler />
    </Provider>
  );
}

export default App;