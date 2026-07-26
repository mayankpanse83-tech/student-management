import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Global CSS
import "./index.css";

// Sidebar CSS (agar alag file banayi hai)
import "./components/Sidebar.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);