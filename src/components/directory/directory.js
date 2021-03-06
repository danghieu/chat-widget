import React from "react";
// Components
import UserItem from './user_item.js';
import Channel from './channel';
// Actions
import { fetchChannel } from '../../actions/channel';
import { fetchMessages } from '../../actions/message';

class Directory extends React.Component {
  constructor(props) {
    super(props);
  }

  changeActiveChannel(channelId) {
    return new Promise(resolve => {
      const { socket, activeChannel } = this.props;
      if (activeChannel) {
        socket.emit('leave channel', activeChannel.name);
      }
      socket.emit('join channel', channelId);
    });
  }
  render() {
    
    const {error, loading, channels, user, dispatch } = this.props;
    let message;
    if (error) {
      message = <div>Error! {error.message}</div>;
    }

    if (loading) {
      message = <div>Loading...</div>;
    }

    const _handleClick = (e) => {
      let channelId = e.target.id;
      if (channelId) {
        this.changeActiveChannel(channelId)
          .then(dispatch(fetchChannel(channelId)))
          .then(dispatch(fetchMessages(channelId)))
      };
    }

    return (
      <div id='directory'>
        <UserItem user={user} dispatch ={dispatch}/>
        <div className='channel-list' onClick={_handleClick}>
          {message}
          {channels.map(channel => (
            <Channel channel={channel} id={channel.name} key={channel.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Directory;