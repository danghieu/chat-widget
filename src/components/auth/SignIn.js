import React from 'react';
import { withRouter } from 'react-router-dom';
import { capitalize } from 'lodash';

class SignIn extends React.Component {
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
      <div class="background">
        <div class="container">
          <div class="row flex-column justify-content-center align-items-center text-center">
            <div>
              <h3 id="time">Please Sign In</h3>
            </div>
            <div>
              <div>
                <input className='login-textbox' maxLength={20} type='text' name='username'
                  ref={this.textInput} 
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder='Enter username'/>
              </div>
              <div>
                <input className='login-textbox' maxLength={20} type='password'
                  name='password'
                  value={this.state.password}
                  onChange={this.handleChange}
                  value={this.state.password}
                  placeholder='Enter password'/>
              </div>
              <div>
                <button
                  onClick={this.handleSubmit}
                  className='login-button'>Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
