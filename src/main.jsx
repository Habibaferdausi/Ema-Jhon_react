import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Component/Shop/Shop";
import Home from "./Component/Layout/Home";
import Orders from "./Component/Orders";
import Inventory from "./Component/inventory";
import Login from "./Component/Login";
import cartProductsLoader from "./Component/Loaders/CardProducts";
import Checkout from "./Component/Checkout";
import SignUp from "./Component/SignUp";
import AuthProvider from "./Component/AuthProvider";
import PrivetRoute from "./Component/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [
      {
        path: "/",
        element: <Shop></Shop>,
        loader: () => fetch("http://localhost:4000/totalProducts"),
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },

      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },

      {
        path: "checkout",
        element: (
          <PrivetRoute>
            {" "}
            <Checkout></Checkout>{" "}
          </PrivetRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
