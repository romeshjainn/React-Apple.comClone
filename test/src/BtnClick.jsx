import React, { useState } from "react";

export const BtnClick = () => {
  let btnn = document.getElementById("btnn");
  const [btn, changeBtn] = useState("Clicked");
  const changeButton = () => {
    if (btn === "Not Clicked") {
      changeBtn("Clicked");
      btnn.style.backgroundColor = "red";
    } else {
      changeBtn("Not Clicked");
      btnn.style.backgroundColor = "blue";
    }
  };
  return (
    <div>
          <button onClick={changeButton} style={{ backgroundColor:"yellow" }} id="btnn">
        {btn}
      </button>
    </div>
  );
};
