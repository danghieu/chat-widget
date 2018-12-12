import { LOAD_CHANNELS, LOAD_CHANNELS_SUCCESS, LOAD_CHANNELS_FAIL } from '../constants/ActionTypes';

const initialState = {
  loaded: false,
  data: []
};

export default function ChannelReducer (
  state = initialState,
  action
) {
  switch (action.type) {
    case LOAD_CHANNELS:
      return {...state,
        loading: true
      };
    case LOAD_CHANNELS_SUCCESS:
      return {...state,
        loading: false,
        loaded: true,
        data: [...state.data, ...action.json]
      };
    case LOAD_CHANNELS_FAIL:
      return {...state,
        loading: false,
        loaded: false,
        error: action.error,
        data: [...state.data]
      };

    default:
      return state;
  }
}
