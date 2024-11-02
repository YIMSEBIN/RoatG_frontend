import { useQuery } from "@tanstack/react-query";
import { clientInstance } from "../instance";
import { getDynamicAPIPath } from "../apiPath";

type RequestParams = {
  page?: number;
  size?: number;
  appId: number;
  date: string;
  topicId: number;
};

export const getReviewsPath = ({ page = 0, size = 3, appId = 1, date = "2024-1", topicId = 1 }: RequestParams) => {
  const url = getDynamicAPIPath.topicChartReview(appId, date, topicId);
  const params = new URLSearchParams();
  params.append("page", String(page));
  params.append("size", String(size));

  return `${url}?${params.toString()}`;
};
const getReviews = async (params: RequestParams) => {
  const res = await clientInstance.get(getReviewsPath(params));
  return res.data;
};

export const useGetReviews = (params: RequestParams) =>
  useQuery({
    queryKey: [getReviewsPath],
    queryFn: () => getReviews(params),
  });
