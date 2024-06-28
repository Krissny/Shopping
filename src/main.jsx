import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/home/Home.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>
);
