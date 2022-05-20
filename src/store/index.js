import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
import { loadState, saveState } from "./localStorage";

import reducers from './reducer';
import Saga from "./saga";

const sagaMiddleware = createSagaMiddleware()
const enhancer = applyMiddleware(sagaMiddleware)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const localStoreState = loadState()

const store = createStore(
    reducers,
    localStoreState,
    composeEnhancers(enhancer)
)


sagaMiddleware.run(Saga)

store.subscribe(() => {
    saveState({reserve: store.getState().reserve})
})

export default store