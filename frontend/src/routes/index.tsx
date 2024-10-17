import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouterPath } from "@src/routes/path";
import { AppInfoPage } from "@src/page/AppInfo/AppInfoPage";
import MainPage from "@src/page/Main/MainPage";
import { UpdateHistoryPage } from "@src/page/UpdateHistory/UpdateHistoryPage";
import { TopicPage } from "@src/page/Topic/TopicPage";
import { SentimentPage } from "@src/page/Sentiment/SentimentPage";

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    children: [
      {
        path: RouterPath.home,
        element: <MainPage />,
      },
      {
        path: RouterPath.appInfo,
        element: <AppInfoPage />,
      },
      {
        path: RouterPath.updateHistory,
        element: <UpdateHistoryPage />,
      },
      {
        path: RouterPath.topic,
        element: <TopicPage />,
      },
      {
        path: RouterPath.sentiment,
        element: <SentimentPage />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
