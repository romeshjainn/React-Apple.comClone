import React from "react";

export const Footer = ({ newValue }) => {
  return (
    <div className="footer">
      <div>
        <p>Gender : </p>
        <p>Height : {newValue}</p>
        <p>Weight : </p>
        <p>Family History : </p>
        <p>Activity Level : </p>
        <p>Diabetes : </p>
        <p>Pregnancy : </p>
      </div>
    </div>
  );
};
