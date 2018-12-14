import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from '../components/chat';

import { receiveAuth } from '../actions/user';
import { fetchChannels } from '../actions/channel';

import setupSocket from "../sockets"
let socket = setupSocket();

class ChatContainer extends Component {

  componentDidMount() {
    const { user, dispatch } = this.props;
    console.log(user);
    if(!user.id) {
      dispatch(receiveAuth());
    }
    dispatch(fetchChannels(user.email));
  }

  render() {
    return (
      <Chat {...this.props} socket={socket} />
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    channels: state.channel.data,
    activeChannel: state.currentChannel,
    messages: state.message.data
  }
}

export default connect(mapStateToProps)(ChatContainer)
