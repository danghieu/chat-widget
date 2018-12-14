import * as types from '../constants/ActionTypes';

const initialState = '';
export default function welcome(state = initialState, action) {
  switch (action.type) {

  case types.SAVE_EMAIL:
    return action.email;
  case types.AUTH_SIGNOUT_SUCCESS:
    return '';
  default:
    return state;
  }
}
