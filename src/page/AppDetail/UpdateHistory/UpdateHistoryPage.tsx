import Typo from "@src/components/common/Typo/Typo";
import GraphCard from "./GraphCard";
import UpdateCard from "./UpdateCard";

export const UpdateHistoryPage = () => {
  return (
    <div>
      <Typo bold style={{ margin: "40px 0 0 30px" }}>
        Update - Star Rate
      </Typo>
      <GraphCard />
      <Typo bold style={{ margin: "40px 0 0 30px" }}>
        Release Note
      </Typo>
      <UpdateCard />
    </div>
  );
};
