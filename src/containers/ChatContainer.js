import React, { Component } from 'react';

import { connect } from 'react-redux';
import Chat from '../components/chat';
import { receiveAuth } from '../actions/user';

import setupSocket from "../sockets"
let socket = setupSocket();

class ChatContainer extends Component {

  componentDidMount() {
    const { dispatch, user } = this.props;
    if(!user.username) {
      dispatch(receiveAuth());
    }
  }

  render() {
    return (
      <Chat {...this.props} socket={socket} />
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps)(ChatContainer)
