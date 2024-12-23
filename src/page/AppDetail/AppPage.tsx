import Header from "@src/components/layout/Header/Header";
import Sidemenu from "@src/components/layout/Sidemenu/Sidemenu";
import { Outlet } from "react-router";

export default function AppPage() {
  return (
    <>
      <Header />
      <Sidemenu>
        <Outlet />
      </Sidemenu>
    </>
  );
}
