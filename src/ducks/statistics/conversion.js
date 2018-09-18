import moment from "moment";

/* eslint-disable import/prefer-default-export */

export const Statistics = {
  serverToLocal: data => data.map(({ date, views }) => {
    return {
      x: moment(date).format("DD-MMM-YY"),
      y: views
    };
  })
};
