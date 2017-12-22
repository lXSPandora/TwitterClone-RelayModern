import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducers from '../redux/reducers/index';

const Store = createStore(reducers, applyMiddleware(logger));

export default Store;
