import messageApi from '../utils/message_api_util';

export const FETCH_MESSAGES_BEGIN = "FETCH_MESSAGESS_BEGIN";
export const FETCH_MESSAGES_SUCCESS = "FETCH_MESSAGES_SUCCESS";
export const FETCH_MESSAGES_FAILURE = "FETCH_MESSAGES_FAILURE";

export const fetchMessagesSuccess = messages => ({
  type: FETCH_MESSAGES_SUCCESS,
  payload: { messages }
});

export const fetchMessagesFailure = error => ({
  type: FETCH_MESSAGES_FAILURE,
  payload: { error }
});


export const fetchMessagesBegin = () => ({
  type: FETCH_MESSAGES_BEGIN
});

export function fetchMessages(id) {
  return dispatch => {
    dispatch(fetchMessagesBegin());
    return messageApi.fakeGetMessages(id)
      .then(json => {
        dispatch(fetchMessagesSuccess(json.messages));
        return json.messages;
      })
      .catch(error =>
        dispatch(fetchMessagesFailure(error))
      );
  };
}
