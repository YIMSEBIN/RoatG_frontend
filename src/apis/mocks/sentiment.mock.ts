import { http, HttpResponse } from "msw";
import { SentiAvgAPIProps, SentiCountAPIProps, SentiStringAPIProps } from "@src/types";
import { getSentiCountPath } from "../hooks/useGetSentiCount";
import { getSentiAvgPath } from "../hooks/useGetSentiAvg";
import { getSentiStringPath } from "../hooks/useGetSentiString";

export const sentimentMockHandler = [
  http.get(getSentiCountPath({ appId: 1, date: "2024-1" }), () => HttpResponse.json(SENTI_COUNT_DATA)),
  http.get(getSentiAvgPath({ appId: 1 }), () => HttpResponse.json(SENTI_AVG_DATA)),
  http.get(getSentiStringPath({ appId: 1, date: "2024-1" }), () => HttpResponse.json(SENTI_STRING_DATA)),
];

const SENTI_COUNT_DATA: SentiCountAPIProps = {
  negativeCount: 1293,
  neutralCount: 110,
  positiveCount: 1053,
};

const SENTI_AVG_DATA: SentiAvgAPIProps[] = [
  {
    year: "2024",
    month: "1",
    averageSentiment: -0.0633,
  },
  {
    year: "2024",
    month: "2",
    averageSentiment: -0.1357,
  },
];

const SENTI_STRING_DATA: SentiStringAPIProps[] = [
  {
    count: 35,
    emotion: 0,
  },
  {
    count: 1,
    emotion: 1,
  },
  {
    count: 187,
    emotion: 2,
  },
  {
    count: 34,
    emotion: 3,
  },
  {
    count: 28,
    emotion: 4,
  },
  {
    count: 139,
    emotion: 5,
  },
  {
    count: 44,
    emotion: 6,
  },
];
