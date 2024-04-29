import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { FeedContent } from "../pages/FeedLogic/FeedContentPage";
import { LoginForm } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/content",
        element: <FeedContent />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  },
]);
