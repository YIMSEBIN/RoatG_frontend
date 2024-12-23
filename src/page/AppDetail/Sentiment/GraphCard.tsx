import "chart.js/auto";
import styled from "@emotion/styled";
import SentiCountGraph from "./SentiCountGraph";
import SentiAvgGraph from "./SentiAvgGraph";
import SentiStringGraph from "./SentiStringGraph";
import { useParams } from "react-router-dom";

export default function GraphCard() {
  const { appId } = useParams();
  const id = Number(appId);
  const date = localStorage.getItem("monthChoice") || "2024-1";

  return (
    <Wrapper>
      <SentiCountGraph appId={id} date={date} />
      <SentiAvgGraph appId={id} />
      <SentiStringGraph appId={id} date={date} />
    </Wrapper>
  );
}

const Wrapper = styled("div")(() => ({ display: "flex" }));
