import messageApi from '../utils/message_api_util';
import * as types from '../constants/ActionTypes';
import moment from 'moment';

const BACKEND_URL= 'http://localhost:3000';

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
    const url = BACKEND_URL + `/api/messages/${channel}`;
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveMessages(json, channel)))
      .catch(error => {throw error});
  }
}