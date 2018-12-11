import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { welcomePage } from '../actions/user';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this.textInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  handleChange(event) {
    if (event.target.name === 'username') {
      this.setState({ username: event.target.value });
    }
  }
  
  handleSignUp() {
    const { dispatch } = this.props;
    const username = this.state.username;
    dispatch(welcomePage(username));
    this.setState({ username: '' });
  }

  render() {
    return (
      <div class="background">
        <div class="container">
          <div class="row flex-column justify-content-center align-items-center text-center">
            <div>
              <h1 id="time">12:00 AM</h1>
              <h3 id="day" class="display-5">Monday, January 01</h3>
              <h2 id="greeting">Wellcome to CES chat</h2>
            </div>
            <div>
              <input className='login-textbox' maxLength={20} type='text' name='username'
                ref={this.textInput} 
                onChange={this.handleChange}
                placeholder='Type in your username...'/>
              <div>
                <Link to="/signin">
                  <button className='login-button' onClick={this.signin}>Sign In</button>
                </Link>
                <Link to="/signup">
                  <button className='login-button' onClick={this.handleSignUp}>Sign Up</button>
                </Link>
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
      
  }
}

export default connect(mapStateToProps)(Welcome)
