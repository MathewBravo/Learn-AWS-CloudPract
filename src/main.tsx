import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";
import CreatingAnAccount from "./modules/mod1/CreatingAnAccount";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mod1",
    element: <CreatingAnAccount />,
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
