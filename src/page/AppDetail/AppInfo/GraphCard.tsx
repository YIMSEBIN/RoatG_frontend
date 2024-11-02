import React, { useRef, MouseEvent, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { getElementAtEvent, Line } from "react-chartjs-2";
import Card from "@src/components/common/Card/Card";
import { RatingProps } from "@src/types";
import { useGetRating } from "@src/apis/hooks/useGetRating";
import Loading from "@src/components/common/Loading";
// import Typo from "@src/components/common/Typo/Typo";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {},
};

const datasets = [
  {
    temp: 35,
    date: "2022-09-05",
    state: "unstable",
  },
  {
    temp: 28,
    date: "2022-09-06",
    state: "stable",
  },
  {
    temp: 24,
    date: "2022-09-07",
    state: "unstable",
  },
  {
    temp: 25,
    date: "2022-09-08",
    state: "stable",
  },
  {
    temp: 27,
    date: "2022-09-09",
    state: "stable",
  },
];

type Props = {
  appId: string;
};

export default function GraphCard(appIdData: Props) {
  const { appId } = appIdData;
  const { data: rating, isLoading: isRatingLoading } = useGetRating(Number(appId));
  const ratingData: RatingProps = rating;
  console.log(ratingData);

  const chartRef = useRef<ChartJS<"line">>(null);
  const [, setIndex] = useState(0);
  const data = {
    labels: datasets.map((data) => data.date),
    datasets: [
      {
        data: datasets.map((data) => data.temp),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointBackgroundColor: datasets.map((data) => {
          if (data.state === "stable") {
            return "#a5d6a7";
          }
          return "red";
        }),
        pointRadius: 8,
      },
    ],
  };

  const getIndex = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;
    if (!chart) {
      return;
    }
    if (getElementAtEvent(chart, event)[0]) {
      setIndex(getElementAtEvent(chart, event)[0].index);
    }
  };

  if (!isRatingLoading) {
    return (
      <Card style={{ display: "flex", margin: "20px 20px", padding: "30px 30px" }}>
        {/* <Typo>'날짜' : {datasets[index].date}</Typo> */}
        <Line options={options} onClick={getIndex} data={data} ref={chartRef} />
      </Card>
    );
  } else {
    return <Loading />;
  }
}
