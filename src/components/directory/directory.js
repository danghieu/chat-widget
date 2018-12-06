import React from "react";

// Components
import UserItem from './user_item.js';
import Channel from './channel';

class Directory extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchChannels();
    // this.props.fetchChannel(0);
    // console.log(this.props.state);
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
        this.props.fetchChannel(channelId)
          .then(this.props.fetchMessages(channelId))
            .then(_scroll());
      }
  
    }

    const _scroll = () => {
      let log = document.getElementById('log');
      log.scrollTop = log.scrollHeight;
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

export default Directory;