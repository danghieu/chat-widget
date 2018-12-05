import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Components
import Login from '../containers/login';
import Chat from './chat/chat';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div class="container">
        <Route exact path='/' component={Login} />
        <Route path='/chat' component={Chat} />
      </div>
    </BrowserRouter>
  </Provider>
)


export default Root;
