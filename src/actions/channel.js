import channelApi from '../utils/channel_api_util';
import * as types from '../constants/ActionTypes';

const BACKEND_URL= 'http://localhost:3000';
export function fetchChannels(user) {
  return dispatch => {
    dispatch(requestChannels())
    const url = BACKEND_URL + `/api/channels`;
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveChannels(json)))
      .catch(error => {throw error});
  }
}

function requestChannels() {
  return {
    type: types.LOAD_CHANNELS
  }
}

function receiveChannels(json) {
  return {
    type: types.LOAD_CHANNELS_SUCCESS,
    json
  }
}