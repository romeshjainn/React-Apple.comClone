import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header.jsx";
import { FormAbout } from "./FormAbout.jsx";
import { YourGender } from "./YourGender.jsx";
import { HW } from "./HW.jsx";
import { FamilyHistory } from "./FamilyHistory.jsx";
import { ActivityLevel } from "./ActivityLevel.jsx";
import { Diabetes } from "./Diabetes.jsx";
import { Pregnancy } from "./Pregnancy.jsx";
// import { Submit } from "./Submit.jsx";
import { Footer } from "./Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <FormAbout />
    <YourGender />
    <HW />
    <FamilyHistory/>
    <ActivityLevel/>
    <Diabetes/>
    <Pregnancy />
    {/* <Submit /> */}
    <Footer />
  </React.StrictMode>
);
