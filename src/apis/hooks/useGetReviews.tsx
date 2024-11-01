import { useQuery } from "@tanstack/react-query";
import { clientInstance } from "../instance";
import { getDynamicAPIPath } from "../apiPath";

type RequestParams = {
  page?: number;
  size?: number;
  appId: number;
  month: number;
};

export const getReviewsPath = ({ page = 0, size = 2, appId, month }: RequestParams) => {
  const params = new URLSearchParams();
  params.append("page", String(page));
  params.append("size", String(size));

  return `${getDynamicAPIPath.topicChartReview(appId, month)}?${params.toString}`;
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
