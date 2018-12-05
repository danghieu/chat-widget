import { createStore } from 'redux';
import rootReducer from './reducers/root';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState
  )
);

export default configureStore;
