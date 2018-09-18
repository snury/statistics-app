import { loadStatistics as loadStatisticsAPI } from "utils/webAPIUtils";
import * as ActionTypes from "./constants";

/* eslint-disable import/prefer-default-export */

export function loadStatisticsData(id) {
  return async function(dispatch) {
    let response = null;

    try {
      response = await loadStatisticsAPI(id);
    } catch (err) {
      return dispatch({
        type:    ActionTypes.LOAD_STATISTICS_DATA_FAILURE,
        payload: err.response,
        error:   true
      });
    }

    return dispatch({
      type:    ActionTypes.LOAD_STATISTICS_DATA_SUCCESS,
      payload: response
    });
  };
}
