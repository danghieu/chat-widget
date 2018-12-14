import * as types from '../constants/ActionTypes';
import * as Config from '../constants/Config';

import { Cookies }from 'react-cookie';
import history from '../history';

export const LOGIN_USER = 'LOGIN_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

// sync actions
export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export function welcomePage(email) {
  return {
    type: types.SAVE_EMAIL,
    email
  };
}

function receiveUser(email) {
  const newUser = {
    name: email,
    id: Symbol(email)
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
    const url = Config.API_URL.signIn;
    return fetch(url, {
      method: 'post',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
      })
      .then(response => {
        if(response.ok) {
          const cookies = new Cookies();
          cookies.set('email', user.email, { path: '/' })
          dispatch(receiveUser(user.email));
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

function receiveSignIn(user) {
  return {
    type: types.AUTH_SIGNIN_SUCCESS,
    user
  }
}

export function signIn(user) {
  return dispatch => {
    dispatch(requestSignIn())
    const url = Config.API_URL.signIn;
    return fetch(url, {
    method: 'post',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
    })
    .then(response => {
      if(response.ok) {
        const user = response.json();
        const cookies = new Cookies();
        cookies.set('user', user, { path: '/' })
        dispatch(receiveSignIn(user));
        history.push('/chat');
      }
    })
    .catch(error => {throw error});
  };
}

export function checkAuth() {
  const cookies = new Cookies();
  if (cookies.get('email')) {
    return true;
  }
  return false;
}

export function receiveAuth() {
  const cookies = new Cookies();
  const user = cookies.get('user');
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
          cookies.remove('email')
          dispatch(receiveSignOut());
          history.push('/');
        }
      })
      .catch(error => {throw error});
  }
}