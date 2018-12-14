import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../actions/user';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email || '',
      password: ''
    };
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    if (this.state.email.length > 0) {
      this.passwordInput.current.focus();
    } else {
      this.emailInput.current.focus();
    }
  }

  // save input field string in component state
  handleChange(event) {
    if (event.target.name === 'email') {
      this.setState({ email: event.target.value });
    }
    if (event.target.name === 'password') {
      this.setState({ password: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    if (this.state.email.length < 1) {
      this.refs.emailInput.getInputDOMNode().focus();
    }
    if (this.state.email.length > 0 && this.state.password.length < 1) {
      this.refs.passwordInput.getInputDOMNode().focus();
    }
    if (this.state.email.length > 0 && this.state.password.length > 0) {
      var userObj = {
        email: this.state.email,
        password: this.state.password
      };
      dispatch(authActions.signIn(userObj))
      this.setState({ email: '', password: ''});
    }
  }

  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="row flex-column justify-content-center align-items-center text-center">
            <div>
              <h3 id="time">Please Sign In</h3>
            </div>
            <div>
              <div>
                <input className='login-textbox' maxLength={20} type='text' name='email'
                  ref={this.emailInput} 
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder='Enter email'/>
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
    email: state.welcome,
  }
}
export default connect(mapStateToProps)(SignIn)
