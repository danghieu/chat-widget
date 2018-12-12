import {
  AUTH_LOAD,
  AUTH_LOAD_SUCCESS,
  AUTH_LOAD_FAIL,
  AUTH_SIGNIN,
  AUTH_SIGNIN_SUCCESS,
  AUTH_SIGNIN_FAIL,
  AUTH_SIGNUP,
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_FAIL
} from '../constants/ActionTypes';

const initialState = {
  loaded: false,
  user: {
    username: null,
    id: null,
    socketID: null
  }
};
const UserReducer = (state = initialState, action) => {
  switch(action.type) {
    case AUTH_LOAD:
      return {
        ...state,
        loading: true
      };
    case AUTH_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: { ...state.user, username: action.user }
      };
    case AUTH_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case AUTH_SIGNIN:
      return {
        ...state,
        signingIn: true
      };
    case AUTH_SIGNIN_SUCCESS:
      return {
        ...state,
        signingIn: false,
        user: {
          username: action.user.name,
          id: action.user.id
        }
      };
    case AUTH_SIGNIN_FAIL:
      return {
        ...state,
        signingIn: false,
        user: {
          username: null,
          id: null
        },
        signInError: action.error
      };
    case AUTH_SIGNUP:
      return {
        ...state,
        signingUp: true
      };
    case AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        user: {
          username: action.newUser.name,
          id: action.newUser.id,
          socketID: null
        }
      };
    case AUTH_SIGNUP_FAIL:
      return {
        ...state,
        user: {
          username: null,
          id: null
        }
      };
    default:
      return state;
  }
};

export default UserReducer;
