import React from 'react';
import Directory from '../../containers/directory';

const Chat = () => {
  return (
    <div className='chat-container' >
      <Directory />
      <div class="message-container"></div>
    </div>
  );
};

export default Chat;
