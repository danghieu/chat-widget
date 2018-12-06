import {
  FETCH_MESSAGES_BEGIN,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  RECEIVE_MESSAGE
}  from '../actions/message';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function MessageReducer (
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_MESSAGES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.messages
      };

    case FETCH_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    case RECEIVE_MESSAGE:
      let items = state.items.slice(0)
      items.push(action.payload.message);
      state.items = items;
      console.log(state);
      return state;

    default:
      return state;
  }
}
