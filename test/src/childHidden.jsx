import React from "react";

export const ChildHidden = ({ changeMessage }) => {
    let i = 0;
  const sendProp = (e) => {
    if (i % 2 == 0) {
      changeMessage("clicked");
     
    } else {
      changeMessage("not clicked");
      }
      i++;
  };
  return (
    <div>
      <button onClick={sendProp}>Click</button>
    </div>
  );
};
