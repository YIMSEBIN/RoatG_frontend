import { appInfoMockHandler } from "@src/apis/mocks/appInfo.mock";
import { reviewsMockHandler } from "@src/apis/mocks/reviews.mock";

export const handlers = [...reviewsMockHandler, ...appInfoMockHandler];
