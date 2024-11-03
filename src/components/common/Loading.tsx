import { SyncLoader } from "react-spinners";
import Typo from "./Typo/Typo";

export default function Loading() {
  return (
    <div style={{ margin: "10% 10%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <SyncLoader />
      <Typo style={{ marginTop: "20px" }}>잠시만 기다려주세요.</Typo>
    </div>
  );
}
