import reducer from "./reducers/index";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootSaga from "./saga/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
// run saga
sagaMiddleware.run(rootSaga);

export default store;
