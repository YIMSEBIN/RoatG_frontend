import Typo from "@src/components/common/Typo/Typo";
import AppInfoCard from "./AppInfoCard";
import UpdateCard from "../../../components/feature/Update/UpdateCard";

export const AppInfoPage = () => {
  return (
    <div>
      <AppInfoCard />
      <Typo bold style={{ margin: "40px 0 0 30px" }}>
        Release Note
      </Typo>
      <UpdateCard />
    </div>
  );
};
