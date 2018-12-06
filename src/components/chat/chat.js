import React from 'react';
import Directory from '../../containers/directory';
import Messages from '../../containers/messages';
const Chat = () => {
  return (
    <div className='chat-container' >
      <Directory />
      <Messages />
    </div>
  );
};

export default Chat;
