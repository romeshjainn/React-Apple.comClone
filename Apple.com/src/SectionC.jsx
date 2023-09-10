import React from "react";
import iphones from "./assets/iphones.png";
import "./SectionC.css";

export const SectionC = () => {
  return (
    <section className="sectionc">
      <h2>iPhone 14</h2>
      <h4>Wonderful.</h4>

      <div>
        <button style={{ backgroundColor: "white" }}>Learn more &gt;</button>
        <button style={{ backgroundColor: "white" }}>Buy &gt;</button>
      </div>
      <img src={iphones} alt="" />
    </section>
  );
};

export default SectionC;
