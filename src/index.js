import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const BlogHome = lazy(() => import("./pages/Blog/BlogHome"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blogs",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <BlogHome />
      </Suspense>
    ),
    children: [
      {
        path: "/blogs/:id",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <BlogHome />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
