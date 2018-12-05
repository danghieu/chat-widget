import { connect } from 'react-redux';
import Login from '../components/login/login';
import { receiveCurrentUser } from '../actions/user';

const mapStateToProps = state => ({
  currentUser: state.user
});

const mapDispatchToProps = dispatch => ({
  loginUser: (user) => dispatch(receiveCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
