import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/home/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./components/checkout/Checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "checkout",
    element: (
      <>
        <Navbar />
        <Checkout />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
