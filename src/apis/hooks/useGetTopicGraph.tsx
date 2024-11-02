import { useQuery } from "@tanstack/react-query";
import { clientInstance } from "../instance";
import { getDynamicAPIPath } from "../apiPath";

export const getTopicChartPath = (app_id: number) => `${getDynamicAPIPath.topicChart(app_id)}`;
const getTopicChart = async (app_id: number) => {
  const res = await clientInstance.get(getTopicChartPath(app_id));
  return res.data;
};

export const useGetTopicChart = (app_id: number) =>
  useQuery({
    queryKey: [getTopicChartPath, "getTopicChart"],
    queryFn: () => getTopicChart(app_id),
  });
