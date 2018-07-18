import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import './index.css';
import RootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import RootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  RootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(RootSaga);

ReactDOM.render(
  <Provider store={store} ><App /></Provider>,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();
