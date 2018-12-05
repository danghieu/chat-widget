import React from 'react';

// Components
import UserItem from './user_item.js';

const Directory = ({ rooms, fetchRoom, user, fetchMessages }) => {
  return (
    <div id='directory'>
      <UserItem user={user} />
      <div className='room-list'>
      </div>
    </div>
  )
}

export default Directory;
