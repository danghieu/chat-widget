import { combineReducers } from 'redux';
import welcome from './welcome';
import UserReducer from './user';
import ChannelReducer from './channel';
import MessageReducer from './message';
import CurrentChannelReducer from './currentChannel';

export default combineReducers({
  welcome,
  user: UserReducer,
  channel: ChannelReducer,
  message: MessageReducer,
  currentChannel: CurrentChannelReducer
});
