import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import history from "utils/history";
import rootReducer from "ducks/index";

const middleware = applyMiddleware(thunk, routerMiddleware(history));

export default initialState => createStore(
  rootReducer,
  initialState,
  middleware
);
