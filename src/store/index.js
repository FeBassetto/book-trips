import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'

import reducers from './reducer';
import Saga from "./saga";

const sagaMiddleware = createSagaMiddleware()

const enhancer = applyMiddleware(sagaMiddleware)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(enhancer)
)

sagaMiddleware.run(Saga)

export default store