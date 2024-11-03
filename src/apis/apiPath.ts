export const APIPath = {
  topicChart: "/api/:appId/topicChart/:sentiment/:year-month",
  topicChartReview: "/api/:appId/topicReview/:year-month/:topicId",
  appInfo: "/api/meta/:appId",
  rating: "/api/:appId/rating",
  sentiCount: "/api/:appId/count/sentimentScore/:year-month",
  sentiAvg: "/api/:appId/avgSentiment/month",
  sentiString: "/api/:appId/emotion/:year-month",
  sentiReview: "/api/:appId/sentiment/reviews/:sentiId",
  sentiEmotionReview: "/api/:appId/emotion/reviews/:emotionId",
  update: "/api/:appId/update",
};

export const getDynamicAPIPath = {
  topicChart: (appId: number, sentiment: "pos" | "neg", date: string) =>
    APIPath.topicChart
      .replace(":appId", appId.toString())
      .replace(":sentiment", sentiment)
      .replace(":year-month", date),
  appInfo: (appId: number) => APIPath.appInfo.replace(":appId", appId.toString()),
  topicChartReview: (appId: number, date: string, topicId: number) =>
    APIPath.topicChartReview
      .replace(":appId", appId.toString())
      .replace(":year-month", date)
      .replace(":topicId", topicId.toString()),
  rating: (appId: number) => APIPath.rating.replace(":appId", appId.toString()),
  sentiCount: (appId: number, date: string) =>
    APIPath.sentiCount.replace(":appId", appId.toString()).replace(":year-month", date),
  sentiAvg: (appId: number) => APIPath.sentiAvg.replace(":appId", appId.toString()),
  sentiString: (appId: number, date: string) =>
    APIPath.sentiString.replace(":appId", appId.toString()).replace(":year-month", date),
  sentiReview: (appId: number, sentiId: number) =>
    APIPath.sentiReview.replace(":appId", appId.toString()).replace(":sentiId", sentiId.toString()),
  sentiEmotionReview: (appId: number, emotionId: number) =>
    APIPath.sentiEmotionReview.replace(":appId", appId.toString()).replace(":emotionId", emotionId.toString()),
  update: (appId: number) => APIPath.update.replace(":appId", appId.toString()),
};
