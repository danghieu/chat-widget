import { connect } from 'react-redux';
import Directory from '../components/directory/directory';
import { fetchChannels, fetchChannel } from "../actions/channel";
import { fetchMessages } from "../actions/message";

const mapStateToProps = state => ({
  state: state,
  channels: state.channel.items,
  loading: state.channel.loading,
  error: state.channel.error,
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    fetchChannel: (id) => dispatch(fetchChannel(id)),
    fetchMessages: (id) => dispatch(fetchMessages(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory);
