import { combineReducers } from 'redux';
import UserReducer from './user';
import ChannelReducer from './channel';
import MessageReducer from './message';
import CurrentChannelReducer from './currentChannel';

export default combineReducers({
  user: UserReducer,
  channel: ChannelReducer,
  message: MessageReducer,
  currentChannel: CurrentChannelReducer
});
