import { useQuery } from "@tanstack/react-query";
import { clientInstance } from "../instance";
import { getDynamicAPIPath } from "../apiPath";
type RequestParams = {
  page?: number;
  size?: number;
  appId: number;
  sentiId: number;
};

export const getSentiReviewsPath = ({ page = 0, size = 3, appId = 1, sentiId = 1 }: RequestParams) => {
  const url = getDynamicAPIPath.sentiReview(appId, sentiId);
  const params = new URLSearchParams();
  params.append("page", String(page));
  params.append("size", String(size));

  return `${url}?${params.toString()}`;
};

const getSentiReviews = async (params: RequestParams) => {
  const res = await clientInstance.get(getSentiReviewsPath(params));
  return res.data;
};

export const useGetSentiReviews = (params: RequestParams) => {
  return useQuery({
    queryKey: [params, "getSentiReviews"],
    queryFn: () => getSentiReviews(params),
  });
};
