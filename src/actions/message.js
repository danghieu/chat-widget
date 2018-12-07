import messageApi from '../utils/message_api_util';

export const FETCH_MESSAGES_BEGIN = "FETCH_MESSAGESS_BEGIN";
export const FETCH_MESSAGES_SUCCESS = "FETCH_MESSAGES_SUCCESS";
export const FETCH_MESSAGES_FAILURE = "FETCH_MESSAGES_FAILURE";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

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

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  payload: { message }
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

export function addMessage(channelId, message, name, socket) {
  return dispatch => {
    return messageApi.addMessage(channelId, message, name)
      .then(addNewMessageSocket(socket, channelId, message, name));
  };
}

export function addNewMessageSocket(socket, channelId, message, name) {
	return (dispatch) => {
		let postData = {
        channelId: channelId,
        name: name,
        message:message
		  }
	    socket.emit('addMessage', postData)		
	}	
}