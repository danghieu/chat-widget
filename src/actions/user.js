import * as types from '../constants/ActionTypes';
import { Cookies }from 'react-cookie';
import history from '../history';

const BACKEND_URL= 'http://localhost:3000'
export const LOGIN_USER = 'LOGIN_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

// sync actions
export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export function welcomePage(username) {
  return {
    type: types.SAVE_USERNAME,
    username
  };
}

function receiveUser(username) {
  const newUser = {
    name: username,
    id: Symbol(username)
  }
  return {
    type: types.AUTH_SIGNUP_SUCCESS,
    newUser
  }
}

function requestSignUp() {
  return {
    type: types.AUTH_SIGNUP
  }
}

export function signUp(user) {
  return dispatch => {
    dispatch(requestSignUp())
    const url = BACKEND_URL+'/api/sign_up';
    return fetch(url, {
      method: 'post',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
      })
      .then(response => {
        if(response.ok) {
          const cookies = new Cookies();
          cookies.set('username', user.username, { path: '/' })
          dispatch(receiveUser(user.username));
          history.push('/chat');
        }
      })
      .catch(error => {throw error});
  };
}