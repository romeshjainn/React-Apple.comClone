import React, { useState } from "react";

export const MagicMsg = () => {
  const [selectedColors, setSelectedColors] = useState([]);

  const colorChange = (e) => {
    const color = e.target.value;

    if (e.target.checked) {
      setSelectedColors([...selectedColors, color]);
    }
    else {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    }
  };

  return (
    <div>
      <div>
        <input type="checkbox" onClick={colorChange} value="Red" />
        <p>Red</p>
      </div>
      <div>
        <input type="checkbox" onClick={colorChange} value="Green" />
        <p>Green</p>
      </div>
      <div>
        <input type="checkbox" onClick={colorChange} value="Purple" />
        <p>Purple</p>
      </div>
      <div>
        <input type="checkbox" onClick={colorChange} value="Pink" />
        <p>Pink</p>
      </div>
        <p>You have selected {selectedColors.join(", ")}.</p>
    </div>
  );
};
