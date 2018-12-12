import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../actions/user';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username || '',
      password: ''
    };
    this.usernameInput = React.createRef();
    this.passwordInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    if (this.state.username.length > 0) {
      this.passwordInput.current.focus();
    } else {
      this.usernameInput.current.focus();
    }
  }

  // save input field string in component state
  handleChange(event) {
    if (event.target.name === 'username') {
      this.setState({ username: event.target.value });
    }
    if (event.target.name === 'password') {
      this.setState({ password: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    if (this.state.username.length < 1) {
      this.refs.usernameInput.getInputDOMNode().focus();
    }
    if (this.state.username.length > 0 && this.state.password.length < 1) {
      this.refs.passwordInput.getInputDOMNode().focus();
    }
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      var userObj = {
        username: this.state.username,
        password: this.state.password
      };
      dispatch(authActions.signIn(userObj))
      this.setState({ username: '', password: ''});
    }
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
                  ref={this.usernameInput} 
                  value={this.state.username}
                  onChange={this.handleChange}
                  placeholder='Enter username'/>
              </div>
              <div>
                <input className='login-textbox' maxLength={20} type='password'
                  name='password'
                  ref={this.passwordInput}
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

function mapStateToProps(state) {
  return {
    username: state.welcome,
  }
}
export default connect(mapStateToProps)(SignIn)
