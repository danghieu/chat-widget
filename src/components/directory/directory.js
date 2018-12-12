import React from "react";
import { connect } from 'react-redux';
// Components
import UserItem from './user_item.js';
import Channel from './channel';

class Directory extends React.Component {
  constructor(props) {
    super(props);
  }

  changeActiveChannel(channelId) {
    return new Promise(resolve => {
      const { socket, activeChannel } = this.props;
      socket.emit('leave channel', activeChannel.id);
      socket.emit('join channel', channelId);
    });
  }
  render() {
    
    const {error, loading, channels, user } = this.props;
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
          .then(this.props.fetchChannel(channelId))
            .then(this.props.fetchMessages(channelId));
      };
    }

    return (
      <div id='directory'>
        
        <UserItem user={user} />
        <div className='channel-list' onClick={_handleClick}>
          {message}
          {channels.map(channel => (
            <Channel channel={channel} id={channel.id} key={channel.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  channels: state.channel.data,
  // loading: state.channel.loading,
  // error: state.channel.error,
  user: state.user.user,
  // activeChannel: state.currentChannel
});

const mapDispatchToProps = dispatch => {
  // return {
  //   fetchChannels: () => dispatch(fetchChannels()),
  //   fetchChannel: (id) => dispatch(fetchChannel(id)),
  //   fetchMessages: (id) => dispatch(fetchMessages(id))
  // };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory);
