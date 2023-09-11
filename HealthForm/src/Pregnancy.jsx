import React from "react";
import "./Pregnancy.css";

export const Pregnancy = () => {
  return (
    <div className="pregnancy">
      <div className="preg">
        <h3>PREGNANCY</h3>
      </div>
      <div className="preOptions">
        <div className="preAbout">
          <h3 style={{ color: "rgb(104, 96, 96)" }}>
            Are you currently pregnant?
          </h3>
          <p style={{ color: "grey" }}>
            We need to have some friendly help text here.
          </p>
        </div>
        <div className="pregSelect">
          <div className="pregSelect-a">
            <div className="preOP">
              <input className="in" type="checkbox" />
            </div>
            <div className="pregOP2">
              <h3>Pregnant</h3>
              <p>Or have given birth within the last 6 weeks</p>
            </div>
          </div>
          <div className="pregSelect-a">
            <div className="preOP">
              <input className="in" type="checkbox" />
            </div>
            <div className="pregOP2">
              <h3>Not Pregnant</h3>
              <p>Or have not given birth within the last 6 weeks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
