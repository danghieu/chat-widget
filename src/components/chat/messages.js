import React from 'react';
import MessagesList from './messagesList';
import ChannelInfo from './channelInfo';
// Messages entry point that displays message log and input field
class Messages extends React.Component {
  render() {
    return (
      <div className='message-container'>
        <ChannelInfo channel={this.props.channel} />
        <MessagesList messages={this.props.messages} user={this.props.user}/>
        <div className='message-field'>
          <input className='message-text' placeholder='Type your message here...' onKeyPress={this._handleEnter} type='text' />
        </div>
      </div>
    );
  }
}

export default Messages;
