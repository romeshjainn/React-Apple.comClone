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
import Misile from "./Chirag";
import { PapaComponent } from "./PapaComponent";
import { UpComp } from "./upComp";
import { ParentHidden } from "./parentHidden";
import { ParentChildType } from "./parentChildtype";
import { NitinParent } from "./nitinParent";
import { EgParent } from "./egParent";
import ProductList from "./apiFetch";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ border: "2px solid red" }}>
      <ProductList />
    </div>
    <EgParent />
    <NitinParent />
    <ParentChildType />
    <UpComp />
    <Misile />
    <ParentHidden />
    <PapaComponent />
    <Missile />
    <ParentComponent />
    <Counter />
    <Greet />
    <MagicMsg />
    <BtnClick />
    <MultiInput />
    <ChangeColor />
    <ToggleImg />
    <MutliText />
    <ChangeColor />
    <ChildComponent />
    <ToggleImg />
  </React.StrictMode>
);
