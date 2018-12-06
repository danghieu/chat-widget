import {
  FETCH_CHANNELS_BEGIN,
  FETCH_CHANNELS_SUCCESS,
  FETCH_CHANNELS_FAILURE
}  from '../actions/channel';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function ChannelReducer (
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_CHANNELS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CHANNELS_SUCCESS:

      return {
        ...state,
        loading: false,
        items: action.payload.channels
      };

    case FETCH_CHANNELS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}
