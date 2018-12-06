import React from "react";
import { fetchChannels } from "../../actions/channel";

// Components
import UserItem from './user_item.js';
import Channel from './channel';

class Directory extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchChannels());
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

    return (
      <div id='directory'>
        
        <UserItem user={user} />
        <div className='channel-list'>
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