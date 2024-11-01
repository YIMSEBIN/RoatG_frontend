import Typo from "@src/components/common/Typo/Typo";
import AppInfoCard from "./AppInfoCard";
import UpdateCard from "../../../components/feature/Update/UpdateCard";
import { useGetAppInfo } from "@src/apis/hooks/useGetAppInfo";
import { useParams } from "react-router-dom";

export type AppInfoProps = {
  id: number;
  name: string;
  banner: string;
  publisher: string;
  ratingAvg: number;
  reviewCount: number;
  downloadCount: number;
  recentUpdate: Date;
  category: string;
};

export const AppInfoPage = () => {
  const { appId } = useParams();
  const { data: appInfo } = useGetAppInfo(Number(appId));
  const appInfoData: AppInfoProps = appInfo;

  return (
    <div>
      {appInfoData && <AppInfoCard appInfoData={appInfoData} />}
      <Typo bold style={{ margin: "40px 0 0 30px" }}>
        Release Note
      </Typo>
      <UpdateCard />
    </div>
  );
};
