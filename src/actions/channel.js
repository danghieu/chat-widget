import channelApi from '../utils/channel_api_util';

export const FETCH_CHANNELS_BEGIN = "FETCH_CHANNELS_BEGIN";
export const FETCH_CHANNELS_SUCCESS = "FETCH_CHANNELS_SUCCESS";
export const FETCH_CHANNELS_FAILURE = "FETCH_CHANNELS_FAILURE";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

export const fetchChannelsSuccess = channels => ({
  type: FETCH_CHANNELS_SUCCESS,
  payload: { channels }
});

export const fetchChannelsFailure = error => ({
  type: FETCH_CHANNELS_FAILURE,
  payload: { error }
});


export const fetchChannelsBegin = () => ({
  type: FETCH_CHANNELS_BEGIN
});

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  payload: { channel }
});

export function fetchChannel(id) {
  return dispatch => {
    return channelApi.fakeGetChannel(id)
      .then(json => {
        dispatch(receiveChannel(json.channel));
        return json.channel;
      })
  };
}

export function fetchChannels() {
  return dispatch => {
    dispatch(fetchChannelsBegin());
    return channelApi.fakeGetChannels()
      .then(json => {
        dispatch(fetchChannelsSuccess(json.channels));
        return json.channels;
      })
      .catch(error =>
        dispatch(fetchChannelsFailure(error))
      );
  };
}

