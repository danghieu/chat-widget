import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import './css/style.css';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

let store;

const initialState = window.__INITIAL_STATE__;
store = configureStore(initialState);
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  rootElement);

serviceWorker.unregister();
