import { useGetSentiString } from "@src/apis/hooks/useGetSentiString";
import Card from "@src/components/common/Card/Card";
import Loading from "@src/components/common/Loading";
import { SentiStringAPIProps } from "@src/types";
import { Pie } from "react-chartjs-2";

const options = {
  maintainAspectRatio: true, // 캔버스의 가로세로 비율 유지 여부
  aspectRatio: 1, // maintainAspectRatio가 true일 때 사용되는 비율
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function SentiStringGraph({ appId, date }: { appId: number; date: string }) {
  const { data: graphData, isLoading } = useGetSentiString({ appId, date });

  if (graphData && !isLoading) {
    const sentiStringData: SentiStringAPIProps[] = graphData;
    console.log(sentiStringData);

    const labels = ["fear", "surprise", "angry", "sad", "neutral", "happiness", "disgust"];
    const count = sentiStringData.map((data: SentiStringAPIProps) => data.count);

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

    return (
      <Card style={{ display: "flex", margin: "20px 20px", padding: "30px 30px" }}>
        <Pie data={data} options={options} style={{ width: "300px" }} />
      </Card>
    );
  } else {
    return <Loading />;
  }
}
