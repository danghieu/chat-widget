import { Router, Route } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import App from './containers/App';
import ChatContainer from './containers/ChatContainer';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Welcome from './components/welcome';
import history from './history'

class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div class="">
          <App>
            <Route path="/" exact component={Welcome}></Route>
            <Route path="/welcome" component={Welcome}></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/chat" component={ChatContainer} ></Route>
          </App>          
        </div>
      </Router>
    )};
}

export default Routes
