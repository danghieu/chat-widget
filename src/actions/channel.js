import api from '../utils/channel_api_util';

export const FETCH_CHANNELS = "FETCH_CHANNELS";
export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

// async actions
export const fetchChannels = () => dispatch => {
  api.fetchChannels(channels => {
    dispatch(receiveChannels(channels))
  })
}

const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
})

