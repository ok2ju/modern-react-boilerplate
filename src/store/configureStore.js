import { createStore } from 'redux';
import rootReducer from '../reducers';

export default (initialState) => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  /* eslint-enable */

  return store;
};
