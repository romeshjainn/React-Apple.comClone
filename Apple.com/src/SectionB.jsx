import React from "react";
import "./SectionB.css";
import macbook from "./assets/macbook.jpeg";

export const SectionB = () => {
  return (
    <section className="sectionb">
      <h2>Macbook Air 15"</h2>
      <h4 className="sectionbh4">Impressively big, Impossibly thin.</h4>
      <div className="sectionbdiv">
        <button style={{ backgroundColor: "white" }}>Learn more &gt;</button>
        <button style={{ backgroundColor: "white" }}>Buy &gt;</button>
      </div>
      <img className="macbook" src={macbook} alt="" />
    </section>
  );
};
