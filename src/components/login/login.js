import React from 'react';
import { withRouter } from 'react-router-dom';
import { capitalize } from 'lodash';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
    this._login = this._login.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this)
  }

// allows login on key enter
  _handleKeyPress(event) {
    if (event.key === "Enter") {
      this._login();
    }
  }

// dispatches the login action and redirects to chat interface
  _login() {
    this.props.loginUser(capitalize(this.state.user));
    this.props.history.push('/chat');
  }

// save input field string in component state
  _handleChange(event) {
    let state = {};
    state[event.target.id] = event.target.value;
    this.setState(state);
  }

  render() {
    return (
      <div className='login-page'>
        <input className='login-textbox' maxLength={20} type='text' id='user' onKeyPress={this._handleKeyPress} onChange={this._handleChange} placeholder='Type in your username...'/>
        <button className='login-button' onClick={this._login}>Launch Chat</button>
      </div>
    );
  }
}

export default withRouter(Login);
