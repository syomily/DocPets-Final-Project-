// file index store untuk menginisialisasi middleware

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers, // file index.js dari folder reducer
  composeWithDevTools(applyMiddleware(sagaMiddleware)) // mengkoneksikan middleware dengan extensi browser
);
sagaMiddleware.run(sagas);

export default store;
