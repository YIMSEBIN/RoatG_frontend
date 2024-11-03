import { useGetSentiAvg } from "@src/apis/hooks/useGetSentiAvg";
import Card from "@src/components/common/Card/Card";
import Loading from "@src/components/common/Loading";
import { SentiAvgAPIProps } from "@src/types";
import { Line } from "react-chartjs-2";

const options = {
  maintainAspectRatio: true, // 캔버스의 가로세로 비율 유지 여부
  aspectRatio: 1, // maintainAspectRatio가 true일 때 사용되는 비율
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function SentiAvgGraph({ appId }: { appId: number }) {
  const { data: graphData, isLoading } = useGetSentiAvg({ appId });

  if (graphData && !isLoading) {
    const sentiAvgData: SentiAvgAPIProps[] = graphData;

    const labels = sentiAvgData.map((data: SentiAvgAPIProps) => {
      return `${data.year}-${data.month}`;
    });
    const count = sentiAvgData.map((data: SentiAvgAPIProps) => data.averageSentiment);

    const data = {
      labels: labels,
      datasets: [
        {
          fill: false,
          lineTension: 0.1, // Tension of the line curve

          backgroundColor: "rgba(245,39,39,0.8)",
          borderColor: "rgba(245,39,39,0.8)",
          data: count,
        },
      ],
    };

    return (
      <Card style={{ display: "flex", margin: "20px 20px", padding: "30px 30px" }}>
        <Line data={data} options={options} style={{ width: "300px" }} />
      </Card>
    );
  } else {
    return <Loading />;
  }
}
