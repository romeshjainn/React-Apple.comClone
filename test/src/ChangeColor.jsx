import React, { useState } from "react";

export const ChangeColor = () => {
  const [col, chngColor] = useState("red");

  const upColor = (e) => {
    chngColor(e.target.value);
  };

  return (
    <div>
      <h2>ChangeColor</h2>
      <div
        style={{ backgroundColor: col, width: "100px", height: "100px" }}
      ></div>
      <input type="text" value={col} onChange={upColor} />
    </div>
  );
};
