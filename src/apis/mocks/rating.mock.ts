import { http, HttpResponse } from "msw";
import { getRatingPath } from "../hooks/useGetRating";
import { RatingProps } from "@src/types";

export const ratingMockHandler = [http.get(getRatingPath(1), () => HttpResponse.json(RATING_DATA))];

const RATING_DATA: RatingProps = {
  rates_list: [
    { date: "2024-07", rate: 2.74 },
    { date: "2024-08", rate: 2.11 },
  ],
};
