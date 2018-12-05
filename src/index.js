import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store';
import './css/style.css';
import * as serviceWorker from './serviceWorker';

let store;
let user = window.localStorage.getItem('_chatAppCurrentUser');
if (user) {
  const preloadedState = { user };
  store = configureStore(preloadedState);
} else {
  store = configureStore();
}
ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

serviceWorker.unregister();
