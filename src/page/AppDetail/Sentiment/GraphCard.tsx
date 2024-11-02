import Card from "@src/components/common/Card/Card";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import styled from "@emotion/styled";

export default function GraphCard() {
  // Data configuration for the Pie chart
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    // X-axis labels for each day of the week
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

    // Dataset configuration for the Line chart
    datasets: [
      {
        // Label for the dataset
        label: "JavaScript Errors",

        // Configuration for the appearance of the line
        fill: false, // Do not fill the area under the line
        lineTension: 0.1, // Tension of the line curve

        // Styling for the line and data points
        // chartjs background color
        backgroundColor: "rgba(245,39,39,0.8)",
        borderColor: "rgba(245,39,39,0.8)",
        //... (other styling properties)

        // Data points representing JavaScript errors for each day
        data: [5, 6, 7, 8, 6, 5, 3], // The number of errors recorded for each day
      },
    ],
  };
  return (
    <Wrapper>
      <Card style={{ display: "flex", margin: "20px 20px", padding: "30px 30px" }}>
        <Bar data={data} style={{ width: "300px" }} />
      </Card>
      <Card style={{ display: "flex", margin: "20px 20px", padding: "30px 30px" }}>
        <Line data={lineData} style={{ width: "300px" }} />
      </Card>
      <Card style={{ display: "flex", margin: "20px 20px", padding: "30px 30px" }}>
        <Pie data={data} style={{ width: "300px" }} />
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled("div")(() => ({ display: "flex" }));
