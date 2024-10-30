import { ReactNode } from "react";
import Header from "./Header/Header";
import Sidemenu from "./Sidemenu/Sidemenu";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Sidemenu>{children}</Sidemenu>
    </>
  );
}
