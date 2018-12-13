import React from 'react';
import MessagesList from './messagesList';
import ChannelInfo from './channelInfo';
// Actions

// Messages entry point that displays message log and input field
class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: false
    };
    this._handleEnter = this._handleEnter.bind(this);
  }

  componentDidMount() {
    const {socket} = this.props;
    socket.on('messageAdded', (msg) => {
      this.props.receiveMessage(msg)
    });
  }

  _handleEnter(event) {
    let props = this.props;
    if (event.key == 'Enter') {
      this.props.addMessage(props.channel.id, event.target.value, props.user, props.socket);
      event.target.value = "";
    }
  }
  render() {
    return (
      <div className='message-container'>
        <ChannelInfo channel={this.props.activeChannel} />
        <MessagesList messages={this.props.messages} user={this.props.user}/>
        <div className='message-field'>
          <input className='message-text' placeholder='Type your message here...' onKeyPress={this._handleEnter} type='text' />
        </div>
      </div>
    );
  }
}

export default Messages;
