import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/store/reducer';

const devTools = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];
const enhancers = compose(...devTools);

const store = createStore(
  reducer,
  enhancers // mix of middlewares and extensions
);

export default store;
