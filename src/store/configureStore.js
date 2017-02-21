import { createStore } from 'redux';
import rootReducer from '../reducers';

export default (initialState) => {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      /* eslint-disable global-require */
      const nextRootReducer = require('../reducers').default;
      /* eslint-enable global-require */
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
