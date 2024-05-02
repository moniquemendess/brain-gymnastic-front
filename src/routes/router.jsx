import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { FeedContent } from "../pages/FeedLogic/FeedContentPage";
import { LoginForm, RegisterForm } from "../components";

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
        element: <FeedContent />,
      },
    ],
  },
]);
