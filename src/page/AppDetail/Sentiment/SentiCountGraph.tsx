import { useGetSentiCount } from "@src/apis/hooks/useGetSentiCount";
import Card from "@src/components/common/Card/Card";
import Loading from "@src/components/common/Loading";
import { SentiCountAPIProps } from "@src/types";
import { Bar } from "react-chartjs-2";
import { useContext } from "react";
import { ChartEvent, ActiveElement } from "chart.js";
import { SentiContext, SentiContextType } from "./SentimentPage";

export default function SentiCountGraph({ appId, date }: { appId: number; date: string }) {
  const context = useContext(SentiContext);

  if (!context) {
    throw new Error("SentiCountGraph must be used within a SentiProvider");
  }

  const { setSenti }: SentiContextType = context;

  const { data: graphData, isLoading } = useGetSentiCount({ appId, date });
  if (graphData && !isLoading) {
    const sentiCountData: SentiCountAPIProps = graphData;

    const labels = ["negative", "neutral", "positive"];
    const count = Object.values(sentiCountData);

    const data = {
      labels: labels,
      datasets: [
        {
          data: count,
          backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(255, 206, 86, 0.2)", "rgba(54, 162, 235, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(255, 206, 86, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      maintainAspectRatio: true,
      aspectRatio: 1,
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
      // onClick 위치를 올바르게 설정
      onClick: (event: ChartEvent, elements: ActiveElement[]) => {
        if (elements.length > 0) {
          const firstElementIndex = elements[0].index;
          setSenti(firstElementIndex); // 상태 업데이트 함수 호출
          console.log("Clicked element index:", firstElementIndex); // 클릭된 요소 인덱스 로깅
        }
      },
    };

    return (
      <Card style={{ display: "flex", margin: "20px 20px", padding: "30px 30px" }}>
        <Bar data={data} options={options} style={{ width: "300px" }} />
      </Card>
    );
  } else {
    return <Loading />;
  }
}
