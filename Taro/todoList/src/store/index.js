import { createStore, applyMiddleware } from 'redux';
import thunKMiddleware  from 'redux-thunk';
import { createLogger } from "redux-logger";

const middlewares = [
  thunKMiddleware,
  createLogger()
];

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
}