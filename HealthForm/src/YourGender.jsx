import React from "react";
import female from "./assets/female.png";
import male from "./assets/male.png";
import "./YourGender.css";

export const YourGender = () => {
  return (
    <div className="gender">
      <div className="yourgender">
        <h4>YOUR GENDER</h4>
      </div>
      <div className="selectgender">
        <div>
          <img src={female} alt="" />
          <h6>Female</h6>
        </div>
        <div>
          <img src={male} alt="" />
          <h6>Male</h6>
        </div>
      </div>
    </div>
  );
};
