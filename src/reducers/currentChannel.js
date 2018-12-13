import { RECEIVE_CHANNEL} from '../constants/ActionTypes';

const CurrentChannelReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_CHANNEL:
      return action.json
    default:
      return state;
  }
};


export default CurrentChannelReducer;
