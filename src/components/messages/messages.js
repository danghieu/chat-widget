import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import MessagesList from './messagesList';
import ChannelInfo from './channelInfo';
// Actions
import * as actions from '../../actions/message';

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
    const {socket, dispatch} = this.props;    
    socket.on('new bc message', (msg) => {
      dispatch(actions.receiveMessage(msg));
    });
  }

  _handleEnter(event) {
    let { user, socket, dispatch } = this.props;
    if (event.key == 'Enter') {
      const text = event.target.value.trim();
      var newMessage = {
        id: `${Date.now()}${uuid.v4()}`,
        channel: this.props.activeChannel.name,
        text: text,
        user: user,
        time: moment.utc().format('lll')
      };
      dispatch(actions.receiveMessage(newMessage));
      socket.emit('new message', newMessage);
      event.target.value = "";
    }
  }
  render() {
    return (
      <div className='message-container'>
        <ChannelInfo channel={this.props.activeChannel} />
        <MessagesList messages={this.props.messages} user={this.props.user}/>
        <div className='message-field'>
          <input type='text' className='message-text' placeholder='Type your message here...'
            onKeyPress={this._handleEnter}/>
        </div>
      </div>
    );
  }
}

export default Messages;
