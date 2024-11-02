import { useQuery } from "@tanstack/react-query";
import { clientInstance } from "../instance";
import { getDynamicAPIPath } from "../apiPath";

type RequestParams = {
  appId: number;
};

export const getSentiAvgPath = ({ appId }: RequestParams) => `${getDynamicAPIPath.sentiAvg(appId)}`;
const getSentiAvg = async (param: RequestParams) => {
  const res = await clientInstance.get(getSentiAvgPath(param));
  return res.data;
};

export const useGetSentiAvg = (param: RequestParams) =>
  useQuery({
    queryKey: [getSentiAvgPath, "getSentiAvg"],
    queryFn: () => getSentiAvg(param),
  });
