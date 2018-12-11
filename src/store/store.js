import { createStore } from 'redux';
import rootReducer from '../reducers/root';
import enhancers from '../middleware/enhancers';

const configureStore = (initialState) => (
  createStore(
    rootReducer,
    enhancers
  )
);

export default configureStore;
