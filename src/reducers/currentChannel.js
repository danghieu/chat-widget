import { RECEIVE_CHANNEL} from '../actions/channel';

import { merge } from 'lodash';

const CurrentChannelReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CHANNEL:
      let newState = merge({}, state, action.payload.channel);
      newState.users = action.payload.channel.users;
      return newState;
    default:
      return state;
  }
};


export default CurrentChannelReducer;
