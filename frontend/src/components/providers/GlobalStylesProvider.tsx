import { Global } from "@emotion/react";
import { globalStyle } from "@src/assets/styles/global";
import { ReactNode } from "react";

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <Global styles={globalStyle} />
      {children}
    </>
  );
}
