import { useQuery } from "@tanstack/react-query";
import { clientInstance } from "../instance";
import { getDynamicAPIPath } from "../apiPath";

type RequestParams = {
  appId: number;
};

export const getUpdatePath = ({ appId }: RequestParams) => `${getDynamicAPIPath.update(appId)}`;
const getUpdate = async (param: RequestParams) => {
  const res = await clientInstance.get(getUpdatePath(param));
  return res.data;
};

export const useGetUpdate = (param: RequestParams) =>
  useQuery({
    queryKey: [getUpdatePath, "getUpdate"],
    queryFn: () => getUpdate(param),
  });
