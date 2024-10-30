import { createBrowserRouter } from "react-router-dom";
import { RouterPath } from "@src/routes/path";
import { AppInfoPage } from "@src/page/AppDetail/AppInfo/AppInfoPage";
import MainPage from "@src/page/Main/MainPage";
import { UpdateHistoryPage } from "@src/page/AppDetail/UpdateHistory/UpdateHistoryPage";
import { TopicPage } from "@src/page/AppDetail/Topic/TopicPage";
import AppPage from "@src/page/AppDetail/AppPage";
import { SentimentPage } from "@src/page/AppDetail/Sentiment/SentimentPage";

export const router = createBrowserRouter([
  {
    path: RouterPath.root,
    children: [
      {
        path: RouterPath.home,
        element: <MainPage />,
      },
      {
        path: RouterPath.app,
        element: <AppPage />,
        children: [
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
    ],
  },
]);
