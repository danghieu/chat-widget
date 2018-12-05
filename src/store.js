import { createStore } from 'redux';
import rootReducer from './reducers/root';
import enhancers from './middleware/enhancers';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    enhancers
  )
);

export default configureStore;
