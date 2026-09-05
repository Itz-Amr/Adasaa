import React from "react";
import Page404 from "./components/Page404/Page404";
import About from "./components/About/About";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog/:slug",
        element: <ArticleDetails />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={routers} />
    </React.Fragment>
  );
}

export default App;