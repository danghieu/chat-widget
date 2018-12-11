import * as types from '../constants/ActionTypes';
// import cookie from 'react-cookie';

export const LOGIN_USER = 'LOGIN_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

// sync actions
export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export function welcomePage(username) {
  console.log(username);
  return {
    type: types.SAVE_USERNAME,
    username
  };
}

function requestSignUp() {
  return {
    type: types.AUTH_SIGNUP
  }
}

export function signUp(user) {
  return dispatch => {
    console.log(user);
    // dispatch(requestSignUp())
    // return fetch('/api/sign_up', {
    //   method: 'post',
    //   headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(user)
    //   })
    //   .then(response => {
    //     if(response.ok) {
    //       cookie.save('username', user.username)
    //       dispatch(receiveUser(user.username));
    //       browserHistory.push('/chat');
    //     }
    //   })
    //   .catch(error => {throw error});
  };
}