import { useQuery } from "@tanstack/react-query";
import { clientInstance } from "../instance";
import { getDynamicAPIPath } from "../apiPath";

type RequestParams = {
  appId: number;
  date: string;
};

export const getSentiCountPath = ({ appId, date }: RequestParams) => `${getDynamicAPIPath.sentiCount(appId, date)}`;
const getSentiCount = async (param: RequestParams) => {
  const res = await clientInstance.get(getSentiCountPath(param));
  return res.data;
};

export const useGetSentiCount = (param: RequestParams) => {
  return useQuery({
    queryKey: [param, "getSentiCount"],
    queryFn: () => getSentiCount(param),
  });
};
