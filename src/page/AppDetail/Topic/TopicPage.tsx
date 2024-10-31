import Typo from "@src/components/common/Typo/Typo";
import GraphCard from "./GraphCard";
import ReviewCard from "@src/components/feature/Review/ReviewCard";

export const TopicPage = () => {
  return (
    <div>
      <Typo bold style={{ margin: "40px 0 0 30px" }}>
        Review Topic
      </Typo>
      <GraphCard />
      <Typo bold style={{ margin: "40px 0 0 30px" }}>
        Review
      </Typo>
      <ReviewCard />
    </div>
  );
};
