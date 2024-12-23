// Graph.tsx
import React, { useContext, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import List from "@src/components/common/List/List";
import { TopicChartAPIProps } from "@src/types";
import Card from "@src/components/common/Card/Card";
import styled from "@emotion/styled";
import { TopicContext, TopicContextType } from "./TopicPage";

const options = {
  maintainAspectRatio: true, // 캔버스의 가로세로 비율 유지 여부
  aspectRatio: 1.5, // maintainAspectRatio가 true일 때 사용되는 비율
  indexAxis: "y" as const,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function GraphList({ topicChartListData }: { topicChartListData: TopicChartAPIProps[] }) {
  const context = useContext(TopicContext);

  if (!context) {
    throw new Error("MyConsumer must be used within a MyProvider");
  }

  const { setValue: setTopic }: TopicContextType = context;

  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null);

  const handleCardClick = (topicId: number) => {
    setSelectedTopicId(topicId);
    localStorage.setItem("currentTopic", String(topicId));
    setTopic(String(topicId));
  };

  return (
    <Wrapper>
      <List
        items={topicChartListData.map((data) => ({
          labels: data.representationWordAsList.map((item) => item.topic),
          datasets: [
            {
              data: data.representationWordAsList.map((item) => item.score),
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
              ],
              borderWidth: 1,
              hoverOffset: 4,
            },
          ],
          topicId: data.topicId,
        }))}
        renderItem={({ topicId, labels, datasets }) => (
          <Card
            key={topicId}
            style={{
              display: "flex",
              margin: "20px 0 0 20px",
              padding: "20px 20px",
              border: selectedTopicId === topicId ? "3px solid #4f75ff" : "1px solid grey", // 선택된 카드에 특별한 테두리 적용
              backgroundColor: selectedTopicId === topicId ? "#e6f7ff" : "", // 선택된 카드에 배경색 변경
              cursor: "pointer",
            }}
            onClick={() => handleCardClick(topicId)}
          >
            <Bar data={{ labels, datasets }} options={options} style={{ width: "250px" }} />
          </Card>
        )}
      />
    </Wrapper>
  );
}

const Wrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "1200px",
  minWidth: "1200px",
}));
