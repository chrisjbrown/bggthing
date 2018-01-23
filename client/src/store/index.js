import {
  routerForBrowser,
  initializeCurrentLocation
} from 'redux-little-router';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import hotReducer from '../reducers/hot';
import searchReducer from '../reducers/search';
import boardgameReducer from '../reducers/boardgame';
import rootSaga from '../sagas';
import createSagaMonitor from './sagaMonitor';

const ROUTES = {
  '/': {},
  '/boardgame/:id': {},
  '/search/:id': {}
};

export const configureStore = (initialState = {}) => {
  const {
    reducer: routerReducer,
    enhancer: routerEnhancer,
    middleware: routerMiddleware
  } = routerForBrowser({ routes: ROUTES });

  // sagaMonitor configuration
  const sagaMonitorConfig = {
    level: 'debug',
    effectTrigger: true,
    effectResolve: true,
    actionDispatch: true
  };
  const sagaMiddleware = process.env.REACT_APP_SAGAMONITOR
    ? createSagaMiddleware({
        sagaMonitor: createSagaMonitor(sagaMonitorConfig)
      })
    : createSagaMiddleware();

  let middlewares = [sagaMiddleware, routerMiddleware];

  if (process.env.REACT_APP_REDUX_LOGGER) {
    middlewares.push(createLogger());
  }

  let composeEnhancers;
  if (process.env.REACT_APP_REDUX_DEVTOOLS) {
    /* eslint-disable */
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    /* eslint-enable */
  } else {
    composeEnhancers = compose;
  }

  const store = createStore(
    combineReducers({
      hotStore: hotReducer,
      searchStore: searchReducer,
      boardgameStore: boardgameReducer,
      router: routerReducer
    }),
    initialState,
    composeEnhancers(routerEnhancer, applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  const initialRouterState = store.getState().router;
  store.dispatch(initializeCurrentLocation(initialRouterState));

  return store;
};
