import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouterPath } from "@src/routes/path";
import { Detail } from "@src/page/Detail";
import { MainPage } from "@src/page/Main";

export const router = createBrowserRouter([
  {
    path: RouterPath.root,
    children: [
      {
        path: RouterPath.home,
        element: <MainPage />,
      },
      {
        path: RouterPath.detail,
        element: <Detail />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
