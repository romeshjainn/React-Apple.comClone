import React from "react";
import sofa from "./assets/sofa.png";
import cycle from "./assets/cycle.png";
import "./ActivityLevel.css";

export const ActivityLevel = () => {
  return (
    <div className="activitylevel">
      <div className="al">
        <h4>ACTIVITY LEVEL</h4>
      </div>
      <div className="activitylevelOptions">
        <div>
          <h3>How active are you on a weekly basis?</h3>
        </div>
        <div className="activity-checkbox">
          <div className="hello">
            <div className="checkbox-div">
              <input className="circleCheckBox" type="checkbox" />
            </div>
            <div className="checkBox-div1">
              <img className="activity-img" src={sofa} alt="" />
              <h6 className="h6">Not very active</h6>
              <p className="p">
                Less than 60 minutes of physical activity per week
              </p>
            </div>
          </div>
          <div className="hello">
            <div className="checkbox-div">
              <input className="circleCheckBox" type="checkbox" />
            </div>
            <div className="checkBox-div1">
              <img className="activity-img" src={cycle} alt="" />
              <h6 className="h6">Active</h6>
              <p className="p">60+ minutes physical activity per week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
