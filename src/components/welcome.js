import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { welcomePage } from '../actions/user';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.textInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  handleChange(event) {
    if (event.target.name === 'email') {
      this.setState({ email: event.target.value });
    }
  }
  
  handleSignUp() {
    const { dispatch } = this.props;
    const email = this.state.email;
    dispatch(welcomePage(email));
    this.setState({ email: '' });
  }

  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="row flex-column justify-content-center align-items-center text-center">
            <div>
              <h1 id="time">12:00 AM</h1>
              <h3 id="day" className="display-5">Monday, January 01</h3>
              <h2 id="greeting">Wellcome to CES chat</h2>
            </div>
            <div>
              <input className='login-textbox' maxLength={20} type='text' name='email'
                ref={this.textInput} 
                onChange={this.handleChange}
                placeholder='Type in your email...'/>
              <div>
                <Link to="/signin">
                  <button className='login-button' onClick={this.handleSignUp}>Sign In</button>
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
