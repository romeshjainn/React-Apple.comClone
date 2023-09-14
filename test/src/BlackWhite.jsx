import React, { useState } from "react";

export const ToggleImg = () => {
  const [isFilled, setIsFilled] = useState(false);

  const toggleImg = () => {
    const imgElement = document.getElementById("img");

    if (imgElement) {
      if (isFilled) {
        imgElement.style.fill = "none";
      } else {
        imgElement.style.fill = "black";
      }

      setIsFilled(!isFilled);
    }
  };

  return (
    <div>
      <svg id="img" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <rect width="100" height="100" />
      </svg>

      <button onClick={toggleImg}>Toggle Img</button>
    </div>
  );
};
