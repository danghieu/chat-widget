import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store';
import './css/style.css';
import * as serviceWorker from './serviceWorker';
const store = configureStore();
ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
serviceWorker.unregister();
