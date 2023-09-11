import React from "react";
import "./HW.css";

export const HW = () => {
  return (
    <div className="height-weight">
      <div className="HW">
        <h4>HEIGHT & WEIGHT</h4>
      </div>

      <div className="hwData">
        <div className="height">
          <input className="input-a" placeholder="0" type="number" />
          <p>ft.</p>
          <input className="input-b" placeholder="00" type="number" />
          <p>in.</p>
        </div>
        <div className="weight">
          <input className="input-c" placeholder="000" type="number" />
          <p>lbs.</p>
        </div>
      </div>
    </div>
  );
};
