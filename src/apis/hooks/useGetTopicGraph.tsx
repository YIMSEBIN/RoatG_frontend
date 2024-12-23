import { useQuery } from "@tanstack/react-query";
import { clientInstance } from "../instance";
import { getDynamicAPIPath } from "../apiPath";

type RequestParams = {
  appId: number;
  sentiment: "pos" | "neg";
  date: string;
};

export const getTopicChartPath = ({ appId, sentiment, date }: RequestParams) =>
  `${getDynamicAPIPath.topicChart(appId, sentiment, date)}`;
const getTopicChart = async (param: RequestParams) => {
  const res = await clientInstance.get(getTopicChartPath(param));
  return res.data;
};

export const useGetTopicChart = (param: RequestParams) =>
  useQuery({
    queryKey: [getTopicChartPath, "getTopicChart"],
    queryFn: () => getTopicChart(param),
  });
