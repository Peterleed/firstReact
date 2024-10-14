import "./index.css";

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/home.jsx";
import Details from "./pages/details/details.jsx";
import Blog from "./pages/blogs/blog.jsx";
import Error from "./error-page.jsx";
import Layout from "./pages/layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/blogs/details/:id",
        element: <Details />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
