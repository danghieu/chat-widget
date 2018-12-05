import { compose, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

// applies middleware thunk, allows actions to return functions
// saves the current user to localStorage in the browser
const enhancers = compose(
  applyMiddleware(thunk),
  persistState('user', {key: '_chatAppCurrentUser'})
);

export default enhancers;
