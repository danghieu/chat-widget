import React from 'react';

class MessagesList extends React.Component {
  // loop to render all messages
  _renderMessages = () => {
    return (this.props.messages.map((m, idx) => {
      if (m.user.username === this.props.user.username) {
        return this._renderActive(m, idx);
      } else {
        return this._renderInactive(m, idx);
      }
    }))
  }

  // render other users messages
  _renderInactive = (m, idx) => (
    <div key={idx} className='message-item'>
              <div className='author-message-container'>
                <div className='message'>{m.text}</div>
                <div className='message-author'>{m.user.username}</div>
                <i style={{color: '#aad', opacity: '0.8'}}>{m.time}</i>
              </div>
            </div>
  )

  // render current users messages
  _renderActive = (m, idx) => (
    <div key={idx} className={'message-item active'}>
              <div className='author-message-container'>
                <div className='active-message message'>{m.text}</div>
                <div className='active-author message-author'>{m.user.username}</div>
                <i style={{color: '#aad', opacity: '0.8'}}>{m.time}</i>
              </div>
            </div>
  )
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }
  render() {
    return (
      <div className='message-log' id='log'>
        {this._renderMessages()}
        <div ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    );
  }
  
};

export default MessagesList;
