import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Chat from '../components/chat';
import setupSocket from "../sockets"
let socket = setupSocket();

class ChatContainer extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <Chat {...this.props} socket={socket} />
    );
  }
}

ChatContainer.propTypes = {
 
}


function mapStateToProps(state) {
  return {
    
  }
}

export default connect(mapStateToProps)(ChatContainer)
