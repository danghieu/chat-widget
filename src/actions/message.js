import messageApi from '../utils/message_api_util';
import * as types from '../constants/ActionTypes';
import moment from 'moment';

function requestMessages() {
  return {
    type: types.LOAD_MESSAGES
  }
}

function receiveMessages(json, channel) {
  const date = moment().format('lll');
  return {
    type: types.LOAD_MESSAGES_SUCCESS,
    json,
    channel,
    date
  }
}

export function fetchMessages(channel) {
  return dispatch => {
    dispatch(requestMessages())
    const url = types.BACKEND_URL + `/api/messages/${channel}`;
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveMessages(json, channel)))
      .catch(error => {throw error});
  }
}

export function receiveMessage(message) {
  return {
    type: types.RECEIVE_MESSAGE,
    message
  };
}