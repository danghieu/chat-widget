import { connect } from 'react-redux';
import Directory from '../components/directory/directory';

const mapStateToProps = state => ({
  rooms: state.rooms,
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {}
  // return {
  //   fetchRoom: (id) => dispatch(fetchRoom(id)),
  //   fetchMessages: (id) => dispatch(fetchMessages(id))
  // };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory);
