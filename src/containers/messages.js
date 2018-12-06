import { connect } from 'react-redux';
import Messages from '../components/chat/messages';

const mapStateToProps = state => ({
  channel: state.currentChannel,
  messages: state.message.items,
  loading: state.message.loading,
  error: state.message.error,
  user: state.user,
});



export default connect(
  mapStateToProps
)(Messages);
