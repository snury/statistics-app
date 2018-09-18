import * as ActionTypes from "./constants";
import { Statistics } from "./conversion";

export const initialState = {
  statisticsData: []
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.LOAD_STATISTICS_DATA_SUCCESS:
      return {
        ...state,
        statisticsData: Statistics.serverToLocal(payload)
      };

    default:
      return state;
  }
}
