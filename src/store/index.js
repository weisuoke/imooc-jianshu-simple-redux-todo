import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'

import reducer from "./reducer";
import todoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);

// 创建了公共存储仓
const store = createStore(reducer, enhancer);

sagaMiddleware.run(todoSagas)

export default store;
