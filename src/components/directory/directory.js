import React from 'react';

// Components
import UserItem from './user_item.js';
import Channel from './channel';
// class Directory extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.user = props.user;
//     this.channels = [
//       {"name":"channel 1","id":0},
//       {"name":"channel 2","id":1},
//       {"name":"channel 3","id":2}
//     ];
    
//     console.log(this.channels);
//   }

//   render() {
//     return (
//       <div id='directory'>
//         <UserItem user={this.user} />
//         <div className='channel-list'>
//           {this.channels.map(channel => (
//             <Channel channel={channel} id={channel.id} key={channel.id} />
//           ))}
//         </div>
//       </div>
//     )
//   }
// }
const Directory = ({ channels, fetchChannel, user, fetchMessages }) => {
  console.log(channels);
  return (
    <div id='directory'>
      <UserItem user={user} />
      <div className='channel-list'>
        {channels.map(channel => (
          <Channel room={channel} id={channel.id} key={channel.id} />
        ))}
      </div>
    </div>
  )
}

export default Directory;
