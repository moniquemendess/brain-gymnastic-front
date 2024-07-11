import App from "../App";
import { createBrowserRouter } from "react-router-dom";

import { LoginForm, RegisterForm } from "../components";
import { FeedContentPage } from "../pages";
import { CreateFeed } from "../pages/FeedLogic/CreateFeed";

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
        path: "/content",
        element: <FeedContentPage />,
      },
      {
        path: "/createfeed",
        element: <CreateFeed />,
      },
    ],
  },
]);
