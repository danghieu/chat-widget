import React from 'react';
import Directory from './directory/directory';
import Messages from './messages/messages';

class Chat extends React.Component {
  render() {
    return (
      <div className='chat-container' >
        <Directory {...this.props}/>
        <Messages {...this.props} />
      </div>
    );
  }
}
export default Chat
