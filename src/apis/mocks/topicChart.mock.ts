import { http, HttpResponse } from "msw";
import { getTopicChartPath } from "../hooks/useGetTopicGraph";
import { TopicChartAPIProps } from "@src/types";

export const topicMockHandler = [
  http.get(getTopicChartPath({ appId: 1, sentiment: "pos", date: "2024-1" }), () => HttpResponse.json(TOPIC_DATA)),
];

const TOPIC_DATA: TopicChartAPIProps[] = [
  {
    topicId: 29,
    ranking: -1,
    representationWord:
      "스킬:0.8601-요용:0.8317-캐릭터:0.8215-특성:0.8146-역동:0.8064-재미:0.7950-방식:0.7875-요소:0.7799-로그인:0.7797-스타일:0.7761",
    representationWordAsList: [
      {
        topic: "스킬",
        score: "0.8601",
      },
      {
        topic: "요용",
        score: "0.8317",
      },
      {
        topic: "캐릭터",
        score: "0.8215",
      },
      {
        topic: "특성",
        score: "0.8146",
      },
    ],
  },
  {
    topicId: 30,
    ranking: 0,
    representationWord:
      "재미:1.0000-흥미:0.9009-기대:0.8215-스킬:0.8188-고급:0.8130-내맘대로:0.8033-추천:0.8007-만족:0.7991-최고:0.7968-퀄리티:0.7926",
    representationWordAsList: [
      {
        topic: "재미",
        score: "1.0000",
      },
      {
        topic: "흥미",
        score: "0.9009",
      },
      {
        topic: "기대",
        score: "0.8215",
      },
      {
        topic: "스킬",
        score: "0.8188",
      },
    ],
  },
  {
    topicId: 31,
    ranking: 1,
    representationWord:
      "조작:0.6414-커스텀:0.5948-회원가입:0.5821-몰입:0.5648-갤럭시:0.5622-궁수:0.5534-길드:0.5526-커마:0.5472-노가다:0.5370-퀘스트:0.5365",
    representationWordAsList: [
      {
        topic: "조작",
        score: "0.6414",
      },
      {
        topic: "커스텀",
        score: "0.5948",
      },
      {
        topic: "회원가입",
        score: "0.5821",
      },
      {
        topic: "몰입",
        score: "0.5648",
      },
    ],
  },
  {
    topicId: 32,
    ranking: 2,
    representationWord:
      "미남:0.9923-재미:0.6538-안정:0.5403-과금:0.5236-가능:0.5159-이크:0.4485-갯수:0.4093-무소:0.3925-요소:0.3657-성장:0.3531",
    representationWordAsList: [
      {
        topic: "미남",
        score: "0.9923",
      },
      {
        topic: "재미",
        score: "0.6538",
      },
      {
        topic: "안정",
        score: "0.5403",
      },
      {
        topic: "과금",
        score: "0.5236",
      },
    ],
  },
];
