import React from 'react';
import { isEmpty } from 'lodash';

const ChannelInfo = ({ channel }) => {
  if (isEmpty(channel)) return <div className='channel-info-container'><p>Choose Channel</p></div>;
  return (
    <div className='channel-info-container'>
      <div className='channel-info-name'>{ channel.name }</div>
    </div>
  );
};

export default ChannelInfo;
