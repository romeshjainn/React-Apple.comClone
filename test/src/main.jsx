import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import "./index.css";
// import { Test } from "./test";
import ParentComponent from "./ParentComponent";
import ChildComponent from "./ChildComponent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParentComponent />
    {/* <ChildComponent /> */}

  </React.StrictMode>
);
