import Card from "@src/components/common/Card/Card";
import GraphList from "./Graph";
import { useParams } from "react-router-dom";
import { useGetTopicChart } from "@src/apis/hooks/useGetTopicGraph";
import { TopicChartProps } from "@src/types";

export default function GraphCard() {
  const { appId } = useParams();
  const { data: topicChart } = useGetTopicChart({ appId: Number(appId), sentiment: "pos", date: "2024-1" });
  const topicChartListData: TopicChartProps[] = topicChart;

  return (
    <Card style={{ display: "flex", margin: "20px 20px", padding: "30px 30px", minWidth: "1200px" }}>
      {topicChartListData && <GraphList topicChartListData={topicChartListData} />}
    </Card>
  );
}
