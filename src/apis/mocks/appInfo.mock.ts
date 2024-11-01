import { http, HttpResponse } from "msw";
import { getAppInfoPath } from "../hooks/useGetAppInfo";
import { AppInfoProps } from "@src/page/AppDetail/AppInfo/AppInfoPage";

export const appInfoMockHandler = [http.get(getAppInfoPath(1), () => HttpResponse.json(APPINFO_DATA))];

const APPINFO_DATA: AppInfoProps = {
  id: 1,
  name: "쿠키런: 오븐브레이크",
  banner: "https://i.ibb.co/8MqN8P1/image-28.png",
  publisher: "DEVSISTERS",
  ratingAvg: 4.1,
  reviewCount: 100000,
  downloadCount: 1000000,
  recentUpdate: new Date("2024-1-1"),
  category: "롤플레잉",
};
