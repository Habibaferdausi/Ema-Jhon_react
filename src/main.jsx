import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Component/Shop/Shop";
import Home from "./Component/Layout/Home";
import Orders from "./Component/Orders";
import Inventory from "./Component/inventory";
import Login from "./Component/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: () => fetch("products.json"),
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },

      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
