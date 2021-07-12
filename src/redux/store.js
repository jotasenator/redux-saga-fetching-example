import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from "./rootReducer";

import { onLoadPost } from "./sagas";

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

export const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(onLoadPost)
