import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import * as authActions from '../../actions/user';

class UserItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 'less than 1',
      tickId: null
    };
    this._tick = this._tick.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

// initializes clock to track user duration
  componentDidMount() {
    let tickId = setInterval(this._tick, 60000);
    this.setState({tickId: tickId});
  }

// ensures setInterval does not continue counting
  componentWillUnmount() {
    clearInterval(this.state.tickId);
  }

  handleSignOut() {
    const { dispatch } = this.props;
    dispatch(authActions.signOut());
  }

// adds one minute to a user's online duration
  _tick() {
    if (this.state.minutes === 'less than 1') {
      this.setState({
        minutes: 1
      });
    } else {
      this.setState({
        minutes: this.state.minutes + 1
      });
    }
  }
  
  render() {
    const { user } = this.props;
    return (
      <div className='user-container'>
      <DropdownButton id="user-menu" bsSize="large" title={ user.username }>
        <MenuItem onSelect={this.handleSignOut}>Sign out</MenuItem>
      </DropdownButton>
      <div id='user-duration'>
        <i className="fa fa-circle"></i>Online for {this.state.minutes} minute(s)
      </div>
      </div>
    );
  }
}

export default UserItem;
