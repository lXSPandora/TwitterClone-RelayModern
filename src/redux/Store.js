import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducers from './reducers';

const Store = createStore(reducers, applyMiddleware(logger));

export default Store;
