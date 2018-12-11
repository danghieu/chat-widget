import React from 'react';
import Directory from '../containers/directory';
import Messages from '../containers/messages';

export default class Chat extends React.Component {
  render() {
    return (
      <div className='chat-container' >
        <Directory socket={this.props.socket}/>
        <Messages socket={this.props.socket}/>
      </div>
    );
  }
  
}

