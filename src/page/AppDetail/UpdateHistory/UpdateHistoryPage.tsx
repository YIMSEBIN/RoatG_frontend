import Typo from "@src/components/common/Typo/Typo";
import GraphCard from "./GraphCard";
import ReviewCard from "@src/components/feature/Review/ReviewCard";

export const UpdateHistoryPage = () => {
  return (
    <div>
      <Typo bold style={{ margin: "40px 0 0 30px" }}>
        Update - Star Rate
      </Typo>
      <GraphCard />
      <Typo bold style={{ margin: "40px 0 0 30px" }}>
        Review
      </Typo>
      <ReviewCard />
    </div>
  );
};
