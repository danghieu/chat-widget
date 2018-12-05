import { RECEIVE_CHANNELS } from '../actions/channel';


const ChannelReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CHANNELS:
      return action.channels;
    default:
      return state;
  }
};

export default ChannelReducer;
