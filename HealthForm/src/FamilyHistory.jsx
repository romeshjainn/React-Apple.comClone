import React from "react";
import "./FamilyHistory.css";

export const FamilyHistory = () => {
  return (
    <div className="familyhistory">
      <div className="fm">
        <h3>FAMILY HISTORY</h3>
      </div>

      <div className="fmOptions">
        <div className="fmOptions-a">
          <h4>Anyone in your family have prediabetes?</h4>
          <p>Check all that apply. If you would rather not say, that's okay.</p>
        </div>
        <div className="fmOptions-b">
          <div>
            <input style={{ padding: "1rem" }} type="checkbox" />
            <p>Parents</p>
          </div>
          <div>
            <input style={{ padding: "1rem" }} type="checkbox" />
            <p>Siblings</p>
          </div>
        </div>
      </div>
    </div>
  );
};
