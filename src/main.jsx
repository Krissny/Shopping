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
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
