import GraphList from "./GraphList";
import { useParams } from "react-router-dom";
import { useGetTopicChart } from "@src/apis/hooks/useGetTopicGraph";
import { TopicChartAPIProps } from "@src/types";

export default function GraphCard() {
  const { appId } = useParams();
  const id = Number(appId);
  const date = localStorage.getItem("monthChoice") || "2024-1";
  const { data: topicChart } = useGetTopicChart({ appId: id, sentiment: "pos", date: date });
  const topicChartListData: TopicChartAPIProps[] = topicChart;

  return topicChartListData && <GraphList topicChartListData={topicChartListData} />;
}
