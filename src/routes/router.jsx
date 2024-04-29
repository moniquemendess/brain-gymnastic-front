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
        path: "/content",
        element: <FeedContent />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  },
]);
