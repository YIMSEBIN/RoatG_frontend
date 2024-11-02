// import { delay, http } from "msw";
import { appInfoMockHandler } from "@src/apis/mocks/appInfo.mock";
import { reviewsMockHandler } from "@src/apis/mocks/reviews.mock";

export const handlers = [
  //   // 처음에 구글, cdn등의 경고가 뜨는걸 막기위해 해당 응답들에대한 지연추가
  //   http.all("*", async () => {
  //     await delay(100);
  //   }),
  ...reviewsMockHandler,
  ...appInfoMockHandler,
];
