import { http, HttpResponse } from "msw";
import { getReviewsPath } from "../hooks/useGetReviews";

export const reviewsMockHandler = [
  http.get(getReviewsPath({ page: 1, size: 2, appId: 1, month: 1 }), () => HttpResponse.json(REVIEW_DATA)),
];

const REVIEW_DATA = [
  {
    reviewContent: "이건 댓글입니다.",
    reviewDate: new Date("2022-3-24"),
    reviewUser: "홍길동",
    reviewStar: 3,
  },
  {
    reviewContent: "이건 댓글입니다2",
    reviewDate: new Date("2022-3-2"),
    reviewUser: "홍길동2",
    reviewStar: 3,
  },
  {
    reviewContent: "이건 댓글입니다3",
    reviewDate: new Date("2022-3-2"),
    reviewUser: "홍길동2",
    reviewStar: 3,
  },
  {
    reviewContent: "이건 댓글입니다4",
    reviewDate: new Date("2022-3-2"),
    reviewUser: "홍길동2",
    reviewStar: 3,
  },
  {
    reviewContent: "이건 댓글입니다5",
    reviewDate: new Date("2022-3-2"),
    reviewUser: "홍길동2",
    reviewStar: 3,
  },
];
