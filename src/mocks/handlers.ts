// import { delay, http } from "msw";
import { appInfoMockHandler } from "@src/apis/mocks/appInfo.mock";
import { ratingMockHandler } from "@src/apis/mocks/rating.mock";
import { reviewsMockHandler } from "@src/apis/mocks/reviews.mock";
import { sentimentMockHandler } from "@src/apis/mocks/sentiment.mock";
import { topicMockHandler } from "@src/apis/mocks/topicChart.mock";
import { updategMockHandler } from "@src/apis/mocks/update.mock";

export const handlers = [
  ...reviewsMockHandler,
  ...appInfoMockHandler,
  ...ratingMockHandler,
  ...topicMockHandler,
  ...sentimentMockHandler,
  ...updategMockHandler,
];
