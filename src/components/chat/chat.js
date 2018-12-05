import React from 'react';
import Directory from '../../containers/directory';

// simple container that houses the entire chat interface
const Chat = () => {
  return (
    <div className='chat-container' >
      <Directory />
      <div class="message-container"></div>
    </div>
  );
};

export default Chat;
