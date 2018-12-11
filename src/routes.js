import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import ChatContainer from './containers/ChatContainer';
import Login from './containers/login';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div class="container">
          <Route path="/" exact component={Login}></Route>
          <Route path="/chat" component={ChatContainer} ></Route>
        </div>
      </Router>
    )};
}


export default Routes;
