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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function GraphCard({ appId }: { appId: string }) {
  const { data: rating, isLoading: isRatingLoading, isFetched: isRatingFetched } = useGetRating(Number(appId));

  console.log("Loading:", isRatingLoading, "Fetched:", isRatingFetched, "Data:", rating);
  const chartRef = useRef<ChartJS<"line">>(null);
  const [, setIndex] = useState(0);

  if (!isRatingLoading && isRatingFetched && Array.isArray(rating)) {
    // 여기서 rating은 배열로 확정됨
    const ratingDataSets: RatingProps[] = rating;

    const data = {
      labels: ratingDataSets.map((data) => data.date),
      datasets: [
        {
          data: ratingDataSets.map((data) => data.rate),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          pointBackgroundColor: ratingDataSets.map(() => "red"),
          pointRadius: 8,
        },
      ],
    };

    const getIndex = (event: MouseEvent<HTMLCanvasElement>) => {
      const { current: chart } = chartRef;
      if (chart) {
        const point = getElementAtEvent(chart, event)[0];
        if (point) {
          setIndex(point.index);
        }
      }
    };

    return (
      <Card style={{ display: "flex", margin: "20px 20px", padding: "30px 30px" }}>
        <Line options={options} onClick={getIndex} data={data} ref={chartRef} />
      </Card>
    );
  } else {
    return <Loading />;
  }
}
