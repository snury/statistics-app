import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import monitoring from "./monitoring/reducer";
import statistics from "./statistics/reducer";

export default combineReducers({
  routing: routerReducer,
  monitoring,
  statistics
});
