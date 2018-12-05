import React from 'react';

// steless Component to display a Channel name
const Channel = ({ channel, id }) => {
  return (
    <div className='channel' id={id}>
      <div className='channel-name' id={id}>
        { channel.name }
      </div>
    </div>
  );
};

export default Channel;
