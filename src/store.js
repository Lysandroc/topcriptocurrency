import {Plataform} from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './reducers';

const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
    RootReducer, 
    compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop,
    )
);

export default Store;