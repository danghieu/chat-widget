import { connect } from 'react-redux';
import Messages from '../components/messages/messages';
import { addMessage, receiveMessage } from '../actions/message';

const mapStateToProps = state => ({
  channel: state.currentChannel,
  messages: state.message.items,
  loading: state.message.loading,
  error: state.message.error,
  user: state.user
});
const mapDispatchToProps = dispatch => {
  return {
    addMessage: (channelId, message, name, socket) => dispatch(addMessage(channelId, message, name, socket)),
    receiveMessage: (message) => dispatch(receiveMessage(message))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
