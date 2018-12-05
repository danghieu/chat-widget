import { combineReducers } from 'redux';
import UserReducer from './user';
import ChannelReducer from './channel';

export default combineReducers({
  user: UserReducer,
  channel: ChannelReducer
});
