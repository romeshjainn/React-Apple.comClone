import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import "./index.css";
// import { Test } from "./test";
import ParentComponent from "./ParentComponent";
import ChildComponent from "./ChildComponent";
import { Counter } from "./Counter";
import { Greet } from "./Greet";
import { MagicMsg } from "./Color";
import { ToggleImg } from "./BlackWhite";
import { MutliText } from "./MultiText";
import { ChangeColor } from "./ChangeColor";
import { MultiInput } from "./MutliInputs";
import { BtnClick } from "./BtnClick";
import { Missile } from "./launchMissile";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParentComponent />
    <Counter />
    <Greet />
    <MagicMsg />
    <Missile />
    <BtnClick />
    <MultiInput />
    <ChangeColor />
    <ToggleImg />
    <ToggleImg />
    <MutliText />
    <ChangeColor />
    <ChildComponent />
  </React.StrictMode>
);
