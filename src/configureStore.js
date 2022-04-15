import { createStore, compose } from 'redux';
import createRootReducer from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState) => {
  const store = createStore(createRootReducer(), preloadedState, composeEnhancers());

  return store;
};

export default configureStore;
