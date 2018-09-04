import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/store/reducer';
import logger from './middlewares/logger';
import autoOff from './middlewares/autoOff';

const loggerMW = applyMiddleware(logger);
const autoOffMW = applyMiddleware(autoOff);

const devTools = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];
const enhancers = compose(loggerMW, autoOffMW, ...devTools);

const store = createStore(
  reducer,
  enhancers // mix of middlewares and extensions
);

export default store;
