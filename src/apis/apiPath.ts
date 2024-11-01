export const APIPath = {
  topicChart: "/api/:appId/topicChart",
  topicChartReview: "/api/:appId/topicChart/pos/review/:month",
};

export const getDynamicAPIPath = {
  topicChart: (appId: number) => APIPath.topicChart.replace(":appId", appId.toString()),
  topicChartReview: (appId: number, month: number) =>
    APIPath.topicChartReview.replace(":appId", appId.toString()).replace(":month", month.toString()),
};
