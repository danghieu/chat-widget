import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Components
import Login from '../containers/login';
import Chat from './chat/chat';
// Actions
import { fetchChannels } from '../actions/channel';


const Root = ({ store }) => {
  const ensureLogin = (nextState, replace, cb) => {
    console.log(store.getState());
    if (!store.getState().user) {
      replace('/');
    } else {
      store.dispatch(fetchChannels())
          .then(() => cb())
    }
  };
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div class="container">
          <Route exact path='/' component={Login} />
          <Route path='/chat' component={Chat}  onEnter={ensureLogin} />
        </div>
      </BrowserRouter>
    </Provider>
  )
};


export default Root;
