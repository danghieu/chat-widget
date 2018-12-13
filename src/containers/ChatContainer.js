import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from '../components/chat';

import { receiveAuth } from '../actions/user';
import { fetchChannels, fetchChannel } from '../actions/channel';

import setupSocket from "../sockets"
let socket = setupSocket();

class ChatContainer extends Component {

  componentDidMount() {
    const { user } = this.props;
    if(!user.username) {
      this.props.receiveAuth();
    }
    this.props.fetchChannels(user.username);
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
    activeChannel: state.currentChannel
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receiveAuth: () => dispatch(receiveAuth()),
    fetchChannels: () => dispatch(fetchChannels()),
    fetchChannel: (id) => dispatch(fetchChannel(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)
