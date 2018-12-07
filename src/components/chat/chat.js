import React from 'react';
import Directory from '../../containers/directory';
import Messages from '../../containers/messages';
import setupSocket from "../../sockets"

let socket = setupSocket();
const Chat = () => {
  return (
    <div className='chat-container' >
      <Directory socket={socket}/>
      <Messages socket={socket}/>
    </div>
  );
};

export default Chat;
