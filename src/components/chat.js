import React from 'react';
import Directory from './directory/directory';
import Messages from '../containers/messages';

class Chat extends React.Component {
  render() {
    return (
      <div className='chat-container' >
        <Directory socket={this.props.socket} />
        <Messages socket={this.props.socket} />
      </div>
    );
  }
}
export default Chat
