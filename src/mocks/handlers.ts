// import { delay, http } from "msw";
import { appInfoMockHandler } from "@src/apis/mocks/appInfo.mock";
import { ratingMockHandler } from "@src/apis/mocks/rating.mock";
import { topicReviewsMockHandler } from "@src/apis/mocks/topicReviews.mock";
import { sentimentMockHandler } from "@src/apis/mocks/sentiment.mock";
import { topicMockHandler } from "@src/apis/mocks/topicChart.mock";
import { updategMockHandler } from "@src/apis/mocks/update.mock";
import { sentiReviewsMockHandler } from "@src/apis/mocks/sentiReviews.mock";

export const handlers = [
  ...topicReviewsMockHandler,
  ...appInfoMockHandler,
  ...ratingMockHandler,
  ...topicMockHandler,
  ...sentimentMockHandler,
  ...updategMockHandler,
  ...sentiReviewsMockHandler,
];
