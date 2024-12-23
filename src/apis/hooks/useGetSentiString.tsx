import { useQuery } from "@tanstack/react-query";
import { clientInstance } from "../instance";
import { getDynamicAPIPath } from "../apiPath";

type RequestParams = {
  appId: number;
  date: string;
};

export const getSentiStringPath = ({ appId, date }: RequestParams) => `${getDynamicAPIPath.sentiString(appId, date)}`;
const getSentiString = async (param: RequestParams) => {
  const res = await clientInstance.get(getSentiStringPath(param));
  return res.data;
};

export const useGetSentiString = (param: RequestParams) => {
  return useQuery({
    queryKey: [param, "getSentiString"],
    queryFn: () => getSentiString(param),
  });
};
