import { useQuery } from "@tanstack/react-query";
import { clientInstance } from "../instance";
import { getDynamicAPIPath } from "../apiPath";

export const getAppInfoPath = (app_id: number) => `${getDynamicAPIPath.appInfo(app_id)}`;
const getAppInfo = async (app_id: number) => {
  const res = await clientInstance.get(getAppInfoPath(app_id));
  return res.data;
};

export const useGetAppInfo = (app_id: number) =>
  useQuery({
    queryKey: [getAppInfoPath],
    queryFn: () => getAppInfo(app_id),
  });
