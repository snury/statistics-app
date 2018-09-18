import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import history from "utils/history";
import rootReducer from "ducks/index";

const middleware = applyMiddleware(thunk, routerMiddleware(history));

const devTools = window.devToolsExtension ?
  window.devToolsExtension() : f => f;

export default initialState => createStore(
  rootReducer,
  initialState,
  compose(middleware, devTools)
);
