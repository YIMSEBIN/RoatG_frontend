import { createBrowserRouter } from "react-router-dom";
import { RouterPath } from "@src/routes/path";
import { AppInfoPage } from "@src/page/App/AppInfo/AppInfoPage";
import MainPage from "@src/page/Main/MainPage";
import { UpdateHistoryPage } from "@src/page/App/UpdateHistory/UpdateHistoryPage";
import { TopicPage } from "@src/page/App/Topic/TopicPage";
import { SentimentPage } from "@src/page/App/Sentiment/SentimentPage";
import AppPage from "@src/page/App/AppPage";

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
        ]
      }
    ],
  },
]);
