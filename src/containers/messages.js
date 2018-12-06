import { connect } from 'react-redux';
import Messages from '../components/chat/messages';
import { addMessage } from '../actions/message';

const mapStateToProps = state => ({
  channel: state.currentChannel,
  messages: state.message.items,
  loading: state.message.loading,
  error: state.message.error,
  user: state.user,
});
const mapDispatchToProps = dispatch => {
  return {
    addMessage: (channelId, message, name) => dispatch(addMessage(channelId, message, name)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
