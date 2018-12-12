import React from 'react';
import Directory from '../containers/directory';
import Messages from '../containers/messages';
import { receiveAuth } from '../actions/user';

class Chat extends React.Component {
  componentDidMount() {
    const { dispatch, user } = this.props;
    console.log(user);
    if(!user.username) {
      dispatch(receiveAuth());
    }
  }
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
