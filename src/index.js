import 'babel-polyfill';
import React from 'react';
import App from './components/app';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createWithSaga from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';


const saga = createWithSaga();
const createStoreWithMiddleware = applyMiddleware(saga)(createStore);
const store = createStoreWithMiddleware(
  rootReducer,
  {},
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

const render = () => ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#mermaid-app')
);

saga.run(rootSaga);
render();
