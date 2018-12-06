import React from 'react';
import MessagesList from './messagesList';
import ChannelInfo from './channelInfo';
// Messages entry point that displays message log and input field
class Messages extends React.Component {
  constructor(props) {
    super(props);
    this._handleEnter = this._handleEnter.bind(this);
  }
  _handleEnter(event) {
    let props = this.props;
    if (event.key == 'Enter') {
      this.props.addMessage(props.channel.id, event.target.value, props.user);
      event.target.value = "";
      // this.props.fetchChannel(props.channel.id);
    }
  }
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
