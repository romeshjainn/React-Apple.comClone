import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import "./index.css";
// import { Test } from "./test";
import ParentComponent from "./ParentComponent";
import ChildComponent from "./ChildComponent";
import { Counter } from "./Counter";
import { Greet } from "./Greet";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParentComponent />
    <Counter />
    <Greet />
    {/* <ChildComponent /> */}

  </React.StrictMode>
);
