import { connect } from 'react-redux';
import Directory from '../components/directory/directory';
import { fetchChannels } from '../actions/channel';
const mapStateToProps = state => ({
  user: state.user,
  channels: fetchChannels()
});

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
  }
  // return {
  //   fetchRoom: (id) => dispatch(fetchRoom(id)),
  //   fetchMessages: (id) => dispatch(fetchMessages(id))
  // };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory);
