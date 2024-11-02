// import { delay, http } from "msw";
import { appInfoMockHandler } from "@src/apis/mocks/appInfo.mock";
import { ratingMockHandler } from "@src/apis/mocks/rating.mock";
import { reviewsMockHandler } from "@src/apis/mocks/reviews.mock";

export const handlers = [...reviewsMockHandler, ...appInfoMockHandler, ...ratingMockHandler];
