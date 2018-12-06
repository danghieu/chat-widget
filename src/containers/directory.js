import { connect } from 'react-redux';
import Directory from '../components/directory/directory';


const mapStateToProps = state => ({
  channels: state.channel.items,
  loading: state.channel.loading,
  error: state.channel.error,
  user: state.user
});


export default connect(
  mapStateToProps
)(Directory);
