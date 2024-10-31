import Typo from "@src/components/common/Typo/Typo";
import GraphCard from "./GraphCard";
import ReviewCard from "../../../components/feature/Review/ReviewCard";

export const SentimentPage = () => {
  return (
    <div>
      <Typo bold style={{ margin: "40px 0 0 30px" }}>
        Sentiment Score
      </Typo>
      <GraphCard />
      <Typo bold style={{ margin: "40px 0 0 30px" }}>
        Review
      </Typo>
      <ReviewCard />
    </div>
  );
};
