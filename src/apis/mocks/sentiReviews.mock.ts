import { http, HttpResponse } from "msw";
import { SentiReviewAPIProps } from "@src/types";
import { getSentiReviewsPath } from "../hooks/useGetSentiReviews";

export const sentiReviewsMockHandler = [
  http.get(getSentiReviewsPath({ appId: 1, sentiId: 0 }), () => HttpResponse.json(REVIEW_DATA1)),
  http.get(getSentiReviewsPath({ appId: 1, sentiId: 1 }), () => HttpResponse.json(REVIEW_DATA2)),
  http.get(getSentiReviewsPath({ appId: 1, sentiId: 2 }), () => HttpResponse.json(REVIEW_DATA3)),
];

const REVIEW_DATA1: SentiReviewAPIProps[] = [
  {
    date: new Date("2024-07-31T05:02:03.000+00:00"),
    content: "설치 했더니 전 서버 생성제한 어이가 없음",
  },
  {
    date: new Date("2024-07-30T23:02:07.000+00:00"),
    content:
      "월일부터 일 현재까지 던전 시간 무한 버그발생 제재 내역없는게임 일반유저와 버그악용유저 차이 많이나게된 게임",
  },
];

const REVIEW_DATA2: SentiReviewAPIProps[] = [
  {
    date: new Date("2024-07-30T20:56:18.000+00:00"),
    content: "소문 듣고 한번 해볼까 싶어서 깔았는데 전 서버 생성제한임그러케하시면아니되옵니다 운영장님",
  },
  {
    date: new Date("2024-07-30T14:39:51.000+00:00"),
    content:
      "일단 무과금으로 즐기는 것은 무기렙 이 끝입니다 렙올라 갈수록 과금을 할수 밖에 없게 살계되어 있는 게임 입니다 마지막 무기 렙이 활에 셋 이정도로도 렙 몹 잡기 힘든니다 그리고 무과금은 시간 풀로 오토 돌려도 과금러 따라가기 힘든 게임 입니다",
  },
];

const REVIEW_DATA3: SentiReviewAPIProps[] = [
  {
    date: new Date("2024-07-30T22:17:29.000+00:00"),
    content: "재밌습니다 정책만 현 상태 유지 해주시면 오래할것 같네요",
  },
  {
    date: new Date("2024-07-30T20:56:18.000+00:00"),
    content:
      "저렙 유저들을 위한 파티형 던전이 있었으면 함  이런류에 게임들이 모두 그러하듯 컨텐츠가 반복임 당장 신규 컨텐츠를 내라가 아니고 조금은 색다른 생활형 컨텐츠도 있었으면 함 게임은 상당히 재밌음",
  },
  {
    date: new Date("2024-07-30T14:39:51.000+00:00"),
    content: "컨텐츠도 많고 지루하지않어서 좋아요",
  },
  {
    date: new Date("2024-07-30T03:20:58.000+00:00"),
    content: "장기적으로 플레이하기 좋은 게임입니다 힐링되는 것도 있고",
  },
];

// const REVIEW_DATA4: SentiReviewAPIProps[] = [
//   {
//     date: new Date("2024-07-29T21:25:35.000+00:00"),
//     content: "게임하고싶은데 다 계정생성불가라고뜨면 겜을어케합니까",
//   },
//   {
//     date: new Date("2024-07-28T23:13:40.000+00:00"),
//     content: "게임성은 우수 운영은 지못미 점검보상은 사료개꿀",
//   },
//   {
//     date: new Date("2024-07-28T21:31:54.000+00:00"),
//     content: "좋습니다만 석이심힌니요",
//   },
//   {
//     date: new Date("2024-07-28T15:06:57.000+00:00"),
//     content: "평범하게 잘하고 있는 게임 입니다 점검도 많아서 접속시간이 적긴하지만 만족스럽지만은 않네요",
//   },
// ];
