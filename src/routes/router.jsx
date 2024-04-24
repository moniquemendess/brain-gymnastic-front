import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { FeedContent } from "../pages/FeedLogic/FeedContent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/content",
        element: <FeedContent />,
      },
    ],
  },
]);
