import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './components/root';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import './css/style.css';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

let store;
let user = window.localStorage.getItem('_chatAppCurrentUser');
if (user) {
  const preloadedState = { user };
  store = configureStore(preloadedState);
} else {
  store = configureStore();
}
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  rootElement);

serviceWorker.unregister();
