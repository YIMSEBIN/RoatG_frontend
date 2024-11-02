export const APIPath = {
  topicChart: "/api/:appId/topicChart",
  topicChartReview: "/api/:appId/topicReview/:year-month/:topicId",
  appInfo: "/api/meta/:appId",
};

export const getDynamicAPIPath = {
  topicChart: (appId: number) => APIPath.topicChart.replace(":appId", appId.toString()),
  appInfo: (appId: number) => APIPath.appInfo.replace(":appId", appId.toString()),
  topicChartReview: (appId: number, date: string, topicId: number) =>
    APIPath.topicChartReview
      .replace(":appId", appId.toString())
      .replace(":year-month", date)
      .replace(":topicId", topicId.toString()),
};
