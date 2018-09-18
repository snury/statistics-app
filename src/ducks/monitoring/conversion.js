const Actions = [
  { id: 0, name: "Deactivate" },
  { id: 1, name: "Activate" },
  { id: 2, name: "Status" }
];

/* eslint-disable import/prefer-default-export */

export const Monitoring = {
  serverToLocal: data => data.map(({
    id,
    name,
    status,
    total_views: totalViews,
    views_last_month: viewsLastMonth
  }) => {
    return {
      id,
      status,
      name,
      totalViews,
      viewsLastMonth,
      actions:   Actions,
      highlight: {
        cellCount: 0,
        color:     status === "ACTIVE" ? "#3B79B3" : "#777777"
      }
    };
  })
};
