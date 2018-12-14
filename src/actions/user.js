import * as types from '../constants/ActionTypes';
import { Cookies }from 'react-cookie';
import history from '../history';

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
    const url = types.BACKEND_URL+'/api/sign_up';
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

function requestSignIn() {
  return {
    type: types.AUTH_SIGNIN
  }
}

function receiveSignIn(username) {
  const user = {
    name: username,
    id: Symbol(username)
  }
  return {
    type: types.AUTH_SIGNIN_SUCCESS,
    user
  }
}

export function signIn(user) {
  return dispatch => {
    dispatch(requestSignIn())
    const url = types.BACKEND_URL+'/api/sign_in';
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
        dispatch(receiveSignIn(user.username));
        history.push('/chat');
      }
    })
    .catch(error => {throw error});
  };
}

export function checkAuth() {
  const cookies = new Cookies();
  if (cookies.get('username')) {
    return true;
  }
  return false;
}

export function receiveAuth() {
  const cookies = new Cookies();
  const user = cookies.get('username');
  return {
    type: types.AUTH_LOAD_SUCCESS,
    user
  }
}

function requestSignOut() {
  return {
    type: types.AUTH_SIGNOUT
  }
}
function receiveSignOut() {
  return {
    type: types.AUTH_SIGNOUT_SUCCESS
  }
}

export function signOut() {
  return dispatch => {
    dispatch(requestSignOut())
    const url = types.BACKEND_URL+'/api/signout';
    return fetch(url)
      .then(response => {
        if(response.ok) {
          const cookies = new Cookies();
          cookies.remove('username')
          dispatch(receiveSignOut());
          history.push('/');
        }
      })
      .catch(error => {throw error});
  }
}