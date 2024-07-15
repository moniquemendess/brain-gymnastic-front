import App from "../App";
import { createBrowserRouter } from "react-router-dom";

import { FeedFigure, LoginForm, RegisterForm } from "../components";
import { FeedContentPage } from "../pages";
import { CreateFeed } from "../pages/FeedLogic/CreateFeed";
import { FeedDetail } from "../pages/FeedLogic/FeedDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/contentPage",
        element: <FeedContentPage />,
      },
      {
        path: "/createfeed",
        element: <CreateFeed />,
      },
      {
        path: "/feedDetail/:id",
        element: <FeedDetail />,
      },
    ],
  },
]);
