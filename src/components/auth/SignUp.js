import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../actions/user';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username || '',
      password: '',
      confirmPassword: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateConfirmPassword = this.validateConfirmPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errorMessage = '';
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.username.length && this.state.password.length && this.state.confirmPassword.length) {
      const userObj = {
        username: this.state.username,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      };
      this.props.dispatch(authActions.signUp(userObj))
      this.setState({ username: '', password: '', confirmPassword: ''});
    }
  }

  handleChange(event) {
    if (event.target.name === 'username') {
      this.setState({ username: event.target.value });
    }
    if (event.target.name === 'password') {
      this.setState({ password: event.target.value });
    }
    if (event.target.name === 'confirm-password') {
      this.setState({ confirmPassword: event.target.value });
    }
  }

  validateConfirmPassword() {
    if (this.state.confirmPassword.length > 0 && this.state.password.length > 0) {
      if (this.state.password === this.state.confirmPassword) {
        return 'success';
      }
      return 'error';
    }
  }
  render() {
    return (
      <div class="background">
        <div class="container">
          <div class="row flex-column justify-content-center align-items-center text-center">
            <div>
              <h3 id="time">Please Sign Up</h3>
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
                <input className='login-textbox' maxLength={20} type='password'
                  name='confirm-password'
                  onChange={this.handleChange}
                  value={this.state.confirmPassword}
                  placeholder='Enter password again'/> 
              </div>
              <div>
                <button
                  onClick={this.handleSubmit}
                  className='login-button'>Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.welcome,
  }
}
export default connect(mapStateToProps)(SignUp)
;
