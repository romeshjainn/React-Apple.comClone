import React from "react";
import "./Diabetes.css";

export const Diabetes = () => {
  return (
    <div className="diabetes">
      <div className="dia">
        <h3>DIABETES</h3>
      </div>
      <div className="diaOptions">
        <div>
          <h3 style={{ color: "rgb(104, 96, 96)" }}>
            Have you been diagnosed with diabetes before?
          </h3>
        </div>
        <div className="inputBox-storage">
          <div className="dia-inputBox">
            <input className="dia-input" type="checkbox" id="preDiabetes" />
            <label htmlFor="preDiabetes">Pre-diabetes</label>
          </div>
          <div className="dia-inputBox">
            <input className="dia-input" type="checkbox" id="type2Diabetes" />
            <label htmlFor="type2Diabetes">Type-2</label>
          </div>
          <div className="dia-inputBox">
            <input className="dia-input" type="checkbox" id="neitherDiabetes" />
            <label htmlFor="neitherDiabetes">Neither</label>
          </div>
        </div>
      </div>
    </div>
  );
};
