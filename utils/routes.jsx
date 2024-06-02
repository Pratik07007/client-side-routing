import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../src/components/Layout";
import HomePage from "../src/Pages/HomePage";
import ProductDetails from "../src/Pages/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <h1>AboutPage</h1>,
      },
      {
        path: "products/:_id",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default routes;
