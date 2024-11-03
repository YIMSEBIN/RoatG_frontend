import { http, HttpResponse } from "msw";
import { ReviewDataProps } from "@src/components/feature/Review/ReviewCard";
import { getTopicReviewsPath } from "../hooks/useGetTopicReviews";

export const reviewsMockHandler = [
  http.get(getTopicReviewsPath({ appId: 1, date: "2024-1", topicId: 29 }), () => HttpResponse.json(REVIEW_DATA1)),
  http.get(getTopicReviewsPath({ appId: 1, date: "2024-1", topicId: 30 }), () => HttpResponse.json(REVIEW_DATA2)),
  http.get(getTopicReviewsPath({ appId: 1, date: "2024-1", topicId: 31 }), () => HttpResponse.json(REVIEW_DATA3)),
  http.get(getTopicReviewsPath({ appId: 1, date: "2024-1", topicId: 32 }), () => HttpResponse.json(REVIEW_DATA4)),
];

const REVIEW_DATA1: ReviewDataProps[] = [
  {
    reviewId: 2687,
    userName: "REVIEW_DATA1",
    date: new Date("2024-07-31T05:02:03.000+00:00"),
    content: "점검의 정상화 로드나인 입니다",
    rating: 5,
    thumbs: 0,
  },
  {
    reviewId: 2692,
    userName: "박종복",
    date: new Date("2024-07-30T23:02:07.000+00:00"),
    content: "롤플레잉의 정석 그래픽도 좋고 스킬도 화려함",
    rating: 5,
    thumbs: 0,
  },
];

const REVIEW_DATA2: ReviewDataProps[] = [
  {
    reviewId: 2698,
    userName: "REVIEW_DATA2",
    date: new Date("2024-07-30T20:56:18.000+00:00"),
    content:
      "건의사항  퀘 몹 존으로 자동이동시 퀘 몹은 여러군데 분포되있음에도 한군데만 포인트 찍힘 그래서 유저가 한군데에 집중 포화 상태  수동으로 컨트롤 할시 이동이 살짝 밀리는 현상이 있음  저렙 유저들을 위한 파티형 던전이 있었으면 함  이런류에 게임들이 모두 그러하듯 컨텐츠가 반복임 당장 신규 컨텐츠를 내라가 아니고 조금은 색다른 생활형 컨텐츠도 있었으면 함 게임은 상당히 재밌음",
    rating: 5,
    thumbs: 10,
  },
  {
    reviewId: 2705,
    userName: "박성민",
    date: new Date("2024-07-30T14:39:51.000+00:00"),
    content: "무난하게 플레이 할 만 하네요 빠른 진행도 괜찮구요",
    rating: 4,
    thumbs: 1,
  },
];

const REVIEW_DATA3: ReviewDataProps[] = [
  {
    reviewId: 2693,
    userName: "REVIEW_DATA3",
    date: new Date("2024-07-30T22:17:29.000+00:00"),
    content: "의 재미를 극대화하고 무소과금도 파밍을 통해서 게임을 적당히 즐길수 있는 환경이 맘에 듭니다",
    rating: 5,
    thumbs: 0,
  },
  {
    reviewId: 2698,
    userName: "정진우",
    date: new Date("2024-07-30T20:56:18.000+00:00"),
    content:
      "건의사항  퀘 몹 존으로 자동이동시 퀘 몹은 여러군데 분포되있음에도 한군데만 포인트 찍힘 그래서 유저가 한군데에 집중 포화 상태  수동으로 컨트롤 할시 이동이 살짝 밀리는 현상이 있음  저렙 유저들을 위한 파티형 던전이 있었으면 함  이런류에 게임들이 모두 그러하듯 컨텐츠가 반복임 당장 신규 컨텐츠를 내라가 아니고 조금은 색다른 생활형 컨텐츠도 있었으면 함 게임은 상당히 재밌음",
    rating: 5,
    thumbs: 10,
  },
  {
    reviewId: 2705,
    userName: "박성민",
    date: new Date("2024-07-30T14:39:51.000+00:00"),
    content: "무난하게 플레이 할 만 하네요 빠른 진행도 괜찮구요",
    rating: 4,
    thumbs: 1,
  },
  {
    reviewId: 2707,
    userName: "김재인",
    date: new Date("2024-07-30T03:20:58.000+00:00"),
    content: "장기적으로 플레이하기 좋은 게임입니다 힐링되는 것도 있고",
    rating: 5,
    thumbs: 1,
  },
];

const REVIEW_DATA4: ReviewDataProps[] = [
  {
    reviewId: 2711,
    userName: "REVIEW_DATA4",
    date: new Date("2024-07-29T21:25:35.000+00:00"),
    content: "게임하고싶은데 다 계정생성불가라고뜨면 겜을어케합니까",
    rating: 5,
    thumbs: 1,
  },
  {
    reviewId: 2720,
    userName: "김학찬",
    date: new Date("2024-07-28T23:13:40.000+00:00"),
    content: "게임성은 우수 운영은 지못미 점검보상은 사료개꿀",
    rating: 4,
    thumbs: 0,
  },
  {
    reviewId: 2725,
    userName: "이동철",
    date: new Date("2024-07-28T21:31:54.000+00:00"),
    content: "좋습니다만 석이심힌니요",
    rating: 5,
    thumbs: 0,
  },
  {
    reviewId: 2730,
    userName: "김봉주",
    date: new Date("2024-07-28T15:06:57.000+00:00"),
    content: "평범하게 잘하고 있는 게임 입니다 점검도 많아서 접속시간이 적긴하지만 만족스럽지만은 않네요",
    rating: 4,
    thumbs: 0,
  },
];
